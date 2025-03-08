'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';


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
      <div><button>allenmuhani@gmail.com</button><button>+254791725651</button></div>
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full transition-all duration-300 z-50',
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-dark-blue-600">Next Paints</div>
            <div className="hidden md:flex space-x-8">
              {['About Us', 'Services', 'Products',].map((item) => (
                <Link key={item} href={`${item.toLowerCase().replace(/ /g, '_')}`} className='text-2xl font-bold'>
                  <span className={clsx("text-dark-blue-600 hover:text-red-600 cursor-pointer", pathname === item.toLowerCase().replace(/ /g, '_') ? 'underline' : '')}>{item}</span>
                </Link>
              ))}
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
            {['Home', 'About Us', 'Our Services', 'Contact Us',].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`}>
                <span
                  className="block text-gray-800 hover:text-blue-500 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </span>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>

  );
}
