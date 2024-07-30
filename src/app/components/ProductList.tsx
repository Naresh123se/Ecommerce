import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const gitProductList = () => {
  return (
    <div className='flex gap-x-8 gap-y-16 justify-between flex-wrap mt-6'>
        <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
        <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500  '/>
        <Image src='https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md '/>
        </div>
        <div className=" flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$20</span>
        </div>
        <div className=" text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 hover:bg-primary hover:text-white'> Add Cart</button>
        </Link>
        
        <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
        <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500  '/>
        <Image src='https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md '/>
        </div>
        <div className=" flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$20</span>
        </div>
        <div className=" text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 hover:bg-primary hover:text-white'> Add Cart</button>
        </Link>

        <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
        <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500  '/>
        <Image src='https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md '/>
        </div>
        <div className=" flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$20</span>
        </div>
        <div className=" text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 hover:bg-primary hover:text-white'> Add Cart</button>
        </Link>

        <Link href='/' className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]' >
        <div className='relative w-full h-80'>
        <Image src='https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' fill sizes='25vw' className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500  '/>
        <Image src='https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg' alt='' fill sizes='25vw' className='absolute object-cover rounded-md '/>
        </div>
        <div className=" flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$20</span>
        </div>
        <div className=" text-sm text-gray-500">My description</div>
        <button className='rounded-2xl ring-1 ring-primary text-primary w-max py-2 px-4 hover:bg-primary hover:text-white'> Add Cart</button>
        </Link>

    </div>
  )
}

export default ProductList