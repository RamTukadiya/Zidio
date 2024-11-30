import express from "express";
import { getreview } from "../controller/review.controller.js";

const router = express.Router()

router.get("/", getreview)

export default router;