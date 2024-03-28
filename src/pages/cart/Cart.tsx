import { FC } from "react";
import CartItem from "./CartItem.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import { makeOrder, removeFromCart } from "../../store/slices/productSlice.ts";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.ts";

const Cart: FC = () => {
  const cartItems = useAppSelector((state) => state.products.toCart);
  const order = useAppSelector((state) => state.products.makeOrder);
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const totalSum = cartItems.reduce(
    (acc, item) => acc + item.price * item.amount,
    0,
  );
  const toDelete = (id: number) => dispatch(removeFromCart(id));

  return cartItems.length && !order ? (
    <div className="w-full flex justify-between">
      <div className="h-full flex-col w-[800px]">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} toDelete={toDelete} />;
        })}
        <div className="total"></div>
      </div>
      <div className="order w-[300px] h-[300px] p-2 ">
        <div className="total-price text-2xl mb-10">Ваш заказ</div>
        <div>
          <div className="flex justify-end mb-5">
            <div>
              Товары - <strong>{cartItems.length}</strong>
            </div>
          </div>
          <div className="flex justify-between mb-5">
            <div>Итого</div>
            <div className="font-bold text-lg">{Math.floor(totalSum)} сум</div>
          </div>
          {isAuth ? (
            <button
              className="btn primary"
              style={{ width: "100%" }}
              onClick={() => {
                // post в БД //
                console.log("Ваш заказ:", cartItems);
                dispatch(makeOrder());
              }}
            >
              Заказать
            </button>
          ) : (
            <p className="font-semibold p-2 rounded-md bg-gray-200 text-center">
              Войдите чтобы оформить ваш заказ
            </p>
          )}
        </div>
      </div>
    </div>
  ) : order ? (
    <div className="text-center p-1 bg-blue-300 rounded-md w-80 mx-auto mt-20">
      Ваш заказ принят!
    </div>
  ) : (
    <div className="w-full mt-24">
      <h3 className="text-2xl text-center mb-6 font-bold mt-20">Корзина</h3>
      <h4 className="text-lg font-mono font-medium text-center mb-5">
        Ты нище брод? Иди купи товар!
      </h4>
      <Link to={"/"}>
        <button className="btn mx-auto secondary">Пойду покупать</button>
      </Link>
    </div>
  );
};

export default Cart;
