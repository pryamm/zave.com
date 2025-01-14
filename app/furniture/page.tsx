"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"; // Import ShadCN Carousel component
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the currently selected image index

  const product = {
    name: "Product Name",
    description:
      "This is a sample product description. It provides details about the product's features and usage.",
    qty: 10,
    price: 100,
    discountPrice: 80,
    types: [
      { name: "Type 1", image: "https://picsum.photos/100/100?random=1" },
      { name: "Type 2", image: "https://picsum.photos/100/100?random=2" },
      { name: "Type 3", image: "https://picsum.photos/100/100?random=3" },
    ],
    images: [
      "https://picsum.photos/500/500",
      "https://picsum.photos/500/501",
      "https://picsum.photos/500/502",
    ],
  };

  return (
    <div className='max-w-screen mx-auto p-4 mt-14'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Column 1: Carousel */}
        <div className='flex flex-col justify-center items-center'>
          <Carousel className='lg:w-3/5'>
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem
                  key={index}
                  //   className={index === currentImageIndex ? "block" : "hidden"} // Only show the selected image
                >
                  <Image
                    src={image}
                    alt={`Product Image ${index + 1}`}
                    width={500}
                    height={500}
                    className='object-cover w-full h-full'
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Thumbnails */}
          <div className='flex space-x-2 mt-4'>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)} // Set the selected image index
                className={`w-16 h-16 p-1 rounded-md border-2 ${
                  currentImageIndex === index
                    ? "border-blue-500"
                    : "border-gray-300"
                } transition-all`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className='object-cover w-full h-full rounded-md'
                />
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: Product Description */}
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold'>{product.name}</h1>
          <p className='text-gray-600'>{product.description}</p>
          <div className='flex items-center space-x-4'>
            <span className='text-lg font-semibold'>Qty: {product.qty}</span>
            <span className='text-lg font-semibold'>
              Price: ${product.price}
            </span>
          </div>
          {product.discountPrice && (
            <div className='text-red-500'>
              <span className='line-through'>${product.price}</span> $
              {product.discountPrice}
            </div>
          )}
          <div>
            <h3 className='text-xl font-semibold'>Types:</h3>
            <ul className='flex space-x-4'>
              {product.types.map((type, index) => (
                <li key={index} className='relative group'>
                  <Image
                    src={type.image}
                    alt={type.name}
                    width={40}
                    height={40}
                    className='object-cover rounded-lg'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
