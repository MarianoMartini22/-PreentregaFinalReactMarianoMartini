import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [montoTotal, setMontoTotal] = useState(0);

  const addToCart = (item) => {
    setMontoTotal(montoTotal + (item.item.price * item.quantity));
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.item.id === item.item.id);
      if (existingItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingItemIndex].quantity += item.quantity;
        setCartItems(updatedCartItems);
      } else {
        const newItem = { ...item, quantity: item.quantity };
        setCartItems((prevItems) => prevItems.concat(newItem));
      }
  };
  

  const removeFromCart = (itemId) => {
    const item = cartItems.find((cartItem) => cartItem.item.id === itemId);
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.item.id === itemId);
    if (montoTotal > 0) setMontoTotal(montoTotal - item.item.price);
    if (existingItemIndex !== -1 && item && item.quantity > 1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity--;
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevItems) => prevItems.filter((item) => item.item.id !== itemId));
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setMontoTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, montoTotal, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
