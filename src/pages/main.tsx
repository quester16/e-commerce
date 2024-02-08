import { FC, useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks.ts";
import Card from "../components/card/Card.tsx";

const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useAppSelector((state) => state.products.products);

  return (
    <div className="flex flex-wrap gap-4">
      {products.map((item, i) => {
        return (
          <Card
            key={i}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            images={item.images}
          />
        );
      })}
    </div>
  );
};

export default Main;
