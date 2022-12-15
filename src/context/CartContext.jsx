import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const data = JSON.parse(localStorage.getItem("quantity"));
  const [quantity, setQuantity] = useState(data?.quantity || 0);
  //Lógica para que la data se elimine del local storage en una hora
  if (Math.round(new Date().getTime() / 1000) - data?.time > 3600) {
    localStorage.removeItem("quantity");
  }
  const addProductToCart = () => {
    setQuantity((prevState) => prevState + 1);
    localStorage.setItem(
      "quantity",
      JSON.stringify({
        quantity: quantity + 1,
        time: Math.round(new Date().getTime() / 1000),
      })
    );
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
