import { FC } from "react";
import { CardProps } from "../../types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/typedReduxHooks.ts";
import { changeAmount } from "../../store/slices/productSlice.ts";

interface CartItemProps {
  item: CardProps;
  toDelete: (id: number) => void;
}
const CartItem: FC<CartItemProps> = (props) => {
  const { item, toDelete } = props;

  const dispatch = useAppDispatch();
  let amount = item.amount;

  const onSetAmount = (type: string) => {
    if (type === "inc") {
      dispatch(changeAmount({ amount: amount + 1, id: item.id }));
      return (amount = amount + 1);
    } else if (amount <= 1) return (amount = 1);
    dispatch(changeAmount({ amount: amount - 1, id: item.id }));
    return (amount = amount - 1);
  };

  return (
    <div
      key={item.id}
      className="cart-items flex rounded-md border-2 border-blue-300 p-1 h-auto mb-5"
    >
      <div className="img w-1/4 p-2  ">
        <img src={item.image} alt={item.title} className="w-28 h-auto" />
      </div>
      <hr className="h-auto w-[3px] bg-blue-300 mr-2" />
      <div className="cart-details w-3/4">
        <div className="w-full">
          <div className="flex justify-between mb-5">
            <Link
              to={"/products/" + item.id}
              className="hover:text-gray-500 transition-colors"
            >
              <div>{item.title}</div>
            </Link>
            <div className="delete ">
              <button
                className="btn bg-red-500"
                onClick={() => toDelete(item.id)}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
        <div className="sum flex justify-around items-start">
          <div className="amount flex flex-col">
            <div id="num" className="flex items-center">
              <button className="inc btn" onClick={() => onSetAmount("inc")}>
                &#43;
              </button>
              <div className="amount text-2xl">{item.amount}</div>
              <button className="dec btn" onClick={() => onSetAmount("dec")}>
                &#45;
              </button>
            </div>
            <label htmlFor="num">Единица {Math.floor(item.price)} сум</label>
          </div>
          <div className="total">
            <div className="text-2xl">
              {Math.floor(amount * item.price)} сум
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
