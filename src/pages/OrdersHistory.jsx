import React, { useEffect, useState } from "react";
import OrderStatusBar from "./OrderStatusBar"; // ✅ import it

const OrdersHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token"); // 🔑 JWT from login
        if (!token) {
          setError("You must be logged in to view order history.");
          return;
        }

        const res = await fetch("http://localhost:5900/api/orders/history", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (data.success) {
          setOrders(data.orders);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("⚠️ Network error, try again.");
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="container mt-5">
      <h2>🛒 My Orders</h2>
      {error && <p className="text-danger">{error}</p>}

      {orders.length === 0 && !error ? (
        <p>No orders found.</p>
      ) : (
        <ul className="list-group">
          {orders.map((order) => (
            <li key={order._id} className="list-group-item">
              <strong>Ref:</strong> {order.paymentRef} <br />
              <strong>Total:</strong> ₦{order.total} <br />
              <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()} <br />

              {/* ✅ Progress bar */}
              <OrderStatusBar status={order.status} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersHistory;
