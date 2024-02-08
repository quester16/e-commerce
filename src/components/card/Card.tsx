import { FC } from "react";
import { CardProps } from "../../types";

const Card: FC<CardProps> = () => {
  return (
    <div className="relative w-[220px] h-[400px] bg-blue-400 rounded-md">
      <div className="badge-like absolute top-3 right-2 ">
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
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
      <div className="img w-full h-[290px]"></div>
      <div className="title"></div>
      <div className="cost"></div>
      <div className="badge-toCart"></div>
    </div>
  );
};

export default Card;
