import express from "express";
import { createPaymentIntent, test } from "../controllers/paymentController.js";

const router = express();

router.get("/test", test);
router.post("/create-payment-intent", createPaymentIntent);
export default router;
