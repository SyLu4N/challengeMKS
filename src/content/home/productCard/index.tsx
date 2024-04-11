'use client';

import { Product } from '@/@types/product';
import { useCart } from '@/hooks/useCart';
import { Bag } from '@/icons/bag';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { cart, setCart } = useCart();

  function addCart() {
    const alreadyHaveProduct = cart.findIndex(
      (cartProduct) => cartProduct.id === product.id
    );

    const newCart = [...cart];
    if (alreadyHaveProduct !== -1) {
      newCart[alreadyHaveProduct].quantity++;
    } else {
      newCart.push({ id: product.id, quantity: 1 });
    }

    setCart(newCart);
  }

  return (
    <div className="shadow-md inline-flex m-auto w-[218px] justify-between h-[285px] max-h-[285px] bg-white rounded-md gap-2 flex-col">
      <div className="w-full h-[132px]">
        <img src={product.photo} className=" m-auto mt-3 h-full select-none" />
      </div>

      <div className="px-2 text-letter-500 cursor-default">
        <div className="flex items-center justify-between">
          <abbr title={'Apple Watch Series 4 GPS'}>
            <p className="max-w-[124px] hover:text-letter-400">
              {product.name}
            </p>
          </abbr>

          <p className="min-w-[64px] h-[26px] px-2 bg-letter-500 inline-flex items-center justify-center text-[15px] font-bold rounded-md text-white leading-3">
            {product.price}
          </p>
        </div>

        <p className="text-[12px]">
          Redesigned from scratch and completely revised.
        </p>
      </div>

      <div
        aria-label="Comprar"
        onClick={addCart}
        className="bg-primary-500 select-none transition duration-300 flex items-center cursor-pointer p-2 gap-3 justify-center rounded-b-md text-white hover:bg-primary-600"
      >
        <Bag />

        <p className="font-bold text-sm">COMPRAR</p>
      </div>
    </div>
  );
}
