"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Logo from "./logo";

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Community', href: '#community' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `
    relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3
    before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]
    before:border before:border-transparent
    before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]
    before:[mask-composite:exclude_!important]
    before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]
    after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm
  `;

  return (
    <>
      <header className="z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className={headerClasses}>
            <div className="flex flex-1 items-center">
              <Logo />
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <Link
                href="#"
                className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                Try for free
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Floating header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
          <div className={headerClasses}>
            <div className="flex flex-1 items-center">
              <Logo />
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <Link
                href="#"
                className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                Try for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
