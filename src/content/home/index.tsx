import { Product } from '@/@types/product';
import { ProductCard } from '@/content/home/productCard';

export async function Home() {
  const response = await fetch(
    'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC'
  );
  const { products } = (await response.json()) as { products: Product[] };

  return (
    <main>
      <section className="max-w-[938px] py-20 m-auto gap-6 justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
