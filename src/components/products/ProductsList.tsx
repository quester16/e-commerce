import Card from "../card/Card.tsx";
import { useAppSelector } from "../../hooks/typedReduxHooks.ts";

const ProductsList = () => {
  const products = useAppSelector((state) => state.products.products);
  const { category, price } = useAppSelector(
    (state) => state.filter.selectedFilter,
  );

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
  return (
    <div className="flex flex-wrap w-[1000px] gap-3">
      {filteredProd &&
        filteredProd.map((item, i) => {
          return <Card key={item.id} {...item} />;
        })}
    </div>
  );
};

export default ProductsList;
