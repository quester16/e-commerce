import { FC } from "react";
import CartItem from "./CartItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import { removeFromCart } from "../../store/slices/productSlice.ts";

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
    "hwel"
  );
};

export default Cart;
