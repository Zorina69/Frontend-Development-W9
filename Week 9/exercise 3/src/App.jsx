import React, { useState } from "react";
import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  { product: "Banana", price: 54.6, quantity: 3 },
  { product: "Computer", price: 100.5, quantity: 4 },
  { product: "Table", price: 1070, quantity: 3 },
];

export default function App() {
  const [orders, setOrders] = useState(ORDERS);

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    setOrders((prevOrders) =>
      prevOrders.map((order, i) =>
        i === index ? { ...order, quantity: Math.max(0, newQuantity) } : order
      )
    );
  };

  // Calculate total price
  const total = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

  return (
    <>
      <header>
        <h1>Your Orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard
            key={index}
            index={index}
            product={order.product}
            price={order.price}
            quantity={order.quantity}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>

      <CheckoutButton total={total} />
    </>
  );
}
