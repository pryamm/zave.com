import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='relative bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center'>
      <div className='absolute inset-0 overflow-hidden'>
        <Image
          src='https://picsum.photos/1920/1080'
          alt='Hero Image'
          layout='fill'
          objectFit='cover'
          className='opacity-50'
        />
      </div>
      <div className='relative py-24 px-4'>
        <h1 className='text-5xl font-bold mb-6 animate-fadeIn'>
          ZAVE ENGINEERING
        </h1>
        <p className='text-lg max-w-2xl mx-auto'>
          Desain, konstruksi, interior, dan MEP adalah spesialisasi kami.
          Berlokasi di Cimahi, kami hadir untuk membantu proyek Anda di seluruh
          Indonesia.
        </p>
      </div>
    </section>
  );
}
