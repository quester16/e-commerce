import { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <header className="flex align-middle justify-between h-[150px] p-2">
      <div className="text-4xl text-blue-500 mr-14 flex items-center">logo</div>
      <nav className="flex items-center">
        <ul className="flex">
          <li className="link mr-[20px]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="link">
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
        <button className="btn ml-32">
          <Link to={"/login"}>Login</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
