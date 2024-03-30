import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import logger from '../../utils/logger';

const expressLogger = (req: Request, res: Response, next: NextFunction) => {
  // Assign logger instance with logTraceId metadata attached
  req.logger = logger.child({ logTraceId: uuidv4() });
  // Filter logs to API and base requests
  if (req.url.includes('/rest') || req.url === '/') {
    req.logger.info(
      `[Express] New request: | Operation ${req.method} | Route ${req.url}`,
    );
    res.on('finish', () => {
      req.logger.info(`[Express] End request`);
    });
  }
  return next();
};

export default expressLogger;
