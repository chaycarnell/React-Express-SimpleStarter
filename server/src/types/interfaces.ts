import logger from '../utils/logger';

type customLogger = typeof logger;

export interface CustomRequestContext {
  logger: customLogger;
  authenticated: boolean;
  user?: {
    id: string;
  };
}

export interface ErrorObject {
  status: number;
  message: string;
}
