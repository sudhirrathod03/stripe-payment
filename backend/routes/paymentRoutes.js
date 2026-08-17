import express from "express";
import { createPaymentIntent, createWebhook, test } from "../controllers/paymentController.js";

const router = express();

router.get("/test", test);
router.post("/create-payment-intent", createPaymentIntent);
router.post("/webhook", createWebhook)
export default router;
