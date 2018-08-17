import express from "express";
import testController from "./Controllers/testController";
const router = express.Router();
router.get("/test", testController.get);
export default router;
