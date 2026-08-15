// import dotenv from "dotenv";
// dotenv.config();
import "dotenv/config";
import express from "express";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())
app.use("/", paymentRoute);
app.listen(8080, () => {
  console.log("listening to port 8080");
});
