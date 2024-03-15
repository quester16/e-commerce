import { FC, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import ProductsList from "../components/products/ProductsList.tsx";
import { fetchProducts } from "../store/slices/productSlice.ts";
import { useAppDispatch, useAppSelector } from "../hooks/typedReduxHooks.ts";
import { fetchCategoriesThunk } from "../store/slices/filterSlice.ts";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    products.length <= 0
      ? dispatch(fetchProducts())
      : void dispatch(fetchCategoriesThunk());
  }, [dispatch, products.length]);
  return (
    <div className="main flex ">
      <Sidebar />
      <ProductsList />
    </div>
  );
};

export default Home;
