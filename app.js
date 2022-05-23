import dotenv from 'dotenv';
dotenv.config({});
import express from 'express';
import cors from 'cors'
import routerAPI from './routes/index.js';
import dbConnection from './config/database.js';


const connectDB = async () => {
    await dbConnection();
};

connectDB();

const port = process.env.PORT;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

routerAPI(app);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});