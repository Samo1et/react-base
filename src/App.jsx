import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { pageLinks } from "./constants";

const CartPage = React.lazy(() => import("./pages/CartPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
          <Route path={pageLinks.home.path} element={<HomePage />} />
          <Route path={pageLinks.cart.path} element={<CartPage />} />
          <Route path={pageLinks.login.path} element={<LoginPage />} />
          <Route path={pageLinks.product.path} element={<ProductDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
