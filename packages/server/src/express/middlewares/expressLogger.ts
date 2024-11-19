import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import logger from '../../utils/logger';

const expressLogger = (req: Request, res: Response, next: NextFunction) => {
  // Assign logger instance with logTraceId metadata attached
  const logTraceId = uuidv4();
  req.logger = logger.child({ logTraceId });
  // Filter logs to API and base requests
  if (req.url.includes('/rest') || req.url === '/') {
    req.logger.info(
      `[Express] New request: | Operation ${req.method} | Route ${req.url}`,
    );
    res.on('finish', () => {
      req.logger.info(`[Express] End request`);
    });
  }
  // Include the log trace in the response headers
  res.setHeader('x-log-trace-id', logTraceId);
  return next();
};

export default expressLogger;
