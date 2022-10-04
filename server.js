import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import billsRouter from './routes/billsRoutes.js';
dotenv.config();
//Connect with MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err.message);
});

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "*"
}))



//routes
 app.use('/api/products/', productRouter);
 app.use('/api/users/', userRouter);
app.use('/api/bills/', billsRouter);

//Create Port 
const PORT = process.env.PORT || 5001;

//Listen
app.listen(PORT, () => {
    console.log(`Serve at running on the port: http://localhost:${PORT}`);
} )