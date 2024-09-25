import express from "express";
import dotenv from "dotenv";
import {connectDB} from './config/db.js'

const app = express();
dotenv.config();


app.get("/products", (req,res) => {
    res.send("productss");
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})

