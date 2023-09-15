import express from "express";
import {GetUser} from "../controllers/general.js"
const router = express.Router();
router.get("/user/:id" , GetUser)
export default router;
