import { FC, useEffect } from "react";
import { fetchProducts } from "../store/slices/productSlice.ts";
import { useAppDispatch } from "../hooks/typedReduxHooks.ts";
import Sidebar from "../components/sidebar/Sidebar.tsx";
import useAuth from "../hooks/useAuth.ts";
import ProductsList from "../components/products/ProductsList.tsx";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { isAuth } = useAuth();
  console.log(isAuth);

  // const products = useAppSelector((state) => state.products.products);
  return (
    <div className="main flex ">
      <Sidebar />
      <ProductsList />
    </div>
  );
};

export default Home;
