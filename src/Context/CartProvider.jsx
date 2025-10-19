
import { useState } from "react";
import { CartContext } from "../Context/CartContext.jsx";

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.id === item.id);
      if (existing) {
        return prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const deleteItem = (id) => {
    setCart((prevCart) => prevCart.filter((p) => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.quantity : 0;
  };

  const incrementItem = (id) => {
    setCart((prevCart) =>
      prevCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrementItem = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0) // elimina items con 0
    );
  };

  const cartCount = cart.reduce((acc, p) => acc + p.quantity, 0);

  const getTotal = () => cart.reduce((acc, p) => acc + p.price * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteItem,
        clearCart,
        getQuantity,
        incrementItem,
        decrementItem,
        cartCount,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}


export default CartProvider;