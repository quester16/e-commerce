import Card from "../card/Card.tsx";
import { useAppSelector } from "../../hooks/typedReduxHooks.ts";
import { CardProps, elements } from "../../types";

const ProductsList = () => {
  const products = useAppSelector((state) => state.products.products);
  const filters = useAppSelector((state) => state.filter.selectedFilters);

  const filteredProducts = (items: CardProps[], filters: elements) => {
    if (filters.cost && filters.category) {
      return items
        .filter((item) => {
          return item.category === filters.category;
        })
        .filter((item) => {
          if (filters.cost) return item.price <= +filters.cost;
        });
    } else items;
  };
  const el = filteredProducts(products, filters);

  return (
    <div className="flex flex-wrap w-[1000px] gap-3">
      {el.map((item, i) => {
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
