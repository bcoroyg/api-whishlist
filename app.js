import dotenv from 'dotenv';
dotenv.config({});
import express from 'express';
import routerAPI from './routes/index.js';
import dbConnection from './config/database.js';

const connectDB = async () => {
    await dbConnection();
};

connectDB();

const port = process.env.PORT;

const app = express();

routerAPI(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});