import { FC, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import ProductsList from "../components/products/ProductsList.tsx";
import { useAppDispatch } from "../hooks/typedReduxHooks.ts";
import { fetchCategoriesThunk } from "../store/slices/filterSlice.ts";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  return (
    <div className="main flex ">
      <Sidebar />
      <ProductsList />
    </div>
  );
};

export default Home;
