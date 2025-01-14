"use client";

import ProductCard from "@/components/cards/product.card";
import PromoBannerCard from "@/components/cards/promo-banner.card";
import { useEffect, useState } from "react";

export default function CatalogPage() {
  const [products, setProducts] = useState<
    {
      id: number;
      src: string;
      name: string;
      variant: string;
      originalPrice: string;
      discountedPrice: string;
    }[]
  >([]);
  const [promoBanners, setPromoBanners] = useState<
    { id: number; src: string; title: string }[]
  >([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data.data);
  };

  const fetchBanners = async () => {
    const response = await fetch("/api/promo-banners");
    const data = await response.json();
    setPromoBanners(data.data);
  };

  useEffect(() => {
    fetchProducts();
    fetchBanners();
  }, []);

  return (
    <div className='container mx-auto px-4 py-8 mt-14'>
      <h1 className='text-5xl font-semibold text-left mb-6'>Furniture</h1>

      <section aria-labelledby='promo-banners' className='mb-12'>
        <h2 id='promo-banners' className='sr-only'>
          Promotional Banners
        </h2>
        <div className='bg-yellow-400 py-16 px-16 text-left'>
          <h1 className='text-6xl font-bold text-white'>
            Desain Elegan, Kenyamanan Terbaik
          </h1>
          <p className='mt-4 text-2xl text-black '>
            Temukan Furniture Impian Anda di Sini!
          </p>
        </div>
      </section>

      <section aria-labelledby='products' className='mt-12'>
        <h2 id='products' className='sr-only'>
          Products
        </h2>
        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}
