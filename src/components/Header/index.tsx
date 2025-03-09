'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const menuItems = ['About Us', 'Services', 'Products'];

function OrderButton() {

  const onClick = () => {

  }

  return (
    <>
      <button className='bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded-lg' onClick={onClick}>Order</button>
    </>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TODO: See what to do with this. */}
      {/* <div><button>allenmuhani@gmail.com</button><button>+254791725651</button></div> */}
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full transition-all duration-300 z-50',
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-dark-blue-600">
              <Link href={'/'}>
                <Image src="/images/logo/logo.png"
                  alt="logo"
                  width={120}
                  height={25}></Image>
              </Link>

            </div>
            <div className="hidden md:flex space-x-8">
              <Link href={`/`} className='text-2xl font-bold'>
                <span className="text-dark-blue-100 hover:text-red-600 cursor-pointer">Home</span>
              </Link>
              {menuItems.map((item) => (
                <Link key={item} href={`${item.toLowerCase().replace(/ /g, '_')}`} className='text-2xl font-bold'>
                  <span className={clsx("text-dark-blue-600 hover:text-red-600 cursor-pointer", pathname === item.toLowerCase().replace(/ /g, '_') ? 'underline' : '')}>{item}</span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex  flex items-center justify-end pr-16 lg:pr-0">
              {/* TODO: change this to button and style it with a different unique style to capture attention */}
              <OrderButton></OrderButton>
            </div>

            {/* Menu button on the right of the screen on small devices */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg p-4 space-y-4">
            {menuItems.map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className='text-1xl font-bold'>
                <span
                  className="block text-gray-800 hover:text-blue-500 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </span>
              </Link>
            ))}
            {/* Menu button on the right of the screen on small devices */}
            <OrderButton></OrderButton>
          </div>
        )}
      </nav>
    </>

  );
}
