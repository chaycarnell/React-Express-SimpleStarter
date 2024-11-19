export const BaseServerRoutes = Object.freeze({
  REST: '/rest',
  ROOT: '/',
});

export const SubRoutes = Object.freeze({
  PUBLIC: '/public',
  PROTECTED: '/protected',
});

export const ErrorCodes = Object.freeze({
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  UNAUTHORIZED: 'UNAUTHORIZED',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  UNKNOWN: 'UNKNOWN',
});
