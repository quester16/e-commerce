import { FC } from "react";
import CartItem from "./CartItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import { removeFromCart } from "../../store/slices/productSlice.ts";
import { Link } from "react-router-dom";

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.products.toCart);
  const dispatch = useAppDispatch();

  // todo: get total sum
  const toDelete = (id: number) => dispatch(removeFromCart(id));
  return cartItems.length ? (
    <div className="w-full flex justify-between">
      <div className="h-full flex-col">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} toDelete={toDelete} />;
        })}
        <div className="total"></div>
      </div>
      <div className="order ">order</div>
    </div>
  ) : (
    <div className="w-full">
      <h4 className="text-lg font-mono font-medium text-center">
        Ты нище брод? Иди купи товар!
      </h4>
      <Link to={"/"}>
        <button className="btn mx-auto secondary">Пойду покупать</button>
      </Link>
    </div>
  );
};

export default Cart;
