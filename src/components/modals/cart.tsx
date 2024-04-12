import { ReactNode } from 'react';

import { Product } from '@/@types/product';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';
import { formatValue } from '@/utils/formatNumber';

import { Price } from '../price';

interface ModalCartProps {
  children: ReactNode;
}

export function ModalCart({ children }: ModalCartProps) {
  const { cart, setCart } = useCart();

  const total = cart.reduce(
    (acc, product) => acc + Number(product.price) * product.quantity,
    0
  );

  function increaseQuantity(product: Product) {
    const newCart = cart.map((productCart) => {
      if (productCart.id === product.id) productCart.quantity++;

      return productCart;
    });

    setCart(newCart);
  }

  function decreaseQuantity(product: Product) {
    const newCart = cart.map((productCart) => {
      if (productCart.id === product.id && productCart.quantity > 1) {
        productCart.quantity--;
      }

      return productCart;
    });

    setCart(newCart);
  }

  function removeProductCart(product: Product) {
    const newCart = cart.filter((productCart) => productCart.id !== product.id);

    setCart(newCart);
  }

  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>

      <SheetContent className="bg-primary-500 flex flex-col border-none shadow-cart min-w-[90%] sm:min-w-[486px] p-0 pt-12">
        <SheetHeader className="flex justify-between flex-row px-12">
          <SheetTitle className="text-[27px] max-w-[180px] text-white text-left">
            Carrinho de compras
          </SheetTitle>

          <SheetClose className="bg-black rounded-full flex items-center justify-center w-[38px] h-[38px] transition text-[28px] text-white hover:bg-zinc-900">
            <p className="leading-[8px] mb-1">x</p>
          </SheetClose>
        </SheetHeader>

        <div className="mt-8 flex flex-col gap-6 px-10 sm:px-12 overflow-y-auto h-full">
          {cart.map((product) => (
            <div
              className="flex flex-col sm:flex-row h-[220px] sm:h-[95px] gap-3 relative items-center justify-evenly bg-white rounded-md mt-2 p-2"
              key={product.id}
            >
              <img
                src={product.photo}
                alt={`Imagem do ${product.name}`}
                className="max-w-[100px] sm:max-w-[65px]"
              />

              <p className="text-[13px] sm:w-[113px]">{product.name}</p>

              <div className="relative flex flex-row gap-4 items-center">
                <p className="hidden sm:block text-[5px] absolute top-[-8px] left-0">
                  Qtd:
                </p>

                <div className="w-[97px] h-[34px] sm:w-[50px] sm:h-[19px] border-[1px] sm:border-[0.5px] select-none border-gray-300 rounded-[4px] flex text-[22px] sm:text-[12px] justify-between">
                  <p
                    className="w-full p-[0.5] flex justify-center cursor-pointer rounded-l-sm sm:hover:bg-gray-200"
                    onClick={() => decreaseQuantity(product)}
                  >
                    -
                  </p>

                  <span className="font-thin text-gray-300">|</span>

                  <p className="text-[20px] sm:text-[8px] flex justify-center items-center w-full  jusity-center">
                    {product.quantity}
                  </p>

                  <span className="font-thin text-gray-300">|</span>

                  <p
                    aria-label="Aumentar quantidade no carrinho"
                    className="w-full p-[0.5] flex justify-center cursor-pointer rounded-r-sm sm:hover:bg-gray-200"
                    onClick={() => increaseQuantity(product)}
                  >
                    +
                  </p>
                </div>

                <div>
                  <p className="hidden sm:block font-bold">
                    R${formatValue(Number(product.price) * product.quantity)}
                  </p>

                  <Price
                    className="flex sm:hidden h-[34px]"
                    text={`R$${formatValue(
                      Number(product.price) * product.quantity
                    )}`}
                  />
                </div>
              </div>

              <button
                aria-label="Remover do carrinho"
                onClick={() => removeProductCart(product)}
                className="sm:bg-black text-[42px] sm:text-[10px] sm:text-white rounded-full w-[18px] h-[18px] transition absolute right-6 top-[-6px] sm:right-[-6px] hover:bg-zinc-900"
              >
                X
              </button>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 mt-5">
          <div className="flex mt-auto justify-between text-[26px] sm:text-[28px] text-white font-bold px-10 sm:px-12">
            <p>Total:</p>
            <p>R${formatValue(total)}</p>
          </div>

          <SheetFooter>
            <p className="h-[97px] min-w-full flex items-center !ml-0 justify-center bg-black text-white cursor-pointer transition duration-300 font-bold text-[28px] hover:bg-zinc-900">
              Finalizar Compra
            </p>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}
