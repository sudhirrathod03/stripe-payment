import {
    PaymentElement,
    useStripe,
    useElements,
  } from "@stripe/react-stripe-js";
  
  function PaymentForm() {
    const stripe = useStripe();
    const elements = useElements();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  

      console.log("stripe:", stripe);
      console.log("elements:", elements);
      if (!stripe || !elements) {
        return;
      }
  
      const result = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/payment-success",
        },
      });
  
      if (result.error) {
        console.log(result.error.message);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <PaymentElement />
  
        <button type="submit" disabled={!stripe}>
          Pay ₹100
        </button>
      </form>
    );
  }
  
  export default PaymentForm;