import mongoose from "mongoose";

const reviewSchema=mongoose.Schema({
    name:String,
    review:String,
    rating:Number
})

const review = mongoose.model("review", reviewSchema);

export default review;