import Image from "next/image";

export default function PromoBannerCard({
  id,
  src,
  title,
}: {
  id: number;
  src: string;
  title: string;
}) {
  return (
    <div
      key={id}
      className='relative overflow-hidden group rounded-md shadow-lg transition-transform duration-300'
    >
      <Image
        src={src}
        alt={title}
        width={800}
        height={300}
        layout='responsive'
        objectFit='cover'
        className='transition-all duration-300 group-hover:scale-105'
        priority
      />
      <div className='absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all flex items-center justify-center'>
        <h2 className='text-white font-bold text-lg md:text-xl text-center px-4'>
          {title}
        </h2>
      </div>
    </div>
  );
}
