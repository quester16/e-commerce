import { Route, Routes } from "react-router-dom";
import Main from "./pages/main.tsx";
import Products from "./pages/products.tsx";
import SingleProduct from "./pages/singleProduct.tsx";
import { FC, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.tsx";
import SignUp from "./pages/auth/signUp.tsx";
import Login from "./pages/auth/login.tsx";

const App: FC = () => {
  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default App;
