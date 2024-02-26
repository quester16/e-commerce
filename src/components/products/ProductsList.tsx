import Card from "../card/Card.tsx";
import { useAppSelector } from "../../hooks/typedReduxHooks.ts";

const ProductsList = () => {
  const products = useAppSelector((state) => state.products.products);
  return (
    <div className="flex flex-wrap w-[1000px] gap-3">
      {products.map((item, i) => {
        return (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
