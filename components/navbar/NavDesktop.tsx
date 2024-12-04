"use client";
import React, { useState, useEffect } from "react";
import { navMenu } from "../data";
import { MdLunchDining } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavDesktop = () => {
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolling(isScrolled);
    };

    setScrolling(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrolling
          ? "w-full bg-white border-b-[1px] border-gray-200 shadow-sm "
          : ""
      } font-roboto transition-all duration-300 ease-in-out`}
    >
      <div className="mx-auto px-5 xl:max-w-[1200px] text-primary ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-wrap gap-2 mt-11 mb-4">
            <div className="relative bg-amber-400 p-1.5 rounded-[40%]">
              <MdLunchDining className="text-[30px] text-primary" />
            </div>
            <h3 className="text-[20px] font-sans font-semibold">
              Dish
              <span className="text-amber-400 orang">U</span>p
            </h3>
          </div>
          <ul className="flex items-center text-[15px] -mt-5 font-medium">
            {navMenu.map((menu, index) => (
              <li
                key={index}
                className={`${
                  pathname === menu.activePath ? "bg-amber-400" : ""
                } last:mr-0 pt-16 mr-1 h-full pb-4 rounded-b-lg w-20 text-center hover:bg-amber-400 transition-colors duration-300 ease-in-out`}
              >
                <Link href={menu.href} className="py-4 px-2">
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
           <Link href="/auth/login">
           <button className="bg-primary py-2 px-12 text-[15px] font-medium rounded-full text-white mt-11 mb-4">
              Log In
            </button></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavDesktop;
