import React, { useState, useContext, createContext } from "react";

import { localStorageWithExpiration } from "../utilities";
import PropTypes from "prop-types";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("quantity"));
  console.log(data);
  const [quantity, setQuantity] = useState(data?.value || 0);
  const currentDateOnSeconds = Math.round(new Date().getTime() / 1000);
  //Lógica para que la data se elimine del local storage en una hora
  if (Math.round(new Date().getTime() / 1000) - data?.time > 3600) {
    localStorage.removeItem("quantity");
  }
  const addProductToCart = () => {
    setQuantity((prevState) => prevState + 1);
    localStorageWithExpiration("quantity", quantity + 1, currentDateOnSeconds);
  };
  return (
    <CartContext.Provider value={{ quantity, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("CartContext debe ser usado dentro de CartProvider ");
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
