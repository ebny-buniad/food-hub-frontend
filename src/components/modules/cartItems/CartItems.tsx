"use client"

import { createOrder } from '@/app/actions/createOrder';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Textarea } from '@/components/ui/textarea';
import { cartServices } from '@/services/cart.service';
import { orderServices } from '@/services/order.service';
import { Cart } from '@/types'
import { useForm } from '@tanstack/react-form';
import { Minus, Plus, X } from 'lucide-react'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import * as z from 'zod'

export default function CartItems({ items }: { items: Cart[] }) {

  const firstItem = items?.[0];
  if (!firstItem) {
    return <p className='text-center pt-30'>Cart is empty!!</p>;
  }

  // Cart items for order create
  const payload = {
    cartId: items[0]?.cartId,
    providerId: items[0]?.meals?.providerId,
    items: items.map(({ mealId, quantity }) => ({
      mealId,
      quantity,
    })),
  };

  // Zod validation
  const formSchema = z.object({
    deliveryAddress: z.string().min(1, "Shipping address is required!")
  });

  // Refatch data form db
  const router = useRouter();

  // Tanstack form
  const form = useForm({
    defaultValues: {
      deliveryAddress: ""
    },
    validators: {
      onSubmit: formSchema
    },
    onSubmit: async ({ value }) => {
      const orderDetails = {
        ...value,
        ...payload
      }
      try {
        const result = await createOrder(orderDetails);
        if (result.success === true) {
          toast.success("Your order has been placed!")
        }
        router.refresh();
      }
      catch (err) {
        toast.error("Something went wrong, please try again!");
      }
    }
  })

  const handelDeleteCart = async (id: string) => {
    const data = await cartServices.deleteCart(id);
    if (data.seccess === true) {
      toast.success("Item removed");
      router.refresh();
    }
    else {
      toast.error("Something went wrong!")
    }
  }


  // For total price count
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
                  let {
                    id,
                    quantity,
                    price,
                    mealId,
                    meals: {
                      providerId,
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
                          <button
                            onClick={() => {
                              handelDeleteCart(id)
                            }}
                            className='border p-2 rounded-md hover:border-red-400 cursor-pointer'>
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
                  <p className="font-medium text-lg leading-8 text-black"> ৳ {totalPrice}</p>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault()
                  form.handleSubmit()
                }}>
                  <FieldGroup>
                    <form.Field
                      name="deliveryAddress"
                      children={(field) => {
                        const isInvalid =
                          field.state.meta.isTouched && !field.state.meta.isValid;
                        return (
                          <Field>
                            <FieldLabel htmlFor={field.name} className='mb-1.5 text-gray-600 text-sm font-medium'>Shipping address</FieldLabel>
                            <Textarea
                              id={field.name}
                              name={field.name}
                              value={field.state.value}
                              onChange={(e) => field.handleChange(e.target.value)}
                              className='py-4 px-3 sm:py-3 sm:px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb'
                            >
                            </Textarea>
                            {isInvalid && (
                              <FieldError errors={field.state.meta.errors} />
                            )}
                          </Field>
                        )
                      }}
                    >
                    </form.Field>
                  </FieldGroup>

                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      {items.length} Items
                    </p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                      ৳ {totalPrice}
                    </p>
                  </div>
                  <Button className='w-full py-6 cursor-pointer'
                    type='submit'>
                    Checkout & Order
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
