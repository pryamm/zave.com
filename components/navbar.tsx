"use client"; // Ensure this is a client-side component in Next.js

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HiMenu, HiX } from "react-icons/hi";
import { FaAnglesRight } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { id: 1, name: "Home", href: "/home" },
    { id: 2, name: "Tentang Kami", href: "/about" },
    { id: 3, name: "Portofolio", href: "/portofolio" },
    { id: 4, name: "Catalog", href: "/catalog" },
    { id: 5, name: "B2B", href: "/furniture" },
    { id: 6, name: "Promo", href: "/promo" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY > lastScrollY) {
        // Scroll ke bawah, sembunyikan navbar
        setIsNavbarVisible(false);
      } else {
        // Scroll ke atas, tampilkan navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMenuClick = (id: number) => {
    setSelectedMenu(id);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        isNavbarVisible ? "opacity-100" : "-top-20 opacity-0"
      }`}
    >
      {/* Navbar Background */}
      <div
        className={`${
          scrolling
            ? "bg-white opacity-90 shadow-md"
            : "bg-transparent opacity-100"
        } transition-all duration-300 ease-in-out`}
      >
        {/* Navbar */}
        <nav className='flex justify-between items-center p-4 max-w-screen-xl mx-auto relative'>
          {/* Logo for Desktop */}
          <div className='hidden lg:block'>
            <div className='text-2xl font-bold text-gray-800'>
              <span className='text-blue-600'>Logo</span>{" "}
              <span className='text-gray-800'>Name</span>
            </div>
          </div>

          {/* Logo for Mobile */}
          <div className='lg:hidden'>
            <div className='text-xl font-semibold text-gray-800 flex items-center'>
              <span className='text-blue-600'>Logo</span>
              <span className='ml-1 text-gray-800'>Name</span>
            </div>
          </div>

          {/* Menu Button for Mobile */}
          <div className='absolute top-4 right-4 lg:hidden'>
            <Button variant='ghost' onClick={toggleMenu} className='border-0'>
              {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
            </Button>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex space-x-10 ml-auto'>
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleMenuClick(item.id)}
                className={`group text-gray-600 font-medium transition-all duration-300 ${
                  selectedMenu === item.id
                    ? "scale-110 text-shadow-md text-gold sparkle-effect"
                    : "hover:text-blue-600"
                }`}
              >
                <span className='group-hover:font-bold transition-all duration-300 delay-100'>
                  {item.name.split("").map((letter, index) => (
                    <span
                      key={index}
                      className='inline-block transform transition-all duration-300 group-hover:scale-110'
                      style={{
                        transitionDelay: `${index * 50}ms`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-md py-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className='flex justify-end w-full h-12 items-center p-2 animate-bg-wave'>
          <div
            onClick={toggleMenu}
            className='px-8 flex items-center justify-end border-0 bg-transparent text-gray-600 cursor-pointer'
          >
            <FaAnglesRight size={30} />
          </div>
        </div>
        <div className='flex flex-col space-y-4 mt-8 mx-4'>
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => handleMenuClick(item.id)}
              className='text-gray-600 font-medium hover:text-blue-600 transition-all duration-300'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
