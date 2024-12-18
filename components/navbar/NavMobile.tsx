'use client'
import React, { useState } from "react";
import { MdLunchDining } from "react-icons/md";
import { LuMenuSquare } from "react-icons/lu";
import LeftNavbar from "./LeftNavbar";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <nav className="font-roboto">
      <div className="flex justify-between items-center p-5 bg-white border-b-[1px] border-gray-200 shadow-sm">
        <div className="flex items-center flex-wrap gap-2">
          <div className="relative bg-amber-400 p-1.5 rounded-[40%]">
            <MdLunchDining className="text-[30px] text-primary" />
          </div>
          <h3 className="text-[20px] text-primary font-sans font-semibold">
            Dish
            <span className="text-amber-400 orang">U</span>p
          </h3>
        </div>
        <span className="text-[30px] text-primary hover:text-amber-400 transition-colors duration-300 ease-in-out cursor-pointer" onClick={handleNavOpen}>
          <LuMenuSquare />
        </span>
      </div>
      <LeftNavbar isOpen={isOpen} onClose={handleClose}/>
    </nav>
  );
};

export default NavMobile;
