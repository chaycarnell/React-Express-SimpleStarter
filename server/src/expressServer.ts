import express from 'express';
import http from 'http';

import expressRoutes from './express/api/routes/routes';
import applyExpressMiddlewares from './express/middlewares/applyExpressMiddlewares';
import { BaseServerRoutes } from './types/enums';
import logger from './utils/logger';

const isProduction = process.env.NODE_ENV === 'production';

const port = (process.env.PORT && Number(process.env.PORT)) || 4001;

const app = express();

// Apply express middlewares
applyExpressMiddlewares(app, expressRoutes, isProduction);

// Serve React app
// Wildcard match will handle returning index when page is refreshed
// Routing would otherwise return and error i.e. 'cannot get /someRoute'

const httpServer = http.createServer(app);

(async () => {
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  logger.info(
    `Express server listening on ${port} with base routes ${BaseServerRoutes.ROOT} and ${BaseServerRoutes.REST}`,
  );
})();

// Gracefully shut down in the case of interrupt and termination signals
['SIGINT', 'SIGTERM'].forEach((signal) => {
  process.on(signal, () => httpServer.close());
});
