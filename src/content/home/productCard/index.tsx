'use client';

import { Product } from '@/@types/product';
import { Price } from '@/components/price';
import { useCart } from '@/hooks/useCart';
import { Bag } from '@/icons/bag';
import { formatValue } from '@/utils/formatNumber';

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
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
  }

  return (
    <article className="shadow-md inline-flex m-auto w-[251px] h-[328px] sm:w-[218px] sm:h-[285px] justify-between max-h-[285px] bg-white rounded-md gap-2 flex-col">
      <div className="w-full h-[132px]">
        <img
          src={product.photo}
          alt={`Imagem do ${product.name}`}
          className="m-auto mt-3 h-full select-none"
        />
      </div>

      <div className="px-2 text-letter-500 cursor-default">
        <div className="flex items-center justify-between">
          <abbr title={'Apple Watch Series 4 GPS'}>
            <p className="max-w-[124px] hover:text-letter-400">
              {product.name}
            </p>
          </abbr>

          <Price text={`R$${formatValue(Number(product.price))}`} />
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
    </article>
  );
}
