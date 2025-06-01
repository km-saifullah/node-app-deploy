import { Router } from "express";
import { helloMessage } from "../controllers/helloController.js";

const router = Router();

router.route("/").get(helloMessage);

export default router;
