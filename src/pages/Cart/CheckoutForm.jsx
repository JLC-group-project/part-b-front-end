import React, { useState } from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";


  const stripe = loadStripe(
    "pk_live_51L13DBC2W0jHLBfIED01SG0CllozsvMy9dcUsRT87BxaMsfKn2kXrf1RitrWPjC5BNDoEQpAoDv9KA8SWnSvknWQ00zAMoOaC6"
  );

function CheckoutForm() {
  <Elements stripe={stripe}>
    <MyComponent {...props} />
  </Elements>;
}

export default CheckoutForm;
