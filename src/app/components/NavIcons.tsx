"use client";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CartModel from "./CartModel";
const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex gap-1 relative">
      <AccountCircleIcon
        className="cursor-pointer"
        onClick={handleProfile}
        // onClick={() => setIsProfileOpen((prev) => !prev)}
      />
      {isProfileOpen && (
        <div className="absolute p-3 rounded-md top-10 left-0 text-sm bg-slate-200 z-20  ">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">logOut</div>
        </div>
      )}
      <NotificationsNoneIcon className="cursor-pointer" />

      <div className="relative cursor-pointer "  onClick={() => setIsCartOpen((prev) => !prev)}>
        <ShoppingCartIcon  />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary rounded-full text-white flex text-sm items-center justify-center">
          1
        </div>
      </div>
      {isCartOpen && <CartModel />}
    </div>
  );
};

export default NavIcons;
