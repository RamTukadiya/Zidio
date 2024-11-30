import review from "../model/review.model.js"

export const getreview=async(req, res)=>{
    try {
        const review=await review.find();
        res.status(200).json(review);
    } catch (error) {
        console.log("Error",error);
        res.status(500).json(error);
    }
}