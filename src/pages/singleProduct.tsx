import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks.ts";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/slices/productSlice.ts";
import { CardProps } from "../types";
import Comments from "../components/comments/Comments.tsx";

const SingleProduct: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);
  const item = products.filter((item) =>
    params.id ? item.id === +params.id : item,
  );
  const [{ description, price, image, title, id, liked, category }] = item;

  const [itemAmount, setAmount] = useState(1);
  const onSetAmount = (type: string) => {
    if (type === "inc") {
      setAmount((amount) => {
        return amount + 1;
      });
    } else
      setAmount((amount) => {
        if (amount <= 1) return 1;
        return amount - 1;
      });
  };

  const toBuy = () => {
    console.log(itemAmount);
    const newItem: CardProps = {
      description,
      image,
      liked,
      price,
      id,
      title,
      category,
      amount: itemAmount,
    };
    dispatch(addToCart({ ...newItem }));
  };

  return (
    <>
      <div className="flex p-2">
        <div className="img p-1  mr-10 box-border w-[352px]">
          <img src={image} alt={title} className="object-contain" />
        </div>
        <div className="details w-[833px]">
          <div className="title text-4xl mb-5">{title}</div>
          <div className="price text-2xl mb-10">
            <div>Цена - {Math.floor(price * itemAmount)} сум</div>
            <div id="num" className="flex items-center">
              <button className="dec btn" onClick={() => onSetAmount("dec")}>
                &#45;
              </button>
              <div className="amount text-2xl">
                {itemAmount <= 1 ? 1 : itemAmount}
              </div>
              <button className="inc btn" onClick={() => onSetAmount("inc")}>
                &#43;
              </button>
            </div>
          </div>
          <div className="desc text-lg mb-5">
            <p className="underline">Описание</p>
            {description}
          </div>
          <button className="btn primary" onClick={toBuy}>
            купить
          </button>
        </div>
      </div>
      <Comments item={title} />
    </>
  );
};

export default SingleProduct;
