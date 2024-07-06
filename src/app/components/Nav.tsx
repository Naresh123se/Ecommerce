import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Nav = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
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
  );
};

export default Nav;
