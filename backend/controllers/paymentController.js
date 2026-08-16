import stripe from "../config/stripe.js";

export const test = async (req, res) => {
  try {
    const account = await stripe.accounts.retrieve();
    res.status(200).json({
      message: "Stripe connected successfully",
      success: true,
      accountId: account.id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const createPaymentIntent = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 10000,
      currency: "inr",
    });

    res.status(200).json({ clientSecret: (await paymentIntent).client_secret });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Payment creation failed", success: false });
  }
};
