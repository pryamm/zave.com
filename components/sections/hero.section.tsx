import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='relative bg-gradient-to-r from-blue-500 to-blue-700 text-white'>
      <div className='absolute inset-0 grid grid-cols-12 gap-0 overflow-hidden'>
        {/* Gambar dibagi menjadi 12 bagian berbeda dengan efek darkness dan miring */}
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className='relative overflow-hidden w-full h-full transform' // Miringkan gambar dengan rotasi
          >
            {/* Lapisan gelap di atas gambar */}
            <div className='absolute inset-0 bg-black bg-opacity-50 z-10' />
            <Image
              src={`https://picsum.photos/1920/1084?random=${index}`} // Menggunakan gambar yang berbeda berdasarkan index
              alt={`Hero Image ${index}`}
              layout='fill'
              objectFit='cover'
              className='object-cover'
            />
          </div>
        ))}
      </div>
      <div className='relative py-32 px-4 flex justify-start items-center h-[60vh] z-20'>
        {/* Transparent box container */}
        <div className='bg-white bg-transparent p-8 rounded-lg'>
          <h1 className='text-6xl font-bold'>
            <span className='text-blue-700'>ZAVE</span>
            <span className='text-yellow-500'> ENGINEERING</span>
          </h1>
          <p className='text-lg text-blue-600 mt-4'>
            Desain, Konstruksi, Interior, dan MEP
          </p>
        </div>
      </div>
    </section>
  );
}
