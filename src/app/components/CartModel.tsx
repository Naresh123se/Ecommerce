" use client ";

import Image from "next/image";
const CartModel = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4    top-10 shadow-black bg-slate-100 flex flex-col rounded-md right-0 text-sm  z-10 ">
      {!cartItems ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className="font-semibold text-base pb-2 ">Shopping Cart</h2>
        <div className="flex flex-col ">
          <div className="flex gap-4 ">
            <Image
              src="/soap.jpg"
              alt="image"
              width={72}
              height={96}
              className="bg-slate-100 object-cover rounded-md"
            />
            <div>
              <div className="flex justify-between w-full gap-20">
           <h1 className="font-semibold text-base">Soap</h1>
                <div className="">$20</div>
              </div>
              <div className="">available</div>
              <div className="flex justify-between mt-6 ">
                <div>Qty 1</div>
                <div>
                  <button className="text-sm text-blue-500">Remove</button>
                </div>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="mt-1">
            <div className="flex flex-row justify-between">
            <p className="font-semibold ">Subtotal</p>
            <p className="font-semibold ">$20</p>

            </div>
            <p className="my-2">Shipping and taxes</p>
            <div className="flex justify-between ">
              <button className="border border-slate-300 rounded-md p-1">view cart</button>
              <button className="border p-1.5 bg-black text-white rounded-md">Check out</button>
            </div>
          </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CartModel;
