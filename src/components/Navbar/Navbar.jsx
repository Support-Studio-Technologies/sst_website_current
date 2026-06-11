"use client";

import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Navbar/SST_Updated_White.svg";
import logo2 from "../../assets/Navbar/SST_Logo_Dark.svg";
import { validRoutes } from "../Constants/Routes/routes";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const lightThemeRoutes = ["/privacyPolicy", "/ssterrors", "/termsOfService"];
  
  const isLight = lightThemeRoutes.includes(pathname) || !validRoutes.includes(pathname);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={"w-full z-50 relative p-5"}>
      <div
        className={
          "px-3 py-3 transition-colors duration-500 ease-in-out bg-transparent"
        }
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={isLight ? logo2 : logo}
              alt="SST Logo"
              className="h-8 sm:h-10 w-auto"
              width={160}
              height={40}
            />
          </Link>

          {/* Desktop Menu */}
          <div
            className={`px-10 py-3 transition-colors duration-500 ease-in-out -ml-30 
    lg:backdrop-blur-md 
    ${
      isLight
        ? "lg:bg-gray-500/30 lg:border-gray-200/30"
        : "lg:bg-white/10 lg:border-white/20"
    } 
    lg:border lg:rounded-full
  `}
          >
            <ul className="hidden lg:flex items-center gap-3">
              <li>
                <Link
                  href="/"
                  className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${
                    pathname === "/"
                      ? "text-[#2d8ec5]"
                      : isLight
                      ? "text-black hover:text-[#2d8ec5]"
                      : "text-white hover:text-[#2d8ec5]"
                  }`}
                >
                  Home
                </Link>
              </li>
 
              <li>
                <Link
                  href="/services"
                  className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${
                    pathname === "/services"
                      ? "text-[#2d8ec5]"
                      : isLight
                      ? "text-black hover:text-[#2d8ec5]"
                      : "text-white hover:text-[#2d8ec5]"
                  }`}
                >
                  Services
                </Link>
              </li>
 
              <li>
                <Link
                  href="/aboutus"
                  className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${
                    pathname === "/aboutus"
                      ? "text-[#2d8ec5]"
                      : isLight
                      ? "text-black hover:text-[#2d8ec5]"
                      : "text-white hover:text-[#2d8ec5]"
                  }`}
                >
                  About us
                </Link>
              </li>
 
              <li>
                <Link
                  href="/contact-us"
                  className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${
                    pathname === "/contact-us"
                      ? "text-[#2d8ec5]"
                      : isLight
                      ? "text-black hover:text-[#2d8ec5]"
                      : "text-white hover:text-[#2d8ec5]"
                  }`}
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Partner Logo (Large screens only) */}
          <Link href="/" className="hidden lg:block">
            <Image
              src="/PartnerLogos/SAPPartner.png"
              alt="SAP Partner Logo"
              className="h-22 sm:h-14 w-auto"
              width={180}
              height={50}
            />
          </Link>

          {/* Mobile menu toggle */}
          <button
            className={`lg:hidden transition-colors duration-300 ${
              isLight ? "text-black" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <IoMdMenu className={`text-3xl sm:text-4xl`} />
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } bg-white z-[60] flex flex-col`}
      >
        <div className="flex justify-between items-center p-5">
          {/* Logo inside mobile menu */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo2}
              alt="SST Logo"
              className="h-8 sm:h-10 w-auto"
              width={160}
              height={40}
            />
          </Link>
          {/* Close button */}
          <button onClick={closeMenu} aria-label="Close menu">
            <IoMdClose className="text-3xl sm:text-4xl text-black" />
          </button>
        </div>

        {/* Menu items */}
        <div className="flex-1 overflow-y-auto px-5 py-8">
          <ul className="flex flex-col gap-6">
              <li>
                <Link
                  href="/"
                  className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${
                    pathname === "/"
                      ? "text-[#2d8ec5] bg-gray-100"
                      : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
 
              <li>
                <Link
                  href="/services"
                  className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${
                    pathname === "/services"
                      ? "text-[#2d8ec5] bg-gray-100"
                      : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                  onClick={closeMenu}
                >
                  Services
                </Link>
              </li>
 
              <li>
                <Link
                  href="/aboutus"
                  className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${
                    pathname === "/aboutus"
                      ? "text-[#2d8ec5] bg-gray-100"
                      : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                  onClick={closeMenu}
                >
                  About us
                </Link>
              </li>
 
              <li>
                <Link
                  href="/contact-us"
                  className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${
                    pathname === "/contact-us"
                      ? "text-[#2d8ec5] bg-gray-100"
                      : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                  onClick={closeMenu}
                >
                  Contact us
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
