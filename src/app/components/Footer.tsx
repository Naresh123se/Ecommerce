import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-24 bg-gray-100 text-sm py-24">
      <div className="flex flex-col md:flex-row justify-between  gap-10 md:gap-24">
        <div className="w-full  md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href={"/"}>
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <p>Kathmandu, Nepal</p>
          <span className="font-semibold">mail@gmail.com</span>
          <span className="font-semibold">+977 98291144432</span>
          {/* social media */}
          <div className="flex gap-4">
            <Image
              src={"/SocialMedia/facebook.png"}
              alt=""
              width={16}
              height={16}
            />
            <Image
              src={"/SocialMedia/instagram.png"}
              alt=""
              width={16}
              height={16}
            />
            <Image
              src={"/SocialMedia/youtube.png"}
              alt=""
              width={16}
              height={16}
            />
          </div>
        </div>
{/* mid */}
        <div className="hidden lg:w-1/2 lg:flex gap-12 ">
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-base">COMPANY</h1>
          <div className="flex flex-col gap-3">
          <Link className="font-medium" href={'/'}>About Us</Link>
          <Link className="font-medium" href={'/'}>Careers</Link>
          <Link className="font-medium" href={'/'}>Blog</Link>
          <Link className="font-medium" href={'/'}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-base">COMPANY</h1>
          <div className="flex flex-col gap-3">
          <Link className="font-medium" href={'/'}>About Us</Link>
          <Link className="font-medium" href={'/'}>Careers</Link>
          <Link className="font-medium" href={'/'}>Blog</Link>
          <Link className="font-medium" href={'/'}>Contact Us</Link>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-base">COMPANY</h1>
          <div className="flex flex-col gap-3">
          <Link className="font-medium" href={'/'}>About Us</Link>
          <Link className="font-medium" href={'/'}>Careers</Link>
          <Link className="font-medium" href={'/'}>Blog</Link>
          <Link className="font-medium" href={'/'}>Contact Us</Link>
          </div>
        </div>


        
        </div>

        <div className="w-full  md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>

          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="bg-primary text-white p-2">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payment</span>

        </div>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
        <div>
        @2024 Lama

        </div>
        <div className="flex flex-row gap-3">
          <span>language</span>
          <span>Language</span>
          <span>language</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
