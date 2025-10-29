// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../utils/api"; // ✅ axios instance

const AdminDashboard = () => {
  const [filter, setFilter] = useState("All");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

      // ✅ Fetch orders from backend
const fetchOrders = async () => {
  try {
    const res = await API.get("/admin"); // ✅ works now with adminToken

    if (res.data.success) {
      setOrders(res.data.orders);
    } else {
      setOrders([]);
    }
  } catch (err) {
    console.error("❌ Fetch error:", err.response?.data || err.message);
    setOrders([]);
  } finally {
    setLoading(false);
  }
};


  // ✅ Update order status
  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const res = await API.put(`/admin/orders/${orderId}/status`, {
        status: newStatus,
      });
      if (res.data.success) {
        fetchOrders(); // refresh list
      } else {
        alert("❌ " + res.data.message);
      }
    } catch (err) {
      console.error("❌ Status update error:", err.response?.data || err.message);
      alert("❌ Server error");
    }
  };

  // ✅ Run once on mount
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin-login");
      return;
    }
    fetchOrders();
  }, [navigate]);

  // ✅ Status badge
  const getStatusBadge = (status) => {
    let badgeClass = "badge ";
    switch (status) {
      case "Pending":
        badgeClass += "bg-warning text-dark";
        break;
      case "Processing":
        badgeClass += "bg-info text-dark";
        break;
      case "Shipped":
        badgeClass += "bg-primary";
        break;
      case "Delivered":
        badgeClass += "bg-success";
        break;
      default:
        badgeClass += "bg-secondary";
    }
    return <span className={badgeClass}>{status}</span>;
  };

  // ✅ Filter orders
  const filteredOrders =
    filter === "All" ? orders : orders.filter((order) => order.status === filter);

  if (loading) return <p className="text-center my-5">⏳ Loading orders...</p>;

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">📦 Admin Dashboard - Orders</h2>

      {/* Logout */}
      <button
        className="btn btn-danger mb-3"
        onClick={() => {
          localStorage.removeItem("adminToken");
          navigate("/admin-login");
        }}
      >
        Logout
      </button>

      {/* Orders Table */}
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="table-responsive">
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <h3>Orders</h3>
            <select
              className="form-select"
              style={{ width: "200px" }}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Orders</option>
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <table className="table table-bordered table-hover align-middle">
            <thead className="table-success">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Status</th>
                <th>Total (₦)</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td>{order.name}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.address}</td>
                  <td>{getStatusBadge(order.status)}</td>
                  <td>{order.total}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                  <td>
                    <select
                      className="form-select form-select-sm"
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order._id, e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
