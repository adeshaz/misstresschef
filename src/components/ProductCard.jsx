import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";

const ProductCard = ({ id, image, name, price, imgClass = "" }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = cartItems.some((item) => item.id === id);

  return (
    <div className="col-xl-3 col-lg-3 col-md-custom col-sm-6 mb-4">
      <div className="card shadow-sm h-100 product-card">
        <Link to={`/product/${id}`}>
          <img src={image} className={`card-img-top ${imgClass}`} alt={name} />
        </Link>

        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text text-success fw-bold">₦{price}</p>

          <button
            className={`btn ${isInCart ? "btn-danger" : "btn-success"} me-2`}
            onClick={() =>
              isInCart
                ? dispatch(removeFromCart(id))
                : dispatch(addToCart({ id, name, price, image }))
            }
          >
            {isInCart ? "Remove" : "Add"}
          </button>

          <div className="mt-3">
            <Link to={`/product/${id}`} className="btn btn-outline-secondary w-100">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
