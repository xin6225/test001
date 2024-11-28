package com.xintek.world.travel.app;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.apache.commons.io.FilenameUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.CacheControl;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.validation.MessageCodesResolver;
import org.springframework.validation.Validator;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.AsyncHandlerInterceptor;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.*;
import org.springframework.web.servlet.resource.ResourceHttpRequestHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

import static org.springframework.web.servlet.HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE;
import static org.springframework.web.servlet.HandlerMapping.PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE;

/**
 * Configures basic web server beans
 */
@Configuration
@ComponentScan
@EnableAsync
public class WebServerConfiguration implements WebMvcConfigurer {

    private static final String UI_PATH_PATTERN = "/ui/**";
    private static final String UI_RESOURCE = "classpath:/ui-resource/";
    private static final String UI_ENTRY_POINT = "index.html";

    private final ObjectMapper objectMapper;

    public WebServerConfiguration() {
        this.objectMapper = createObjectMapper();
    }

    @Bean
    public Jackson2ObjectMapperBuilder objectMapperBuilder() {
        return new Jackson2ObjectMapperBuilder().modules(new JavaTimeModule()).featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, SerializationFeature.WRITE_DATES_WITH_ZONE_ID, SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS);
    }

    @Override
    public void configurePathMatch(PathMatchConfigurer pathMatchConfigurer) {
        pathMatchConfigurer.setUseSuffixPatternMatch(false);
    }

    @Override
    public void configureContentNegotiation(ContentNegotiationConfigurer contentNegotiationConfigurer) {
        contentNegotiationConfigurer.favorPathExtension(false);
    }

    @Override
    public void configureAsyncSupport(AsyncSupportConfigurer asyncSupportConfigurer) {

    }

    @Override
    public void configureDefaultServletHandling(DefaultServletHandlerConfigurer defaultServletHandlerConfigurer) {

    }

    @Override
    public void addFormatters(FormatterRegistry formatterRegistry) {

    }

    @Override
    public void addInterceptors(InterceptorRegistry interceptorRegistry) {
        interceptorRegistry.addInterceptor(new UiResourceHandlerInterceptor());
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry resourceHandlerRegistry) {
        resourceHandlerRegistry.addResourceHandler(UI_PATH_PATTERN).addResourceLocations(UI_RESOURCE);

    }

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {

    }

    @Override
    public void addViewControllers(ViewControllerRegistry viewControllerRegistry) {
        viewControllerRegistry.addRedirectViewController("/", "/ui");
    }

    @Override
    public void configureViewResolvers(ViewResolverRegistry viewResolverRegistry) {

    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> list) {

    }

    @Override
    public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> list) {

    }

    @Override
    public void configureMessageConverters(List<HttpMessageConverter<?>> list) {
        list.add(new ByteArrayHttpMessageConverter());
        list.add(new MappingJackson2HttpMessageConverter(this.objectMapper));
        list.add(new StringHttpMessageConverter());
    }

    @Override
    public void extendMessageConverters(List<HttpMessageConverter<?>> list) {

    }

    @Override
    public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> list) {

    }

    @Override
    public void extendHandlerExceptionResolvers(List<HandlerExceptionResolver> list) {

    }

    @Override
    public Validator getValidator() {
        return null;
    }

    @Override
    public MessageCodesResolver getMessageCodesResolver() {
        return null;
    }

    private ObjectMapper createObjectMapper() {
        return Jackson2ObjectMapperBuilder.json().modules(new JavaTimeModule()).serializationInclusion(JsonInclude.Include.NON_NULL).featuresToDisable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS, SerializationFeature.WRITE_DATES_WITH_ZONE_ID, SerializationFeature.WRITE_DURATIONS_AS_TIMESTAMPS, DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, DeserializationFeature.ADJUST_DATES_TO_CONTEXT_TIME_ZONE).build();
    }

    private static final class UiResourceHandlerInterceptor implements AsyncHandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object handler) throws Exception {
            // Only overwrite requests to the resource handler
            if (handler instanceof ResourceHttpRequestHandler) {
                String bestMatchingPattern = (String) httpServletRequest.getAttribute(BEST_MATCHING_PATTERN_ATTRIBUTE);
                String path = (String) httpServletRequest.getAttribute(PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE);
                preHandleResource(httpServletRequest, bestMatchingPattern, path, httpServletResponse);
            }
            return true;
        }

        @Override
        public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

        }

        @Override
        public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

        }

        void preHandleResource(HttpServletRequest request, String bestMatchingPattern, String path, HttpServletResponse response) {
            CacheControl cc = CacheControl.noCache().mustRevalidate();
            if (UI_PATH_PATTERN.equals(bestMatchingPattern) && FilenameUtils.indexOfExtension(path) < 0) {
                /* Resources without extension are no resources but the angular page */
                request.setAttribute(PATH_WITHIN_HANDLER_MAPPING_ATTRIBUTE, UI_ENTRY_POINT);
            }
            response.setHeader("Cache-Control", cc.getHeaderValue());
        }

        @Override
        public void afterConcurrentHandlingStarted(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {

        }
    }
}
