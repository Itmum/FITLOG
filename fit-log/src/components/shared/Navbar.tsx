"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavplanBadge from "./NavplanBadge";
import NavSavedBadge from "./NavSavedBadge";

const Navbar = () => {
  const pathName = usePathname();
  const getLinkClass = (targetPath: string) => {
    const isActive = targetPath === pathName;
    if (isActive === true) {
      return `bg-[#1C240E] text-[#B1FA10] font-semibold px-4 py-2 rounded-full text-sm block md:inline-block text-center`;
    } else {
      return `font-semibold px-4 py-2 text-sm text-center rounded-full transition-all duration-200 block md:inline-block text-[#8B8D90] hover:text-white hover:bg-neutral-800/30`;
    }
  };
  const links = (
    <>
      <li>
        <Link href="/" className={getLinkClass("/")}>
          Workouts
        </Link>
      </li>
      <li>
        <Link href="/myPlan" className={getLinkClass("/myPlan")}>
          My plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#0B0D12] text-white border-b border-[#1A1D24] sticky top-0 z-100">
      <div className="navbar container mx-auto px-4 min-h-[64px] flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo"></Image>
          <span className="font-bold text-sm tracking-wider">FITLOG</span>
        </Link>

        <div className="hidden md:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-2 p-0">{links}</ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 cursor-pointer group">
            <span className="text-sm font-medium text-[#8B8D90] group-hover:text-white transition-colors">
              <Link href="/myPlan">Plan</Link>
            </span>
            <NavplanBadge></NavplanBadge>
          </div>

          <div className="flex items-center gap-1.5 cursor-pointer group">
            <span className="text-sm font-medium text-[#8B8D90] group-hover:text-white transition-colors">
              <Link href="/myPlan">Saved</Link>
            </span>
            <div className="w-5 h-5 rounded-full bg-[#1A1D24] text-[#8B8D90] text-xs font-bold flex items-center justify-center border border-[#2D323F]">
              <NavSavedBadge></NavSavedBadge>
            </div>
          </div>

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
