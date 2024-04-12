'use client';

import { ModalCart } from '@/components/modals/cart';
import { useCart } from '@/hooks/useCart';
import { CartIcon } from '@/icons/cart';
import Link from 'next/link';

export function Header() {
  const { cart } = useCart();

  return (
    <header className="px-[25px] h-[48px] sm:px-[75px] sm:h-[101px] bg-primary-500 flex items-center justify-between">
      <Link href="/" aria-label="Voltar para home">
        <h1 className="text-white text-[32px] sm:text-[40px]">
          MKS <span className="font-light text-base sm:text-xl">Sistemas</span>
        </h1>
      </Link>

      <ModalCart>
        <abbr title="Meu carrinho" aria-label="Abrir carrinho">
          <div className="flex items-center w-[52px] h-[26px] cursor-pointer transition-all duration-300 justify-center gap-4 p-2 bg-white sm:w-[90px] sm:h-[45px] rounded-md hover:bg-[#eeee]">
            <CartIcon />

            <p className="font-bold text-xs sm:text-lg">{cart.length}</p>
          </div>
        </abbr>
      </ModalCart>
    </header>
  );
}
