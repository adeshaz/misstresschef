import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "../components/Admin/AdminNavbar"; // ✅ Import navbar

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch("https://mistresscheffbe.onrender.com/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 401 || res.status === 403) {
        alert("Unauthorized. Please log in.");
        navigate("/admin/login");
        return;
      }
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await fetch(`https://mistresscheffbe.onrender.com/api/orders/${id}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      fetchOrders();
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      {/* ✅ Reusable Navbar */}
      <AdminNavbar />

      <div className="container mt-4">
        <h2 className="mb-4">Orders Dashboard</h2>
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr>
                <th>Customer</th>
                <th>Cart</th>
                <th>Address</th>
                <th>Status</th>
                <th>Change Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name} ({order.email})</td>
                  <td>
                    {order.cart.map((item, i) => (
                      <div key={i}>
                        {item.name} - {item.quantity} x ₦{item.price}
                      </div>
                    ))}
                  </td>
                  <td>{order.address}</td>
                  <td>
                    <span className={`badge 
                      ${order.status === "Pending" ? "bg-warning text-dark" : ""} 
                      ${order.status === "Shipped" ? "bg-info" : ""} 
                      ${order.status === "Delivered" ? "bg-success" : ""}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <select
                      className="form-select"
                      value={order.status}
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
