"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/25740962/pexels-photo-25740962/free-photo-of-cherries-on-a-table-with-a-cup-of-tea.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 2,
      url: "https://images.pexels.com/photos/22661905/pexels-photo-22661905/free-photo-of-a-street-with-buildings-and-flowers-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 3,
      url: "https://images.pexels.com/photos/21352835/pexels-photo-21352835/free-photo-of-sagrada-familia-in-barcelona-in-spain.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      id: 4,
      url: "https://images.pexels.com/photos/26201918/pexels-photo-26201918/free-photo-of-penguin-couple-preening.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ];

  const [image, setImages] = useState(0);
  return (
    <div>
      <div className="h-[400px] relative">
        <Image
          src={images[image].url}
          alt=""
          fill
          sizes="50vw"
          className=" rounded-md object-cover"
        />
      </div>

      <div className="flex mt-6  gap-4 cursor-pointer">
        {images.map((img, i) => (
          <div
            className="relative w-1/4 h-32 "
            key={img.id}
            onClick={() => setImages(i)}
          >
            <Image
              src={img.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
