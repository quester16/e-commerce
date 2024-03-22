import { FC } from "react";
import errorGif from "../../assets/errorGif.gif";

const ErrorBoundaries: FC = () => {
  return (
    <div className="mx-auto flex justify-center items-center">
      <div className="w-80 h-80">
        <img src={errorGif} alt="error" className="object-cover" />
      </div>
    </div>
  );
};

export default ErrorBoundaries;
