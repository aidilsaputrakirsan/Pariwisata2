import React from "react";

function Footer() {
  return (
    <footer className="text-[#5E6282] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="w-52">
          <h1 className="text-5xl font-bold text-[#080809]">Jadoo</h1>
          <p className="mt-4 text-sm">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div>
          <h2 className="text-[#080809] font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Affiliates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#080809] font-bold mb-4">Contact</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Help/FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Airline fees
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Low fare tips
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[#080809] font-bold mb-4">More</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Discover our app
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Airline
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mobile
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center border-[#5E6282] pt-4">
        <p className="text-sm">All rights reserved @jadoo.co</p>
      </div>
    </footer>
  );
}

export default Footer;
