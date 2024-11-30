import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import reviewRoute from "./route/review.route.js";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI= process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("Error", error);   
}

app.use("/review", reviewRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});