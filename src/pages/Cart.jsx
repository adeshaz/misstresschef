import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  // const cartCount = useSelector((state) => state.cart.count);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const dispatch = useDispatch();

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="60"
                      className="me-2 rounded"
                    />
                    {item.name}
                  </td>
                  <td>₦{item.price}</td>
                  <td>
                    <input
                      type="number"
                      value={item.qty}
                      min="1"
                      onChange={(e) =>
                        dispatch(updateQty({ id: item.id, qty: parseInt(e.target.value) }))
                      }
                      className="form-control w-50"
                    />
                  </td>
                  <td>₦{item.price * item.qty}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h4 className="text-end">Total: ₦{total}</h4>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-warning"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>

            <Link to="/checkOut" className="btn btn-success">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;




// import React, { useContext } from 'react'
// import { CartContext } from '../context/CartContext';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//     const { cart, removeFromCart, updateQty, total } = useContext(CartContext);
//   return (
//     <div  className="container py-5">
// <h2 className="fw-bold mb-4">Your Cart</h2>

//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table align-middle">
//             <thead>
//               <tr>
//                 <th>Product</th>
//                 <th>Price</th>
//                 <th>Qty</th>
//                 <th>Subtotal</th>
//                 <th></th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item) => (
//                 <tr key={item.id}>
//                   <td>
//                     <img src={item.image} alt={item.name} width="60" className="me-2 rounded" />
//                     {item.name}
//                   </td>
//                   <td>₦{item.price}</td>
//                   <td>
//                     <input
//                       type="number"
//                       value={item.qty}
//                       min="1"
//                       onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
//                       className="form-control w-50"
//                     />
//                   </td>
//                   <td>₦{item.price * item.qty}</td>
//                   <td>
//                     <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <h4 className="text-end">Total: ₦{total}</h4>
//           <Link to={'/checkOut'} className="btn btn-success float-end">
//            Proceed to Checkout</Link>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Cart


// // import { Link } from "react-router-dom";
// // import CheckOut from './CheckOut';


