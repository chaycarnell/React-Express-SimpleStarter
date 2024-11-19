import { NextFunction, Request, Response } from 'express';

import { CustomExpressError } from '../../common/errors';
import { ErrorCodes } from '../../types/enums';

/**
 * Authenticates requests where an authorization header is present
 * @param req
 * @param res
 * @param next
 */
const authenticateRequest = async (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.headers.authorization;
    if (token) {
      // Replace, for example JWT + JWKS authentication
      if (token === process.env.SECRET) {
        req.user = { id: '1000' };
        req.authenticated = true;
        req.logger.info(
          `[Express] Authorization success: Operation ${req.method} | Route ${req.url} | User ${req.user.id}`,
        );
        return next();
      }
      req.logger.error(
        `[Express] Authorization failed: Operation ${req.method} | Route ${req.url}`,
      );
      throw new CustomExpressError(ErrorCodes.UNAUTHENTICATED);
    } else {
      req.user = undefined;
      req.authenticated = false;
      return next();
    }
  } catch (err) {
    return next(err);
  }
};

export default authenticateRequest;
