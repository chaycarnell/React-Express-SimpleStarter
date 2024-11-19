import { customLogger } from './types';

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
