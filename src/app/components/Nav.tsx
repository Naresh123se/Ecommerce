'use client'
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Wrap from "./Wrap/Wrap";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Nav = () => {
  const ti = gsap.timeline();
  useGSAP(() => {
    ti.from(".l, .nav, .logo1, .logo2", {
      y: -30,
      opacity: 0,
      duration: 1,
      delay: 1,
      stagger: 0.2,
    })

    gsap.from(".logo", {
      x: -500,
      duration: 2,
      delay: 1
    })

  })
  return (
    <Wrap>
      <div className="h-20">
        {/* Mobile */}
        <div className="h-full flex items-center justify-between md:hidden ">
          <div className="text-2xl ">
            <Link href="/">Lama</Link>
          </div>
          <Menu />
        </div>

        {/* bigger */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          <div className="text-lg nav">
            <Link href="/">LOGO</Link>
          </div>
          <div className="hidden xl:flex gap-4">

            <Link href="/" className="l">Home</Link>
            <Link href="/" className="l">Shop</Link>
            <Link href="/" className="l">About</Link>
            <Link href="/" className="l">Contact</Link>
          </div>
          <div className=" w-2/3 items-center justify-between gap-8 flex logo1">
            <SearchBar />
            <div className="logo2">
              <NavIcons />
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default Nav;
