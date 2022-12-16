import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import React from "react";
import DetailProducts from "./pages/DetailProducts";
import { Navigate } from "react-router-dom";
import { Paths } from "./models";
import "./App.css";
import { DetailProductProvider } from "./pages/DetailProducts/context/DetailProducts.context";
import { CartProvider } from "./context/CartContext";
import { PageNotFound } from "./components/Elements/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <DetailProductProvider>
          <Routes>
            <Route path="/" element={<Navigate to={Paths.PRODUCTS} />} />
            <Route path={Paths.PRODUCTS} element={<Products />} />
            <Route
              path={`${Paths.PRODUCTS}/:productId`}
              element={<DetailProducts />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </DetailProductProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
