import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, updateQty, selectCartTotal } from "../redux/cartSlice";
import API from "../utils/api";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 👉 Pay with Paystack
  const payWithPaystack = () => {
    if (!form.email || !form.name || !form.phone || !form.address) {
      alert("⚠️ Please fill all shipping details before payment.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: form.email,
      amount: total * 100, // Paystack requires kobo
      currency: "NGN",

      callback: function (response) {
        alert("✅ Payment complete! Ref: " + response.reference);

        const token = localStorage.getItem("token");
        if (!token) {
          alert("❌ You must be logged in to place an order.");
          navigate("/login");
          return;
        }

        // 👉 Save order to backend
        API.post("/orders", {
          ...form,
          cart,
          total,
          paymentRef: response.reference,
        })
          .then((res) => {
            if (res.data.success) {
              alert("🛒 Order saved successfully!");
              localStorage.setItem("lastOrderId", res.data.order._id);
              dispatch(clearCart());
              navigate("/thank-you", { state: { order: res.data.order } });
            } else {
              alert("❌ Error saving order: " + res.data.message);
            }
          })
          .catch((err) => alert("❌ Network error: " + err.message));
      },

      onClose: function () {
        alert("⚠️ Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <div className="row">
        {/* Shipping Info */}
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="form-control mb-2"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-2"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="form-control mb-2"
            onChange={handleChange}
          />
          <textarea
            name="address"
            placeholder="Address"
            className="form-control mb-2"
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  ₦{item.price}
                </div>

                {/* Quantity Controls */}
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary me-2"
                    onClick={() =>
                      dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))
                    }
                    disabled={item.qty <= 1}
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary ms-2"
                    onClick={() =>
                      dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))
                    }
                  >
                    +
                  </button>
                </div>

                {/* Item total */}
                <span className="fw-bold">₦{item.price * item.qty}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between fw-bold">
              Total <span>₦{total}</span>
            </li>
          </ul>

          <button className="btn btn-success w-100" onClick={payWithPaystack}>
            Pay with Paystack
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
