"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function VisionSection({ isVisible }: { isVisible: boolean }) {
  return (
    <section
      id='vision-section'
      className='container mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'
    >
      <div className='relative'>
        <Image
          src='https://picsum.photos/600/400?random=1'
          alt='Vision Image'
          width={600}
          height={400}
          className='rounded-lg shadow-lg'
        />
      </div>
      <div>
        <h2 className='text-3xl font-bold text-blue-600 mb-4'>Visi Kami</h2>
        {isVisible && (
          <Typewriter
            options={{
              strings: [
                "Menjadi pemimpin dalam industri desain dan konstruksi yang mengutamakan aspek keindahan, fungsionalitas, dan kepuasan pelanggan.",
              ],
              autoStart: true,
              delay: 1,
            }}
          />
        )}
      </div>
    </section>
  );
}
