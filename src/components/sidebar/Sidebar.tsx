import { FC, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/typedReduxHooks.ts";
import { getFilter, toDefault } from "../../store/slices/filterSlice.ts";
import { eventTargetElements } from "../../types";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.filter.categories);

  const onChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target: EventTarget & eventTargetElements = e.target;

    const elements = {
      price: target.price?.value,
      category: target.category?.value,
    };
    dispatch(getFilter(elements));
  };
  const onReset = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const elements = {
      price: "default",
      category: "default",
    };

    dispatch(toDefault(elements));
  };

  return <View onChange={onChange} onReset={onReset} categories={categories} />;
};

export default Sidebar;

interface ViewProps {
  onChange: (e: FormEvent<HTMLFormElement>) => void;
  onReset: (e: FormEvent<HTMLFormElement>) => void;
  categories: string[];
}
const View = ({ onChange, categories, onReset }: ViewProps) => {
  return (
    <div
      className="w-[230px] h-full mr-[50px]"
      style={{ position: "sticky", top: 10 }}
    >
      <form action="#" onSubmit={onChange} onReset={onReset}>
        <div className="cost-filter filter">
          <label htmlFor="cost" className="label">
            Сортировать по цене
          </label>
          <select name="price" id="price" className="rounded-t-md p-1">
            <option value="default">По умолчанию</option>
            <option value="lower">Цена по убыванию</option>
            <option value="higher">Цена по возрастанию</option>
          </select>
        </div>

        <div className="options filter">
          <label htmlFor="category" className="label">
            Выберите категорию
          </label>
          <select name="category" id="category" className="rounded-t-md p-1">
            <option value="default">По умолчанию</option>
            {categories.map((item, i) => {
              return (
                <option key={i} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex justify-between">
          <button className="btn primary" type="submit">
            Искать
          </button>
          <button className="btn secondary" type="reset">
            Сбросить
          </button>
        </div>
      </form>
    </div>
  );
};
