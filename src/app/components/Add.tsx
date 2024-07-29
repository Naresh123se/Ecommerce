"use client";
import React, { useState } from "react";

const stock = 5;
const Add = () => {
  const [q, setQ] = useState(1);
  const HQ = (type: "i" | "d") => {
    if (type === "d" && q > 1) {
      setQ((prev) => prev - 1);
    }
    if (type === "i" && q < stock) {
      setQ((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-row gap-4 justify-between">
      <div className="flex flex-row justify-center items-center gap-5">
        <div className="flex py-2 px-4 rounded-3xl items-center justify-between w-32 bg-slate-200">
          <button className=" hover:text-gray-700 p-1 " onClick={() => HQ("d")}>
            -
          </button>
          {q}
          <button className="" onClick={() => HQ("i")}>
            +
          </button>
        </div>
        <div>
          <p className="text-sm font-medium">
            Only <span className=" text-primary">5 items</span> left! <br />{" "}
            Don&apos;t miss it
          </p>
        </div>
      </div>

      <div className="">
        <button className="w-36 text-sm ring-primary ring-1  hover:bg-primary rounded-3xl py-2 hover:text-white disabled:cursor-not-allowed">
          Add to Card
        </button>
      </div>
    </div>
  );
};

export default Add;
