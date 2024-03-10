import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import {
  fetchCategoriesThunk,
  getFilter,
} from "../../store/slices/filterSlice.ts";
import { elements } from "../../types";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.filter.categories);
  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const onChange = (e: HTMLFormElement) => {
    e.preventDefault();
    const target: elements & string = e.target;
    const elements = {
      cost: target.cost?.value,
      category: target.category?.value,
    };
    dispatch(getFilter(elements));
  };

  return <View onChange={onChange} categories={categories} />;
};

export default Sidebar;

interface ViewProps {
  onChange: (e: HTMLFormElement) => void;
  categories: string[];
}
const View = ({ onChange, categories }: ViewProps) => {
  return (
    <div
      className="w-[230px] h-full mr-[50px]"
      style={{ position: "sticky", top: 10 }}
    >
      <form action="#" onSubmit={onChange}>
        <div className="cost-filter filter">
          <label htmlFor="cost" className="label">
            Укажите цену до
          </label>
          <input type="number" name="cost" id="cost" />
        </div>

        <div className="options filter">
          <label htmlFor="category" className="label">
            Выберите категорию
          </label>
          <select name="category" id="category" className="rounded-t-md p-1">
            {categories.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn" type="submit">
          Искать
        </button>
      </form>
    </div>
  );
};
