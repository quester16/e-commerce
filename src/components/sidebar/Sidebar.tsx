import { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="w-[300px] h-full mr-[50px]">
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
          <option value="shirt">shirt</option>
        </select>
      </div>

      <button className="btn">Искать</button>
    </div>
  );
};

export default Sidebar;
