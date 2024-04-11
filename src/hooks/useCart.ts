'use client';

import { useContext } from 'react';

import { CartContext } from '@/context/CartContext';

export function useCart() {
  const { cart, setCart } = useContext(CartContext);

  return {
    cart,
    setCart,
  };
}
