import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="py-8 px-28 flex justify-between">
      <div>
        <Image src="/Logo.png" width={100} height={100} alt="Company Logo" />
      </div>
      <div className="flex justify-center items-center gap-20">
        <div>
          <ul className="flex justify-center items-center gap-12">
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/hotels">Hotels</Link>
            </li>
            <li>
              <Link href="/flights">Flights</Link>
            </li>
            <li>
              <Link href="/bookings">Bookings</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-12">
          <Link
            href="/login"
            className="border-2 border-transparent hover:border-black py-1 px-4 rounded-md active:bg-black active:text-white"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="border-2 border-transparent hover:border-black py-1 px-4 rounded-md active:bg-black active:text-white"
          >
            Sign up
          </Link>
          <button className="border-2 border-transparent hover:border-black py-1 px-4 rounded-md active:bg-black active:text-white">
            EN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
