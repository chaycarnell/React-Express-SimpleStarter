import logger from '../utils/logger';
import { ErrorCodes } from './enums';
import { ErrorObject } from './interfaces';

export type customLogger = typeof logger;

export type ErrorMap = Record<ErrorCode, ErrorObject>;

export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
