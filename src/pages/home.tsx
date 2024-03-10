import { FC, useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice.ts";
import { useAppDispatch } from "../hooks/typedReduxHooks.ts";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import ProductsList from "../components/products/ProductsList.tsx";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="main flex ">
      <Sidebar />
      <ProductsList />
    </div>
  );
};

export default Home;
