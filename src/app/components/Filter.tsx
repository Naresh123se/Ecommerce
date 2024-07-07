import React from "react";

const Filter = () => {
  return (
    <div className="flex justify-between mt-12 ">
      <div className=" flex gap-6 flex-wrap ">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-slate-200 outline-none "
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        <input type="text" name="min" placeholder="min price" className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400 outline-none" />

        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-slate-200 outline-none"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-slate-200 outline-none"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4  rounded-2xl text-sm font-medium bg-slate-200 outline-none"
        >
          <option value="">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      {/*  */}
      <div className="">
      <select
          name=""
          id=""
          className="py-2 px-6 rounded-2xl text-sm font-medium bg-white ring-1 ring-slate-400 outline-none"
        >
          <option value="">Sort By</option>
          <option value="physical">Price (low to high)</option>
          <option value="physical">Price (low to high)</option>
          <option value="digital">Newest</option>
          <option value="digital">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
