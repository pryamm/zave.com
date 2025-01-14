"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function MissionSection({ isVisible }: { isVisible: boolean }) {
  const missions = [
    "1. Memberikan layanan konstruksi yang profesional dan terpercaya.",
    "2. Menciptakan desain inovatif yang mengutamakan estetika dan fungsi.",
    "3. Mengutamakan efisiensi waktu dan biaya dalam setiap proyek.",
    "4. Menjaga komunikasi jangka panjang dengan klien.",
  ];
  return (
    <section
      id='mission-section'
      className='container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'
    >
      <div className='order-2 md:order-1'>
        <h2 className='text-3xl font-bold text-blue-600 mb-4'>Misi Kami</h2>
        {isVisible &&
          missions.map((mission, index) => (
            <Typewriter
              key={index}
              options={{
                strings: mission,
                autoStart: true,
                delay: 1,
              }}
            />
          ))}
      </div>
      <div className='relative order-1 md:order-2'>
        <Image
          src='https://picsum.photos/600/400?random=2'
          alt='Mission Image'
          width={600}
          height={400}
          className='rounded-lg shadow-lg'
        />
      </div>
    </section>
  );
}
