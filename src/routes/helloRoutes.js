import { Router } from "express";
import { helloMessage } from "../controllers/helloController.js";

const router = Router();

router.route("/hello").get(helloMessage);

export default router;
