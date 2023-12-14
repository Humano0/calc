import express from "express";
import cors from "cors";
import calculateRoute from "./routes/calculateRoute";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/calc', calculateRoute);

export default app;