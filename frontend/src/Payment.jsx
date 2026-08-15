import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./config/stripe";
import PaymentForm from "./components/PaymentForm";
import { useEffect, useState } from "react";

function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const res = await fetch("http://localhost:8080/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setClientSecret(data.clientSecret);
        console.log(data);
      } catch (error) {}
    };
    createPaymentIntent();
  }, []);

  if (!clientSecret) {
    return <p>Loading payment...</p>;
  }
  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm />
    </Elements>
  );
}

export default Payment;
