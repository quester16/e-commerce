import { Route, Routes } from "react-router-dom";
import { FC, useEffect } from "react";
import Home from "./pages/home.tsx";
import SingleProduct from "./pages/singleProduct.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import SignUp from "./pages/auth/signUp.tsx";
import Login from "./pages/auth/login.tsx";
import Profile from "./pages/profile.tsx";
import { RequireAuth } from "./components/privateRoute/RequireAuth.tsx";
import Favorite from "./pages/Favorite.tsx";
import Cart from "./pages/cart/Cart.tsx";
import axios from "axios";

const App: FC = () => {
  // useEffect(() => {
  //   axios
  //     .post("https://6418782c29e7e36438e98817.mockapi.io/comments", {
  //       name: "burhon",
  //       item: "Mens Cotton Jacket",
  //       text: "very good quality",
  //       createdAt: new Date(),
  //       id: 1,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;
