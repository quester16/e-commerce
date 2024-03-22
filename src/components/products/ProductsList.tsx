import Card from "../card/Card.tsx";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import SkeletonCart from "../card/SkeletonCart.tsx";
import { useEffect } from "react";
import { fetchProducts } from "../../store/slices/productSlice.ts";
import ErrorBoundaries from "../errorBoundaries/ErrorBoundaries.tsx";

const ProductsList = () => {
  const dispatch = useAppDispatch();

  const { products, error, loading } = useAppSelector(
    (state) => state.products,
  );
  const { category, price } = useAppSelector(
    (state) => state.filter.selectedFilter,
  );

  useEffect(() => {
    products.length <= 0 ? dispatch(fetchProducts()) : void 0;
  }, [dispatch, products.length]);
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const filteredProducts = () => {
    const categoryFilter =
      category === "default" || category === ""
        ? products
        : products.filter((item) => item.category === category);

    return price === "default" || price === ""
      ? categoryFilter
      : price === "higher"
        ? categoryFilter.slice().sort((a, b) => a.price - b.price)
        : categoryFilter.slice().sort((a, b) => b.price - a.price);
  };

  const filteredProd = filteredProducts();
  const onError = error ? <ErrorBoundaries /> : null;
  const onLoading = loading ? <SkeletonCart /> : null;

  return (
    <div className="flex flex-wrap w-[1000px] gap-3">
      {onError}
      {onLoading}
      {filteredProd && !(error && loading)
        ? filteredProd.map((item) => {
            return <Card key={item.id} {...item} />;
          })
        : null}
    </div>
  );
};

export default ProductsList;
