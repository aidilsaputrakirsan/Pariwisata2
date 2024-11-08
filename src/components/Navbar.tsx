"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 px-6 md:px-14 lg:px-28 flex justify-between w-full fixed bg-transparent shadow-lg z-10">
      {/* Logo */}
      <div>
        <Image src="/Logo.png" width={80} height={80} alt="Company Logo" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none absolute right-8 top-4"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-0" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Navbar Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center gap-4 md:gap-12 mt-10 md:mt-0 transition-all duration-300 ease-in-out z-10`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <li>
            <Link
              href="/destinations"
              className="text-white md:text-black hover:text-gray-400 transition-colors duration-300"
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link
              href="/hotels"
              className="text-white md:text-black hover:text-gray-400 transition-colors duration-300"
            >
              Hotels
            </Link>
          </li>
          <li>
            <Link
              href="/flights"
              className="text-white md:text-black hover:text-gray-400 transition-colors duration-300"
            >
              Flights
            </Link>
          </li>
          <li>
            <Link
              href="/bookings"
              className="text-white md:text-black hover:text-gray-400 transition-colors duration-300"
            >
              Bookings
            </Link>
          </li>
        </ul>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 md:mt-0">
          <Link
            href="/login"
            className="border-2 border-transparent text-white md:text-black py-1 px-4 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="border-2 border-transparent text-white md:text-black py-1 px-4 rounded-md hover:bg-white hover:text-black transition-all duration-300"
          >
            Sign up
          </Link>
          <button className="border-2 border-transparent text-white md:text-black py-1 px-4 rounded-md hover:bg-white hover:text-black transition-all duration-300">
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
