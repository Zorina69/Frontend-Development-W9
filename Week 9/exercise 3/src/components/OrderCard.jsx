import React from "react";

export default function OrderCard({ index, product, price, quantity, updateQuantity }) {
  return (
    <div className="order-card">
      <h4>{product}</h4>
      <small>${price.toFixed(2)}</small>

      <div className="order-quantity">
        <button className="order-button" onClick={() => updateQuantity(index, quantity - 1)}>-</button>
        <h4>{quantity}</h4>
        <button className="order-button" onClick={() => updateQuantity(index, quantity + 1)}>+</button>
      </div>
    </div>
  );
}
