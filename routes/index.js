import express from 'express'

import destinoRouter from './destino.route.js'

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/destinos', destinoRouter);
  }
export default routerApi;