export enum BaseServerRoutes {
  REST = '/rest',
  ROOT = '/',
}

export enum SubRoutes {
  PUBLIC = '/public',
  PROTECTED = '/protected',
}

export enum ErrorCodes {
  UNAUTHENTICATED = 'UNAUTHENTICATED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  UNKNOWN = 'UNKNOWN',
}
