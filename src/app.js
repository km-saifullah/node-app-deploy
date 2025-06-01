import helloRouter from "./routes/helloRoutes.js";
import express from "express";

const app = express();

app.use(express.json());

app.use("/api", helloRouter);

export default app;
