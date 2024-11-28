package com.xintek.world.travel.app;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.stereotype.Component;

@Slf4j
@RequiredArgsConstructor
@Component
public class TravelMain {

    public static void main(String[] args) {
        log.info("Travel around the world Application initialization...");

        try {
            SpringApplication.run(TravelMain.class, args);

        } catch (Exception e) {
            log.error("initialization failed", e);
            System.exit(1);
        }
    }


}
