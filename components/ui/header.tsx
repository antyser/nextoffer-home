"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Logo from "./logo";

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQs', href: '#faqs' },
  { name: 'Community', href: 'https://discord.gg/xG3ufjms', external: true },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, external?: boolean) => {
    if (external) {
      return; // Allow default behavior for external links
    }
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.external)}
                      className="text-sm font-medium text-gray-300 hover:text-white"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <Link
                href="https://app.theNextoffer.com/login"
                className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                Try for free
              </Link>
              <Link
                href="https://cal.com/jun-Nextoffer/mock-interview"
                className="btn-sm bg-green-500 hover:bg-green-600 text-white ml-4"
              >
                Schedule mock interview
              </Link>
            </div>
            <button
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-x-0 top-0 z-50 h-1/2 bg-gray-900/90 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMobileMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.external)}
                    className="text-lg font-medium text-white hover:text-indigo-400"
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8">
            <Link
              href="https://app.theNextoffer.com/login"
              className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
            >
              Try for free
            </Link>
          </div>
        </div>
      </div>

      {/* Floating header */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2">
          <div className={headerClasses}>
            <div className="flex flex-1 items-center">
              <Logo />
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.external)}
                      className="text-sm font-medium text-gray-300 hover:text-white"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <Link
                href="https://app.theNextoffer.com/login"
                className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                Try for free
              </Link>
              <Link
                href="https://cal.com/jun-Nextoffer/mock-interview"
                className="btn-sm bg-green-500 hover:bg-green-600 text-white ml-4"
              >
                Schedule mock interview
              </Link>
            </div>
            <button
              className="md:hidden text-white"
              onClick={toggleMobileMenu}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
