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
import Cart from "./pages/Cart.tsx";

const App: FC = () => {
  useEffect(() => {}, []);

  // todo: complete favorite page and cart page
  // todo: make database for authed users, for favorite and cart state

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/favorite" element={<Favorite />} />
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
