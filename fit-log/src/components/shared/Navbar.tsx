import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  // Navigation links styled to fit both desktop horizontal rows and mobile vertical lists cleanly
  const links = (
    <>
      <li>
        <Link
          href="/"
          className="bg-[#1C240E] text-[#B1FA10] font-semibold px-4 py-2 rounded-full text-sm block md:inline-block text-center"
        >
          Workouts
        </Link>
      </li>
      <li>
        <a className="text-[#8B8D90] font-semibold hover:text-white px-4 py-2 text-sm transition-colors block md:inline-block text-center rounded-full hover:bg-neutral-800/30">
          My Plan
        </a>
      </li>
    </>
  );

  return (
    <div className="bg-[#0B0D12] text-white border-b border-[#1A1D24]">
      <div className="navbar container mx-auto px-4 min-h-[64px] flex justify-between items-center">
        {/* Left Section: Your Custom Logo Slot */}
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo"></Image>
          <span className="font-bold text-sm tracking-wider">FITLOG</span>
        </Link>

        {/* Center Section: Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-2 p-0">{links}</ul>
        </div>

        {/* Right Section: Badges & Mobile Hamburger Menu */}
        <div className="flex items-center gap-4">
          {/* Plan Indicator */}
          <div className="flex items-center gap-1.5 cursor-pointer group">
            <span className="text-sm font-medium text-[#8B8D90] group-hover:text-white transition-colors">
              Plan
            </span>
            <div className="w-5 h-5 rounded-full bg-[#B1FA10] text-[#0B0D12] text-xs font-bold flex items-center justify-center">
              0
            </div>
          </div>

          {/* Saved Indicator */}
          <div className="flex items-center gap-1.5 cursor-pointer group">
            <span className="text-sm font-medium text-[#8B8D90] group-hover:text-white transition-colors">
              Saved
            </span>
            <div className="w-5 h-5 rounded-full bg-[#1A1D24] text-[#8B8D90] text-xs font-bold flex items-center justify-center border border-[#2D323F]">
              0
            </div>
          </div>

          {/* Corrected Mobile Hamburger Dropdown */}
          <div className="dropdown dropdown-end md:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-2 text-[#8B8D90] hover:text-white hover:bg-[#1A1D24] rounded-lg min-h-0 h-auto"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://w3.org"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu menu-sm mt-3 p-3 shadow-2xl bg-[#11141A] border border-[#1A1D24] rounded-xl w-48 gap-3 z-[50]"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
