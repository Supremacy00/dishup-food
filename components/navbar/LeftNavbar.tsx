import React from "react";
import { LeftNavProps } from "@/@types";
import { navMenu } from "../data";
import { MdLunchDining } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftNavbar = ({ isOpen, onClose }: LeftNavProps) => {
  const pathname = usePathname();
  const handleOverlayClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click event from propagating to the navbar
    onClose(); // Trigger the close function
  };

  return (
    <article
      onClick={handleOverlayClick}
      className={`${
        isOpen ? "visible" : "invisible"
      } mx-auto w-full fixed right-0 left-0 top-0 bottom-0 inset-0 bg-black bg-opacity-50 flex justify-center z-40 font-poppins text-primary-text`}
    >
      <nav
        onClick={(e) => e.stopPropagation()}
        className={`${
          isOpen ? "transform -translate-x-0" : "transform -translate-x-full"
        } fixed top-0 left-0 h-[100dvh] w-full max-w-[350px] bg-white font-poppins text-primary-text z-50 overflow-y-hidden transition-all duration-700 ease-in-out`}
      >
        <div className="flex justify-between items-center gap-3 p-5">
          <div className="flex items-center flex-wrap gap-2">
            <div className="relative bg-amber-400 p-1.5 rounded-[40%]">
              <MdLunchDining className="text-[30px] text-primary" />
            </div>
            <h3 className="text-[20px] text-primary font-sans font-semibold">
              Dish
              <span className="text-amber-400 orang">U</span>p
            </h3>
          </div>
          <button onClick={onClose} className="text-[25px]">
            <IoClose />
          </button>
        </div>
        <ul className="px-2 space-y-5 mt-8 text-base font-medium">
          {navMenu.map((menu, index) => (
            <Link key={index} href={menu.href} onClick={onClose}>
              <li
                className={`${
                  pathname === menu.activePath ? "bg-amber-400" : ""
                } py-2.5 px-3.5 mb-1.5 rounded-lg w-full hover:bg-amber-400 transition-colors duration-300 ease-in-out cur`}
              >
                <h1>{menu.label}</h1>
              </li>
            </Link>
          ))}
        </ul>
        <div className="px-5 mt-14">
          <Link href='/auth/login'>
          <button className="bg-primary w-full rounded-full py-2.5 text-white text-[15px] font-medium">Log In</button>
          </Link>
        </div>
      </nav>
    </article>
  );
};

export default LeftNavbar;
