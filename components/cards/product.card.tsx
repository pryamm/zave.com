import Image from "next/image";

export default function ProductCard({
  id,
  src,
  name,
  variant,
  originalPrice,
  discountedPrice,
}: {
  id: number;
  src: string;
  name: string;
  variant: string;
  originalPrice: string;
  discountedPrice: string;
}) {
  return (
    <div
      key={id}
      className='rounded-md overflow-hidden group hover:shadow-xl transition-all duration-300'
    >
      {/* Product Image */}
      <Image
        src={src}
        alt={name}
        layout='responsive'
        width={300}
        height={300}
        objectFit='cover'
        className='transition-transform duration-300 group-hover:scale-105'
        priority
      />

      {/* Product Info */}
      <div className='p-4'>
        <h3 className='text-gray-800 font-semibold text-lg'>{name}</h3>
        <p className='text-gray-600 text-sm'>{variant}</p>
        <div className='mt-2 flex items-center space-x-2'>
          <span className='text-gray-500 line-through text-sm'>
            {originalPrice}
          </span>
          <span className='text-red-600 font-semibold text-lg'>
            {discountedPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
