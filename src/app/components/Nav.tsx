import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Wrap from "./Wrap/Wrap";

const Nav = () => {
  return (
    <Wrap>
    <div className="h-20 ">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <div className="text-2xl">
          <Link href="/">Lama</Link>
        </div>
        <Menu />
      </div>

      {/* bigger */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="text-lg">
          <Link href="/">LOGO</Link>
        </div>
        <div className="hidden xl:flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className=" w-2/3 items-center justify-between gap-8 flex">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
    </Wrap>
  );
};

export default Nav;
