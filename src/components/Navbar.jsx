import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingCart, User } from "lucide-react";
import { selectCartCount } from "../redux/cartSlice";
import { logout } from "../redux/authSlice";
import imgpart30 from '../components/multimedia/mistress chef logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [animation, setAnimation] = useState("");
  const prevCount = useRef(cartCount);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    if (cartCount > prevCount.current) {
      setAnimation("badge-bounce");
    } else if (cartCount < prevCount.current) {
      setAnimation("badge-shake");
    }
    if (cartCount !== prevCount.current) {
      const timeout = setTimeout(() => setAnimation(""), 400);
      return () => clearTimeout(timeout);
    }
    prevCount.current = cartCount;
  }, [cartCount]);

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0f5132" }}>
      <div className="container">
        {/* Logo */}

        <Link className="navbar-brand text-white fw-bold" to="/">
          <img src={imgpart30} alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
          MisstressChef
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li><Link className="nav-link text-white" to="/">Home</Link></li>
            <li><Link className="nav-link text-white" to="/shop">Shop</Link></li>
            <li><Link className="nav-link text-white" to="/about">About</Link></li>
            <li><Link className="nav-link text-white" to="/sp-contact">Contact</Link></li>

            {/* Cart */}
            <li className="nav-item ms-3">
              <Link className="nav-link position-relative text-white" to="/cart">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span
                    className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${animation}`}
                    style={{ fontSize: "0.75rem", minWidth: "18px", minHeight: "18px" }}
                  >
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

            {/* Account */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white d-flex align-items-center"
                href="#"
                id="accountDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <User size={18} className="me-1" />
                Account
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
                {!isLoggedIn ? (
                  <>
                    <li><Link className="dropdown-item" to="/login">Login</Link></li>
                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                  </>
                )}
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/track-order">Track Order</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




// import React, { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { ShoppingCart,User } from "lucide-react";
// import { selectCartCount } from "../redux/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { logout } from "../redux/authSlice";



// const Navbar = () => {
//   // ✅ Get cart count from Redux
//   const navigate = useNavigate();
//   const cartCount = useSelector(selectCartCount);
// const [animation, setAnimation] = useState("");
//   const prevCount = useRef(cartCount);
//   const { isLoggedIn } = useSelector((state) => state.auth);
//  const dispatch = useDispatch();  // ✅


//    const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login"); // Redirect to login or homepage
//   };

//  useEffect(() => {
//     if (cartCount > prevCount.current) {
//       setAnimation("badge-bounce"); // item added
//     } else if (cartCount < prevCount.current) {
//       setAnimation("badge-shake"); // item removed
//     }

//     if (cartCount !== prevCount.current) {
//       const timeout = setTimeout(() => setAnimation(""), 400);
//       return () => clearTimeout(timeout);
//     }

//     prevCount.current = cartCount;
//   }, [cartCount]);

//   return (
//     <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#0f5132" }}>
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand text-white fw-bold" to="/">
//           MisstressChef
//         </Link>

//         {/* Mobile Toggle Button */}
//         <button
//           className="navbar-toggler bg-white"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Nav Links */}
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={"/"}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={"/shop"}>Shop</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={"/about"}>About</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link text-white" to={"/sp-contact"}>Contact</Link>
//             </li>

//             {/* ✅ Cart with Icon + Counter */}
//             <li className="nav-item ms-3">
//               <Link className="nav-link position-relative text-white" to={"/cart"}>
//                 <ShoppingCart size={22} />
//                 {cartCount > 0 && (
//                   <span
//                     className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                     style={{ fontSize: "0.75rem" }}
//                   >
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//             </li> 
//            {/* ✅ Cart with bounce + shake */}
//             <li className="nav-item ms-3">
//               <Link className="nav-link position-relative text-white" to={"/cart"}>
//                 <ShoppingCart size={22} />
//                 {cartCount > 0 && (
//                   <span
//                     className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${animation}`}
//                     style={{ fontSize: "0.75rem", minWidth: "18px", minHeight: "18px" }}
//                   >
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//             </li>

// {/* ✅ Account Dropdown */}
// <li className="nav-item dropdown">
//   <a
//     className="nav-link dropdown-toggle text-white d-flex align-items-center"
//     href="#"
//     id="accountDropdown"
//     role="button"
//     data-bs-toggle="dropdown"
//     aria-expanded="false"
//   >
//     <User size={18} className="me-1" />
//     Account
//   </a>
//   <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">
//     {!isLoggedIn && (
//       <>
//         <li><Link className="dropdown-item" to="/login">Login</Link></li>
//         <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
//       </>
//     )}
//    {isLoggedIn && (
//     <>
//       <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
//       <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
//     </>
//   )}
//     <li><hr className="dropdown-divider" /></li>
//     <li><Link className="dropdown-item" to="/track-order">Track Order</Link></li>
//   </ul>
// </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
