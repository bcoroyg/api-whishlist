import express from 'express';
import routerAPI from './routes/index.js';
const port = process.env.PORT || 3000;

const app = express();

routerAPI(app);

app.listen(port, () => {
    console.log(`Server started on port`);
});