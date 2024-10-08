import React from "react";
import ProductImages from "../components/ProductImages";
import Wrap from "../components/Wrap/Wrap";
import CustomizeProduct from "../components/CustomizeProduct";
import Add from "../components/Add";

const SinglePage = () => {
  return (
    <Wrap>
      <div className=" flex flex-col lg:flex-row gap-16">
        {/*  */}
        <div className=" w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>

        {/*  */}
        <div className=" w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="">Product Name</h1>
          <p className="flex ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
            repudiandae quae cum, fuga expedita quidem! Culpa laudantium at
            maiores dignissimos blanditiis dolore, explicabo, debitis ab
            officiis nisi, harum sunt suscipit?
          </p>

          <div className="h-[2px] bg-gray-100" />
          <div className="flex items-center gap-4">
            <h3 className=" text-xl text-gray-500 line-through">$59</h3>
            <h2 className="font-medium text-2xl">$49</h2>
          </div>
          <div className="h-[2px] bg-gray-100" />
          <CustomizeProduct />
          <Add />
          <div className=" bg-gray-100 h-[2px]"></div>

          <div className="flex flex-col gap-5">
            <h1 className="font-medium ">Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe
              voluptas sed nisi tempora, ducimus necessitatibus ad consectetur
              assumenda ut non enim iste sint labore quasi illum? Nulla,
              corporis quia.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-medium ">Title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe
              voluptas sed nisi tempora, ducimus necessitatibus ad consectetur
              assumenda ut non enim iste sint labore quasi illum? Nulla,
              corporis quia.
            </p>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default SinglePage;
