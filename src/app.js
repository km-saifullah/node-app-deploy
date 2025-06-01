import helloRouter from "./routes/helloRoutes.js";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res
    .status(200)
    .json({ status: true, message: "welcome to the test api" });
});
app.use("/api", helloRouter);

export default app;
