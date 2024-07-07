import Image from 'next/image'
import React from 'react'
import Filter from '../components/Filter'
import ProductList from '../components/ProductList'

const page = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>

<div className="hidden sm:flex bg-pink-50  px-4 justify-between">
    
<div className=" w-2/3 flex flex-col justify-center items-center h-64">
<h1 className='font-semibold leading-[45px] text-4xl text-gray-700'>Grab up ro 50% off on <br /> Selected Products</h1>
<button className='bg-primary rounded-full px-5 py-3 mt-3 w-max text-white text-sm'>Buy Now</button>
</div>
<div className="relative w-1/3 ">
    <Image src="/woman.png" alt='' fill  className='object-contain' />
</div>
</div>
{/*  */}
<div>
  <Filter/>
  {/*  */}
  <h1 className='text-xl font-semibold mt-12' >Shoes For You!</h1>
  <ProductList/>

</div>

    </div>
  )
}

export default page