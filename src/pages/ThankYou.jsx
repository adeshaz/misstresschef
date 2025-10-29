import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const order = location.state?.order; // 👈 get order passed from Checkout

  return (
    <div className="container text-center mt-5">
      <h2>🎉 Thank You for Your Order!</h2>
      <p className="lead">
        We have received your payment and your order is being processed.
      </p>

      {order ? (
        <div className="mt-4">
          <h4>📦 Order Summary</h4>
          <ul className="list-group">
            {order.cart.map((item, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between">
                {item.name} (x{item.qty}) <span>₦{item.price * item.qty}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              Total <span>₦{order.total}</span>
            </li>
          </ul>
        </div>
      ) : (
        <p className="text-danger">⚠️ No order details available.</p>
      )}

      <Link to="/shop" className="btn btn-primary mt-3">
        Continue Shopping
      </Link>
    </div>
  );
};

export default ThankYou;
