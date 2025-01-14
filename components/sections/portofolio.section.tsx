"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PortofolioSection() {
  const projects = [
    { title: "Project A", img: "https://picsum.photos/id/1011/800/600" },
    { title: "Project B", img: "https://picsum.photos/id/1012/800/600" },
    { title: "Project C", img: "https://picsum.photos/id/1013/800/600" },
  ];

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='flex justify-center items-center gap-8 py-16'>
      {projects.map((frame, index) => (
        <div
          key={index}
          className={`relative group flex items-center justify-center overflow-hidden 
            ${
              index === 1
                ? "w-[300px] h-[500px]" // Frame tengah lebih tinggi
                : "w-[250px] h-[400px]"
            }`}
        >
          {/* Foto Belakang (Blurred) */}
          <div
            className='absolute w-full h-full blur-lg scale-125 opacity-50'
            style={{
              backgroundImage: `url(${frame.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Foto Depan (Dengan Parallax) */}
          <div className='relative w-[90%] h-[90%] overflow-hidden shadow-lg'>
            <Image
              src={frame.img}
              alt={frame.title}
              width={800}
              height={600}
              className='absolute w-full h-full object-cover transition-transform duration-500'
              style={{
                transform: `translateY(${scrollY * 0.1}px)`, // Parallax effect
              }}
            />

            {/* Darkness Overlay */}
            <div className='absolute inset-0 bg-black/50 group-hover:bg-black/0 transition duration-500'></div>

            {/* Title */}
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500'>
              <h3 className='text-white text-xl font-bold'>{frame.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
