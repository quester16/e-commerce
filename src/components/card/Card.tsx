import { FC, useState } from "react";
import { CardProps } from "../../types";
import cartIcon from "../../assets/cartIcon.svg";
import { useAppDispatch } from "../../hooks/typedReduxHooks.ts";
import {
  addFavorites,
  removeFavorite,
} from "../../store/slices/productSlice.ts";

const Card: FC<CardProps> = (props) => {
  const [like, setLike] = useState(false);

  const dispatch = useAppDispatch();
  const shortenTitle = (title: string) => {
    return title.length > 35 ? title.substring(0, 35) + "..." : title;
  };

  const onLike = () => {
    setLike((prevState) => {
      prevState = !prevState;
      prevState
        ? dispatch(addFavorites(props.id))
        : dispatch(removeFavorite(props.id));
      return prevState;
    });
  };

  return (
    <View
      props={props}
      key={props.id}
      shortenTitle={shortenTitle}
      like={like}
      onLike={onLike}
    />
  );
};

export default Card;

type ViewProps = {
  props: CardProps;
  shortenTitle: (arg: string) => string;
  like: boolean;
  onLike: () => void;
};

const View = ({ props, shortenTitle, like, onLike }: ViewProps) => {
  const { title, image, price } = props;
  return (
    <div className="relative w-[233px] h-[400px] bg-blue-100 rounded-md">
      <div
        className="badge-like absolute top-0 right-2 z-20 cursor-pointer"
        onClick={onLike}
      >
        <svg
          className="w-6 h-6 text-red-500 cart hover:text-red-300 transition-colors"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill={like ? "red" : "none"}
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
          />
        </svg>
      </div>
      <div className="img w-full h-[290px] rounded-t-md pt-6">
        <img src={image} alt={title} />
      </div>
      <div className="title font-normal h-12 p-1">{shortenTitle(title)}</div>
      <div className="flex justify-between items-center p-1">
        <div className="cost font-semibold underline mt-2">{price}$</div>
        <div className="badge-toCart w-8 h-8 rounded-md cursor-pointer bg-blue-300 hover:bg-blue-400 transition-colors ease-in">
          <img src={cartIcon} alt="cartIcon" />
        </div>
      </div>
    </div>
  );
};
