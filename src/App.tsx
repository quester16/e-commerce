import { Route, Routes } from "react-router-dom";
import Main from "./pages/main.tsx";
import Products from "./pages/products.tsx";
import SingleProduct from "./pages/singleProduct.tsx";
import Login from "./pages/login.tsx";
import { FC, useEffect } from "react";
import Navbar from "./components/navbar/Navbar.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";

const App: FC = () => {
  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="main flex">
        {/*  todo: make sidebar */}
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
