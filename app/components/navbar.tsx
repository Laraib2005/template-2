'use client';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline, IoMenu, IoClose } from 'react-icons/io5';
import { IoIosContact } from 'react-icons/io';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu state
  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <div className="p-4 w-full h-auto">
      {/* Top Section */}
      <div className="flex justify-between items-center py-2">
        {/* Single Search Icon (Visible on all screens) */}
        <CiSearch size={25} className="text-[#2A254B]" />

        {/* Logo */}
        <h1 className="text-[#22202E] text-xl md:text-2xl md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          Avion
        </h1>

        {/* Cart and Contact Icons (Visible on Tablet and larger screens) */}
        <div className="sm:hidden md:flex gap-4">
          <Link href="/Cart">
            <IoCartOutline size={25} className="text-[#2A254B]" />
          </Link>
          <IoIosContact size={25} className="text-[#2A254B]" />
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Hamburger button to toggle mobile menu */}
          <button
            className="text-2xl focus:outline-none z-30"
            onClick={toggleMenu}
          >
            {!menuOpen ? <IoMenu /> : <IoClose />}
          </button>
        </div>
      </div>

      <hr />

      {/* Mobile Navigation Menu */}
      <header
        className={`fixed top-0 right-0 py-6 h-full w-3/4 bg-white shadow-lg transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:w-auto md:translate-x-0 md:bg-transparent md:shadow-none z-20`}
      >
        {/* Close Button for Mobile Menu */}
        {menuOpen && (
          <div className="flex justify-end p-4 md:hidden">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
            >
              <IoClose />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-8 text-[#726E8D] text-base p-6 md:p-0">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/Cart">Cart</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
