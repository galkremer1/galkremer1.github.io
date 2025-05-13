import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const headerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  // { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-br from-primary-100 to-neutral-50 shadow-md z-[1000] backdrop-blur-sm bg-opacity-80">
      <nav className="h-full max-w-7xl mx-auto px-4 flex justify-center items-center relative">
        <div className="absolute left-4">
          <Image
            src="/images/gal.png"
            alt="Gal's Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
        <ul className="flex gap-8 list-none m-0 p-0 items-center">
          {headerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-neutral-700 hover:text-primary-600 no-underline font-medium px-2 py-1 transition-colors duration-200 hover:text-blue-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
