import { FC } from "react";
import Card from "../components/card/Card.tsx";
import { useAppSelector } from "../hooks/typedReduxHooks.ts";
import { Link } from "react-router-dom";

const Favorite: FC = () => {
  const favorites = useAppSelector((state) => state.products.favorites);
  return (
    <>
      <h3 className="text-2xl text-center mb-6 font-bold">Избранное</h3>
      <div className="flex flex-wrap w-[1000px] gap-3 mx-auto">
        {favorites.length ? (
          favorites.map((item) => {
            return <Card key={item.id} {...item} />;
          })
        ) : (
          <div className="w-full mt-24">
            <h4 className="text-lg font-mono font-medium text-center mb-5">
              Ты не выбрал товар, иди лайкни товар!
            </h4>
            <Link to={"/"}>
              <button className="btn mx-auto secondary">Пойду добавлять</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorite;
