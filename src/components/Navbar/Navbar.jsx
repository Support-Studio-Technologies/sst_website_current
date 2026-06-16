"use client";
 
import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../assets/Navbar/SST_Updated_White.svg";
import logo2 from "../../assets/Navbar/SST_Logo_Dark.svg";
import logo3 from "../../assets/Navbar/SST.png";
import logo4 from "../../assets/Navbar/SST_logo.svg";
import { validRoutes } from "../Constants/Routes/routes";
import LanguageSelector from "../languageselector/Language_selector.jsx";
 
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
 
  const lightThemeRoutes = ["/privacyPolicy", "/ssterrors", "/termsOfService"];
 
  const isLight = lightThemeRoutes.includes(pathname) || !validRoutes.includes(pathname);
  const isNavbarLight = isLight || isScrolled;
 
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);
 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
 
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
 
      // Always show navbar near the top of the page (within 10px)
      if (currentScrollY <= 10) {
        setVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }
 
      // Check threshold (at least 10px scroll difference) to prevent jitter
      const scrollDifference = currentScrollY - lastScrollY;
      if (Math.abs(scrollDifference) < 10) {
        return;
      }
 
      if (scrollDifference > 0) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
 
      setLastScrollY(currentScrollY);
    };
 
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };
 
  return (
    <>
      <nav
        className={`w-full z-50 fixed top-0 left-0 transition-transform duration-300 ease-in-out ${visible || isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <div className="max-w-full mx-auto">
          <div className="hidden lg:flex">
            <div
              className={`
                relative
                w-full
                flex items-center
                justify-between
                px-4 py-1.5
                backdrop-blur-md
                transition-colors duration-500 ease-in-out
                ${isNavbarLight
                  ? "bg-white/80 border-gray-200/20 shadow-md"
                  : "bg-white/10 border-white/20"
                }
              `}
            >
              {/* Left Logo Area with SST and SAP logos */}
              <div className="flex items-center gap-4 px-4 sm:px-8 lg:px-10">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="group flex items-center overflow-hidden"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <Image
                      src={logo3}
                      alt="SST Icon"
                      width={48}
                      height={48}
                      className="w-11 h-11 hover:w-13 hover:h-13 transition-all duration-300 ease-out"
                    />
                  </div>
 
                  {/* Company Name Reveal */}
                  <div
                    className="
                      overflow-hidden
                      max-w-0
                      opacity-0
                      ml-0
                      transition-all
                      duration-500
                      ease-out
 
                      group-hover:max-w-[250px]
                      group-hover:opacity-100
                      group-hover:ml-0
                    "
                  >
                    <Image
                      src={isNavbarLight ? logo2 : logo4}
                      alt="Support Studio Technologies"
                      width={260}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                </Link>
 
                {/* Subtle vertical separator line */}
                <div
                  className={`h-8 w-[1px] ${isNavbarLight ? "bg-gray-400/40" : "bg-white/20"
                    }`}
                />
 
                {/* SAP Partner Logo */}
                <Link href="/" className="flex items-center flex-shrink-0">
                  <Image
                    src="/sap-logo-svg.svg"
                    alt="SAP Partner Logo"
                    className="h-9 w-auto object-contain"
                    width={140}
                    height={40}
                  />
                </Link>
              </div>
 
              {/* Center Menu (Absolutely Centered) */}
              <div className="absolute left-1/2 -translate-x-1/2">
                <ul className="flex items-center gap-3">
                  <li>
                    <Link
                      href="/"
                      className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${pathname === "/"
                        ? "text-[#2d8ec5]"
                        : isNavbarLight
                          ? "text-black hover:text-[#2d8ec5]"
                          : "text-white hover:text-[#2d8ec5]"
                        }`}
                    >
                      Home
                    </Link>
                  </li>
 
                  <li className="relative group">
                    <Link
                      href="/services"
                      className={`py-2 px-3 relative flex items-center gap-1 transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${pathname === "/services"
                        ? "text-[#2d8ec5]"
                        : isNavbarLight
                          ? "text-black hover:text-[#2d8ec5]"
                          : "text-white hover:text-[#2d8ec5]"
                        }`}
                    >
                      Services
 
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>
 
                    {/* Dropdown */}
                    <div
                      className="
                        invisible opacity-0 translate-y-3
                        group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                        transition-all duration-300
                        absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50
                      "
                    >
                      <div
                        className={`absolute top-[18px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-l border-t transition-colors duration-500 ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30"
                          : "bg-neutral-900/85 border-white/10"
                          }`}
                      />
 
                      <div
                        className={`rounded-2xl shadow-2xl min-w-[700px] p-6 backdrop-blur-md border transition-colors duration-500 ${isNavbarLight
                          ? "bg-white/80 border-gray-200/30 text-gray-800"
                          : "bg-neutral-900/85 border-white/10 text-white"
                          }`}
                      >
                        <div className="grid grid-cols-2 gap-10">
                          {/* Industries */}
                          <div>
                            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-3 ${isNavbarLight ? "text-gray-500" : "text-gray-400"
                              }`}>
                              Industries
                            </h3>
 
                            <ul className="flex flex-col gap-1">
                              <li>
                                <Link
                                  href="/services/sapService/rise-with-sap"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  SAP Services
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/sap-implementation"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Digital Transformation
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/application-support"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Product and Development
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/staff-augmentation"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Design and Development
                                </Link>
                              </li>
                            </ul>
                          </div>
 
                          {/* Capabilities */}
                          <div>
                            <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 px-4 py-3 ${isNavbarLight ? "text-gray-500" : "text-gray-400"
                              }`}>
                              Capabilities
                            </h3>
 
                            <ul className="flex flex-col gap-1">
                              <li>
                                <Link
                                  href="/services/sapService/rise-with-sap"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  SAP Services
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/sap-implementation"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Digital Transformation
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/application-support"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Product and Development
                                </Link>
                              </li>
 
                              <li>
                                <Link
                                  href="/services/staff-augmentation"
                                  className={`block px-4 py-3 rounded-lg transition-colors ${isNavbarLight
                                    ? "text-gray-800 hover:bg-gray-100"
                                    : "text-white/90 hover:bg-white/10 hover:text-white"
                                    }`}
                                >
                                  Design and Development
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
 
                  <li>
                    <Link
                      href="/aboutus"
                      className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${pathname === "/aboutus"
                        ? "text-[#2d8ec5]"
                        : isNavbarLight
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
                      className={`py-2 px-3 relative group transition-colors duration-300 text-[clamp(0.9rem,1vw,1rem)] ${pathname === "/contact-us"
                        ? "text-[#2d8ec5]"
                        : isNavbarLight
                          ? "text-black hover:text-[#2d8ec5]"
                          : "text-white hover:text-[#2d8ec5]"
                        }`}
                    >
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
 
              {/* Right Side Placeholder to balance the centered layout */}
              <div className="w-[180px] lg:flex hidden" />
                <LanguageSelector isNavbarLight={isNavbarLight} />
            </div>
          </div>
 
          {/* Improved Mobile Layout Header */}
          <div className="flex justify-between items-center lg:hidden bg-neutral-900 w-full px-6 py-4 md:px-8 md:py-5 border-b border-neutral-800 shadow-md">
            <Link href="/" onClick={closeMenu} className="flex items-center">
              <Image
                src={logo}
                alt="SST Logo"
                className="h-8 sm:h-10 w-auto"
                width={160}
                height={40}
              />
            </Link>
 
            {/* Mobile menu toggle button */}
            <button
              className="lg:hidden transition-colors duration-300 text-white flex items-center justify-center p-1.5 hover:bg-neutral-800 rounded-lg"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <IoMdMenu className="text-3xl sm:text-4xl" />
            </button>
          </div>
        </div>
      </nav>
 
      {/* Full-screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
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
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/"
                  ? "text-[#2d8ec5] bg-gray-100"
                  : "text-gray-800 hover:text-[#2d8ec5]"
                  }`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
 
            <li>
              <div
                className={`w-full flex items-center justify-between rounded-lg ${pathname.startsWith("/services") ? "bg-gray-100" : ""
                  }`}
              >
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className={`flex-1 py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname.startsWith("/services")
                    ? "text-[#2d8ec5]"
                    : "text-gray-800 hover:text-[#2d8ec5]"
                    }`}
                >
                  Services
                </Link>
 
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="py-3 px-4 text-gray-800 hover:text-[#2d8ec5] transition-colors duration-300 flex items-center justify-center"
                  aria-label="Toggle Services dropdown"
                >
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
 
              {/* Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? "max-h-[800px] mt-2" : "max-h-0"
                  }`}
              >
                <div className="ml-4 border-l-2 border-gray-200 pl-4 space-y-6">
 
                  {/* Industries */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Industries
                    </h3>
 
                    <ul className="flex flex-col gap-2 pl-10">
                      <li>
                        <Link
                          href="/services/sapService/rise-with-sap"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          SAP Services
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/sap-implementation"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Digital Transformation
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/application-support"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Product and Development
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/staff-augmentation"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Design and Development
                        </Link>
                      </li>
                    </ul>
                  </div>
 
                  {/* Capabilities */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                      Capabilities
                    </h3>
 
                    <ul className="flex flex-col gap-2 pl-10">
                      <li>
                        <Link
                          href="/services/sapService/rise-with-sap"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          SAP Services
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/sap-implementation"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Digital Transformation
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/application-support"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Product and Development
                        </Link>
                      </li>
 
                      <li>
                        <Link
                          href="/services/staff-augmentation"
                          onClick={closeMenu}
                          className="block py-2 text-lg text-gray-600 hover:text-[#2d8ec5]"
                        >
                          Design and Development
                        </Link>
                      </li>
                    </ul>
                  </div>
 
                </div>
              </div>
            </li>
 
            <li>
              <Link
                href="/aboutus"
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/aboutus"
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
                className={`block py-3 px-4 text-2xl sm:text-3xl font-medium transition-colors duration-300 rounded-lg ${pathname === "/contact-us"
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
      {/* Spacer to prevent content overlap */}
      <div className="h-[64px] lg:h-[68px] w-full" />
    </>
  );
};
 
export default Navbar;
 
 
 