import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../public/images/logo.png"; // Pastikan path ini benar

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-white sticky top-0 z-50 shadow-md h-24">
      <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo Holycat"
            className="w-[225px] h-[75px] object-contain md:w-[180px] md:h-[60px] xs:w-[150px] xs:h-[50px]"
          />
        </Link>
      </div>

      <ul
        className={`nav-links absolute md:relative top-24 md:top-0 left-0 right-0 md:flex flex-col md:flex-row items-center md:items-start p-5 md:p-0 bg-white md:bg-transparent shadow-md md:shadow-none gap-4 md:gap-6 list-none transition-all duration-300 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li>
          <a
            href="/"
            className="text-2xl text-text-dark hover:text-primary-green hover:font-bold transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#about"
            className="text-2xl text-text-dark hover:text-primary-green hover:font-bold transition-colors"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/#products"
            className="text-2xl text-text-dark hover:text-primary-green hover:font-bold transition-colors"
          >
            Our Products
          </a>
        </li>
        <li>
          <a
            href="/store"
            className="text-2xl text-text-dark hover:text-primary-green hover:font-bold transition-colors"
          >
            Store dan Social Media
          </a>
        </li>
      </ul>

      <div className="book-btn pt-1 hidden md:block">
        <a
          onClick={() => alert("Masih Dalam Pengembangan")}
          href="#"
          className="text-xl no-underline text-white font-bold bg-primary-yellow py-2 px-8 rounded-xl transition-all hover:bg-primary-green hover:-translate-y-0.5"
        >
          Shop Now
        </a>
      </div>

      <div
        className="hamburger flex flex-col cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <span className="h-[3px] w-[25px] bg-text-dark my-[4px] rounded-md xs:w-[22px]"></span>
        <span className="h-[3px] w-[25px] bg-text-dark my-[4px] rounded-md xs:w-[22px]"></span>
        <span className="h-[3px] w-[25px] bg-text-dark my-[4px] rounded-md xs:w-[22px]"></span>
      </div>
    </nav>
  );
};

export default Navbar;
