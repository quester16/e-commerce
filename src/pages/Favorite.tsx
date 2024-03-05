import { FC } from "react";
import Card from "../components/card/Card.tsx";
import { useAppSelector } from "../hooks/typedReduxHooks.ts";

const Favorite: FC = () => {
  const items = useAppSelector((state) => state.products.products);
  const favorites = useAppSelector((state) => state.products.favorites);
  const cardItems = items.filter((items, i) => items.id === favorites[i]);
  console.log(cardItems);
  return (
    <>
      <h3 className="text-2xl text-center mb-6 font-bold">Favorites</h3>
      <div className="flex flex-wrap w-[1000px] gap-3 mx-auto">
        {cardItems.length ? (
          cardItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <div className="w-full">
            <h4 className="text-lg font-mono font-medium text-center">
              You haven't added any products yet!
            </h4>
            <button className="btn mx-auto">Back to shop!</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorite;
