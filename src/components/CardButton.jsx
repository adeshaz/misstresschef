import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/cartSlice";

const CartButton = () => {
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increase())}>➕</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrease())}>➖</button>
    </div>
  );
};

export default CartButton;
