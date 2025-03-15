"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import menu and close icons

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md" style={{  }}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="/assets/logo2.png" alt="Moon Scholarships Logo" style={{ borderRadius: 10 ,}} width={100} />
          <h1 className="text-lg font-bold text-gray-700">Moon Scholarships</h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/scholarships" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Scholarships</a>
            </Link>
          </li>
          <li>
            <Link href="/fellowships" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Fellowships</a>
            </Link>
          </li>
          <li>
            <Link href="/internships" legacyBehavior>
              <a className="text-gray-600 hover:text-gray-900">Internships</a>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/scholarships" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                  Scholarships
                </a>
              </Link>
            </li>
            <li>
              <Link href="/fellowships" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                  Fellowships
                </a>
              </Link>
            </li>
            <li>
              <Link href="/internships" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>
                  Internships
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavigationMenu;
