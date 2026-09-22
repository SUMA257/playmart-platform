export interface EnvironmentConfig {
  baseUrl: string;
  apiTimeout: number;
  navigationTimeout: number;
}

const ENV = process.env.TEST_ENV || 'local';

export const ENVIRONMENTS: Record<string, EnvironmentConfig> = {
  local: {
    baseUrl: 'http://localhost:5173',
    apiTimeout: 5000,
    navigationTimeout: 10000
  },
  staging: {
    baseUrl: 'https://staging.playmart.in',
    apiTimeout: 10000,
    navigationTimeout: 20000
  },
  prod: {
    baseUrl: 'https://playmart.in',
    apiTimeout: 15000,
    navigationTimeout: 25000
  }
};

export const currentEnv = ENVIRONMENTS[ENV] || ENVIRONMENTS.local;