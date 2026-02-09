import { Cart } from '@/types'
import { Minus, Plus, X } from 'lucide-react'
export default function CartItems({ items }: { items: any }) {

  let totalPrice = 0;

  return (
    <div className='lg:w-7xl  mx-auto my-5'>
      <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
              <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                  Shopping Cart
                </h2>
                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                  {items.length} Items
                </h2>
              </div>
              <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                <div className="col-span-12 md:col-span-7">
                  <p className="font-normal text-lg leading-8 text-gray-400">
                    Product Details
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="grid grid-cols-5">
                    <div className="col-span-3">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Quantity
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                        Total
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {
                items.map((item: Cart) => {
                  const {
                    id,
                    quantity,
                    price,
                    meals: {
                      name,
                      thumbnail,
                      category: { cuisine },
                    },
                  } = item;

                  const allPrice = Number(totalPrice) + Number(price);
                  totalPrice = allPrice;


                  return (
                    <div key={item.id} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                      <div className="w-full md:max-w-[126px]">
                        <img
                          src={`${thumbnail}`}
                          alt="Food"
                          className="mx-auto rounded-xl object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                        <div className="md:col-span-2">
                          <div className="flex flex-col max-[500px]:items-center gap-3">
                            <h6 className="font-semibold text-base leading-7 text-black">
                              {name}
                            </h6>
                            <h6 className="font-normal text-base leading-7 text-gray-500">
                              {cuisine}
                            </h6>
                            <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                              ৳ {price}
                            </h6>
                          </div>
                        </div>
                        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                          <div className="flex items-center h-full">
                            <button className="cursor-pointer rounded-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                              <Minus></Minus>
                            </button>
                            <p className='font-semibold text-lg w-10  text-center'>
                              {quantity}
                            </p>
                            <button className="cursor-pointer rounded-full px-2 py-2 border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                              <Plus></Plus>
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                          <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                            ৳ {price}
                          </p>
                          <button className='border p-2 rounded-md hover:border-red-400 cursor-pointer'>
                            <X size={16}></X>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }



            </div>
            <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-normal text-lg leading-8 text-black">{items.length} Items</p>
                  <p className="font-medium text-lg leading-8 text-black">$480.00</p>
                </div>
                <form>
                  <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Shipping address
                  </label>

                  <div className="max-w-sm w-full border rounded-lg">
                    <textarea className="py-2 px-3 sm:py-3 sm:px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb"></textarea>
                  </div>
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      {items.length} Items
                    </p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                      ৳ {totalPrice}
                    </p>
                  </div>
                  <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
