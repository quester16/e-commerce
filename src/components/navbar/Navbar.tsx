import { FC } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.ts";

const Navbar: FC = () => {
  const { isAuth } = useAuth();

  return (
    <header className="flex align-middle justify-between h-[150px]">
      <div className="text-4xl text-blue-500 flex items-center">logo</div>
      <nav className="flex items-center">
        <ul className="flex min-w-[200px] font-semibold tracking-wide">
          <li className="link mr-[20px]">
            <Link to={"/"}>Главная</Link>
          </li>
          <li className="link mr-[20px]">
            <Link to={"/favorite"}>Избранное</Link>
          </li>
        </ul>
        {isAuth ? (
          <Link to={"/profile"} className="w-fit">
            <button className="btn primary">Профиль</button>
          </Link>
        ) : (
          <Link to={"/login"} className="w-fit">
            <button className="btn primary">Войти</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
