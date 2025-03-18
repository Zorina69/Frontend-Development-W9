import React from "react";

export default function CheckoutButton({ total }) {
  return (
    <button className="checkout-button">
      <p>Checkout</p>
      <p className="right">{`$${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}`}</p>
    </button>
  );
}
