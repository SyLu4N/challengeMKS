'use client';

import { useCart } from '@/hooks/useCart';
import { CartIcon } from '@/icons/cart';

export function Header() {
  const { cart } = useCart();

  return (
    <header className="px-[75px] h-[101px] bg-primary-500 flex items-center justify-between">
      <h1 className="text-white">
        MKS <span className="font-light text-xl">Sistemas</span>
      </h1>

      <abbr title="Meu Carrinho">
        <div className="flex items-center cursor-pointer transition-all duration-300 justify-center gap-4 p-2 bg-white h-[45px] w-[90px] rounded-md hover:bg-[#eeee]">
          <CartIcon />

          <p className="font-bold text-lg">{cart.length}</p>
        </div>
      </abbr>
    </header>
  );
}
