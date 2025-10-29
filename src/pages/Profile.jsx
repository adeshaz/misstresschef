import React, { useEffect, useState } from "react";
import API from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, logout } from "../redux/authSlice";
import "./Profile.css"
import { FaHandPaper } from "react-icons/fa";

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resUser = await API.get("/users/profile");
        dispatch(setUser(resUser.data.user));

        const resOrders = await API.get("/orders/my");
        setOrders(resOrders.data.orders);
      } catch (err) {
        setError("⚠️ Session expired. Please log in again.");
        dispatch(logout());
        setTimeout(() => navigate("/login"), 2000);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch, navigate]);

  const localUser = user || JSON.parse(localStorage.getItem("user"));

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a photo first!");

    setUploading(true);
    const formData = new FormData();
    formData.append("profilePic", selectedFile);

    try {
      const res = await API.put("/users/update-profile-pic", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      dispatch(setUser(res.data.user));
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("✅ Profile picture updated!");
      setPreview(null);
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to upload photo");
    } finally {
      setUploading(false);
    }
  };

  if (loading) return <p className="text-center mt-5">
  {/* <!-- From Uiverse.io by zanina-yassine -->  */}
<div id="container">
  <label className="loading-title">Loading ...</label>
  <span className="loading-circle sp1">
    <span className="loading-circle sp2">
      <span className="loading-circle sp3"></span>
    </span>
  </span>
</div>
  
   Loading profile...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container mt-5">
      <div className="card mb-4 shadow">
        <div className="card-body d-flex align-items-center gap-3">
          {/* ✅ Profile Picture & Upload */}
          <div className="text-center">
            <img
              src={
                preview ||
                localUser?.profilePic ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="rounded-circle border mb-2"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />

            <input
              type="file"
              accept="image/*"
              className="form-control form-control-sm"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <button
                onClick={handleUpload}
                className="btn btn-success btn-sm mt-2"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Upload Photo"}
              </button>
            )}
          </div>

          <div className="ms-3">
            <h2 className="mb-1">Welcome, {localUser?.firstName} <FaHandPaper className="text-yellow-500" /></h2>
            <p className="mb-0">
              <strong>Email:</strong> {localUser?.email}
            </p>
          </div>
        </div>
      </div>

      <div className="card shadow">
        <div className="card-body">
          <h3 className="mb-3">My Orders</h3>
          {orders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            <ul className="list-group">
              {orders.map((order) => (
                <li key={order._id} className="list-group-item">
                  <strong>Order #{order._id}</strong> <br />
                  Total: ₦{order.total} <br />
                  Status:{" "}
                  <span className="badge bg-warning text-dark">
                    {order.status || "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;





















// import React, { useEffect, useState } from "react";
// import API from "../utils/api";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setUser, logout } from "../redux/authSlice";

// const Profile = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resUser = await API.get("/users/profile");
//         dispatch(setUser(resUser.data.user));

//         const resOrders = await API.get("/orders/my");
//         setOrders(resOrders.data.orders);
//       } catch (err) {
//         setError("⚠️ Session expired. Please log in again.");
//         dispatch(logout());
//         setTimeout(() => navigate("/login"), 2000);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [dispatch, navigate]);

//   if (loading) return <p className="text-center mt-5">⏳ Loading profile...</p>;
//   if (error) return <p className="text-danger text-center mt-5">{error}</p>;

//   return (
//     <div className="container mt-5">
//       <div className="card mb-4 shadow">
//         <div className="card-body">
//           <h2>Welcome, {user?.firstName} 👋</h2>
//           <p><strong>Email:</strong> {user?.email}</p>
//         </div>
//       </div>

//       <div className="card shadow">
//         <div className="card-body">
//           <h3 className="mb-3">My Orders</h3>
//           {orders.length === 0 ? (
//             <p>No orders yet.</p>
//           ) : (
//             <ul className="list-group">
//               {orders.map((order) => (
//                 <li key={order._id} className="list-group-item">
//                   <strong>Order #{order._id}</strong> <br />
//                   Total: ₦{order.total} <br />
//                   Status:{" "}
//                   <span className="badge bg-warning text-dark">
//                     {order.status || "Pending"}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
