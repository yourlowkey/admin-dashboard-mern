import express from "express";
import {GetProducts} from "../controllers/client.js"
const router = express.Router();
router.get("/products",GetProducts)
export default router;
