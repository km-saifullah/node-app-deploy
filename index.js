import express from "express";
import app from "./src/app.js";
import { serverPort } from "./src/config/index.js";

app.listen(serverPort, () => console.log(`http://localhost:${serverPort}`));
