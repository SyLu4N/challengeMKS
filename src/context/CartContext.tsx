'use client';

import { createContext, ReactNode, useState, useEffect } from 'react';

import { Cart } from '@/@types/cart';

interface CartProviderProps {
  children: ReactNode;
}

type CartContextData = {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
};

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart[]>([]);

  useEffect(() => {
    const CART_COOKIE = window.localStorage.getItem('CART_COOKIE');
    if (CART_COOKIE) setCart(JSON.parse(CART_COOKIE));
  }, []);

  useEffect(() => {
    if (cart.length) {
      const CART_COOKIE = JSON.stringify(cart);
      window.localStorage.setItem('CART_COOKIE', CART_COOKIE);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
