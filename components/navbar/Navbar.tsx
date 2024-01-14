import React from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Navbar = () => {
  return (
    <nav>
      <nav className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <NavMobile />
      </nav>
      <nav className="fixed right-0 left-0 z-50 hidden lg:block">
        <NavDesktop />
      </nav>
    </nav>
  );
};

export default Navbar;
