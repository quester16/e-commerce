import { FC, useState } from "react";
import { CardProps } from "../../types";

interface CartItemProps {
  item: CardProps;
  toDelete: (id: number) => void;
}
const CartItem: FC<CartItemProps> = (props) => {
  const { item, toDelete } = props;

  const [amount, setAmount] = useState(1);

  const onSetAmount = (type: string) => {
    type === "inc"
      ? setAmount(amount + 1)
      : setAmount((amount) => {
          if (amount <= 1) return 1;
          return amount - 1;
        });
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
            <div>{item.title}</div>
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
              <div className="amount text-2xl">{amount <= 1 ? 1 : amount}</div>
              <button className="dec btn" onClick={() => onSetAmount("dec")}>
                &#45;
              </button>
            </div>
            <label htmlFor="num">Единица {item.price}</label>
          </div>
          <div className="total">
            <div className="text-2xl">{amount * item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
