/**
 * Define connection config options to access the CEP/backend API.
 */
export interface AppConfig {
  baseUrl: string;
  sessionId?: string;
  jwtToken?: string;
  locale?: string;
  navigation: {
    header: string;
    left: string;
  };
}
