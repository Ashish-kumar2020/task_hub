import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

dotenv.config()

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server is up and running on PORT NUMBER : ${PORT}`)
})