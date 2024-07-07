import Image from "next/image";
import Slider from "./components/Slider";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";


export default function Home() {
  return (
   <>
  <div>
    <Slider/>
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <h2 className="text-2xl">Featured Products</h2>
      <ProductList/>
    </div>

    <div className="mt-24  ">
      <h2 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h2>
      <CategoryList/>
    </div>

    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 ">
      <h2 className="text-2xl">New Products</h2>
      <ProductList/>
    </div>


   
  </div>
   </>
  );
}
