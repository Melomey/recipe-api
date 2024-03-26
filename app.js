import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/recipes.routes.js"


dotenv.config()

const app = express()
const PORT = process.env.PORT || 6001

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.static('uploads'));

//use routes
app.use(router)

//make database connection
await mongoose.connect(process.env.MONGO_URI)

//make database connection

app.listen(PORT, () => {
    console.log(`Recipe API is running on ${PORT}`)
})