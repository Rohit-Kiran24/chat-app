// const express=require('express'); instead of this we can use import express from 'express'; if we add "type":"module" in package.json file
import express from 'express';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import {connectDB} from './lib/db.js';


dotenv.config();

const app=express();
const PORT=process.env.PORT

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)

app.listen(PORT,()=>{
    console.log("server is runing on port "+PORT);
    connectDB();
});