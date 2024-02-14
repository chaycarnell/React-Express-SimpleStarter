export interface CustomRequestContext {
  logTraceId: string;
  authenticated: boolean;
  user?: {
    id: string;
  };
}

export interface ErrorObject {
  status: number;
  message: string;
}
