import React, { useState } from "react";
import OrderStatusBar from "./OrderStatusBar"; // ✅ import
import imgpart100 from "../components/multimedia/box.png"
import "./TrackOrders.css"

const TrackOrder = () => {
  const [email, setEmail] = useState("");
  const [paymentRef, setPaymentRef] = useState("");
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const getStatusBadge = (status) => {
    switch (status) {
      case "Pending":
        return <span className="badge bg-warning text-dark">⏳ Pending</span>;
      case "Processing":
        return <span className="badge bg-info text-dark">🔄 Processing</span>;
      case "Shipped":
        return <span className="badge bg-primary">📦 Shipped</span>;
      case "Delivered":
        return <span className="badge bg-success">✅ Delivered</span>;
      default:
        return <span className="badge bg-secondary">Unknown</span>;
    }
  };

  const handleTrack = async () => {
    try {
      setError("");
      setOrders([]);
      setOrder(null);

      let res, data;

      // ✅ Track by paymentRef
      if (paymentRef && !email) {
        res = await fetch(`http://localhost:5900/api/orders/track/${paymentRef}`);
        data = await res.json();

        if (data.success) {
          setOrder(data.order);
        } else {
          setError(data.message);
        }
      }
      // ✅ Track by email
      else if (email && !paymentRef) {
        res = await fetch(`http://localhost:5900/api/orders/user-orders?email=${email}`);
        data = await res.json();

        if (data.success) {
          setOrders(data.orders);
        } else {
          setError(data.message);
        }
      }
      // ✅ Track by both email & paymentRef
      else if (email && paymentRef) {
        res = await fetch(
          `http://localhost:5900/api/orders/user-orders?email=${email}&paymentRef=${paymentRef}`
        );
        data = await res.json();

        if (data.success) {
          // If only one order found, show it directly
          if (data.orders.length === 1) {
            setOrder(data.orders[0]);
          } else {
            setOrders(data.orders);
          }
        } else {
          setError(data.message);
        }
      }
      // No input
      else {
        setError("⚠️ Please enter your email or payment reference.");
      }
    } catch (error) {
      setError("⚠️ Network error, try again.");
    }
  };

  return (
    <div className="container mt-5">
      <h2><img src={imgpart100} className='box-img' alt="box-icon" />
         Track Your Order</h2>
      <p>Enter your email or payment reference to check your order status.</p>

      {/* Input fields */}
      <input
        type="email"
        className="form-control mb-2"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter Paystack Reference"
        value={paymentRef}
        onChange={(e) => setPaymentRef(e.target.value)}
      />

      <button className="btn btn-primary w-100 mb-3" onClick={handleTrack}>
        Track Order
      </button>

      {error && <p className="text-danger">{error}</p>}

      {/* ✅ Single order */}
      {order && (
        <div className="mt-4">
          <h5>Order Details</h5>
          <p><strong>Ref:</strong> {order.paymentRef}</p>
          <p><strong>Total:</strong> ₦{order.total}</p>
          <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

          <h6 className="mt-3">📊 Order Progress</h6>
          {getStatusBadge(order.status)}
          <OrderStatusBar status={order.status} />
        </div>
      )}

      {/* ✅ Multiple orders */}
      {orders.length > 0 && (
        <div className="mt-4">
          <h4>Your Orders</h4>
          {orders.map((order) => (
            <div key={order._id} className="card mb-3 p-3 shadow-sm">
              <h5>Order Ref: {order.paymentRef}</h5>
              <p><strong>Total:</strong> ₦{order.total}</p>
              <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              <p><strong>Status:</strong> {getStatusBadge(order.status)}</p>

              {/* ✅ Progress bar */}
              <div className="progress mt-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width:
                      order.status === "Pending"
                        ? "25%"
                        : order.status === "Processing"
                        ? "50%"
                        : order.status === "Shipped"
                        ? "75%"
                        : "100%",
                  }}
                >
                  {order.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;

//     const headers = {
//       "Content-Type": "application/json",
//     };

//       // 👉 Case 1: Track by paymentRef
//     if (paymentRef && !email) {
//       res = await fetch(`http://localhost:5900/api/orders/track/${paymentRef}`, {
//         method: "GET",
//         headers,
//         credentials: "include",
//       });
//       data = await res.json();

//       if (data.success) {
//         setOrder(data.order);
//       } else {
//         setError(data.message);
//       }
//     }
//       // 👉 Case 2: Track by email
//     else if (email && !paymentRef) {
//       res = await fetch(
//         `http://localhost:5900/api/orders/user-orders?email=${email}`,
//         {
//           method: "GET",
//           headers,
//           credentials: "include",
//         }
//       );
//       data = await res.json();

//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         setError(data.message);
//       }
//     }
//       // 👉 Case 3: Both email + paymentRef
//     else {
//       const query = new URLSearchParams();
//       if (email) query.append("email", email);
//       if (paymentRef) query.append("paymentRef", paymentRef);

//       res = await fetch(`http://localhost:5900/api/orders/track?${query}`, {
//         method: "GET",
//         headers,
//         credentials: "include",
//       });
//       data = await res.json();

//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         setError(data.message);
//       }
//     }
//   } catch (error) {
//     console.error("❌ Network error:", error);
//     setError("⚠️ Network error, try again.");
//   }
// };

//   return (
//     <div className="container mt-5">
//       <h2>📦 Track Your Order</h2>
//       <p>Enter your email or payment reference to check your order status.</p>

//       {/* Input fields */}
//       <input
//         type="email"
//         className="form-control mb-2"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <input
//         type="text"
//         className="form-control mb-2"
//         placeholder="Enter Paystack Reference"
//         value={paymentRef}
//         onChange={(e) => setPaymentRef(e.target.value)}
//       />

//       <button className="btn btn-primary w-100 mb-3" onClick={handleTrack}>
//         Track Order
//       </button>

//       {error && <p className="text-danger">{error}</p>}

//       {/* ✅ Single order */}
//       {order && (
//         <div className="mt-4">
//           <h5>Order Details</h5>
//           <p><strong>Ref:</strong> {order.paymentRef}</p>
//           <p><strong>Total:</strong> ₦{order.total}</p>
//           <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

//           <h6 className="mt-3">📊 Order Progress</h6>
//           {getStatusBadge(order.status)} {/* ✅ Show badge */}
//           <OrderStatusBar status={order.status} />
//         </div>
//       )}
