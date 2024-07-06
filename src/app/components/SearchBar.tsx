'use client'
import React from "react";



import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

const SearchBar = () => {

  const router = useRouter();
  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const name = formData.get('name') as string;
  if(name){
    router.push(`/list?name=${name}`)

  }

  };


  return (
    <>
      <form
        onSubmit={handelSearch}
        className="flex gap-4 justify-between items-center bg-gray-100 p-2 rounded-md flex-1"
      >
        <input
          type="text"
          name="name"
          placeholder="search"
          className="flex-1 bg-transparent outline-none"
        />

        <button>
          <SearchIcon className="text-slate-400" />
        </button>
      </form>
    </>
  );
};

export default SearchBar;
