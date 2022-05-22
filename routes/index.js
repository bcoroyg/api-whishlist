import express from 'express'

import destinationRouter from './destination.route.js'

const routerApi = (app) => {
    const router = express.Router();
    app.use('/api', router);
    router.use('/destinations', destinationRouter);
  }
export default routerApi;