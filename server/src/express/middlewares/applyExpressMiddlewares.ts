import compression from 'compression';
import cors from 'cors';
import express, { Router } from 'express';
import helmet from 'helmet';
import path from 'path';

import { BaseServerRoutes } from '../../types/enums';
import expressAuth from './expressAuth';
import expressErrorHandler from './expressErrorHandler';
import expressLogger from './expressLogger';

const staticFiles = express.static(path.join(__dirname, '../../../../public'));

const applyExpressMiddlewares = (
  app: express.Application,
  routes: Router,
  isProduction: boolean,
) => {
  app.use(cors<cors.CorsRequest>());
  app.use(
    helmet({
      contentSecurityPolicy: isProduction ? undefined : false,
    }),
  );
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(compression());
  // Remember, order matters!
  app.use(expressLogger);
  app.use(expressAuth);
  app.use(staticFiles);
  app.use(BaseServerRoutes.REST, routes);
  app.use('*', staticFiles);
  app.use(expressErrorHandler);
};

export default applyExpressMiddlewares;
