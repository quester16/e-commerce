import { FC, useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks.ts";
import Card from "../components/card/Card.tsx";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import useAuth from "../hooks/useAuth.ts";

const Main: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts(20));
  }, [dispatch]);

  const { isAuth } = useAuth();
  console.log(isAuth);

  const products = useAppSelector((state) => state.products.products);

  return (
    <div className="main flex p-1">
      <Sidebar />
      <div className="flex flex-wrap w-[1000px] gap-3">
        {products.map((item, i) => {
          return (
            <Card
              key={i}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Main;
