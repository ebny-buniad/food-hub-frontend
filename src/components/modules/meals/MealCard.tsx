"use client"
import { cartServices } from "@/services/cart.service";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function MealCard({ meal }: { meal: Meal }) {
  const {
    id,
    providerId,
    dietary,
    category,
    name,
    description,
    price,
    thumbnail,
    isAvailable,
    reviews,
    createdAt
  } = meal;

  const [quantity, setQuantity] = useState(1)
  const increase = () => setQuantity((prev) => prev + 1)
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handelCreateCart = async (id: any) => {
    try {
      const items = {
        mealId: id,
        quantity: quantity
      }
      const { data, error } = await cartServices.createCart(items)
      if (error) {
        toast.error(error.message);
        return;
      }
      toast.success("Added to cart successfully!")
    }
    catch (error) {

    }

  }

  return (
    <div >
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src={thumbnail}
            alt="Food"
            className="w-full h-42 object-cover"
          />
        </div>

        <div className="p-2 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-500 mt-1">{description}</p>
          </div>

          <div className="flex justify-between items-center">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-gray-900">৳ {price}</p>
            </div>

            <div className="flex items-center gap-1">
              <div className="text-yellow-400">★★★★</div>
              <div className="text-gray-300">★</div>
              <span className="text-sm text-gray-600 ml-1">{reviews?.length}</span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center rounded-md">
            <button
              onClick={decrease}
              disabled={!isAvailable}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm"
            >
              −
            </button>

            <span className="px-4 text-sm font-medium">
              {quantity}
            </span>

            <button
              onClick={increase}
              disabled={!isAvailable}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-sm"
            >
              +
            </button>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => handelCreateCart(id)}
              disabled={!isAvailable}
              className="bg-gray-50 border p-2 rounded-md text text-xs cursor-pointer">
              {isAvailable ? "Add to Cart" : "Unavailable"}
            </button>
            <Link href={`/meals/${id}`} className="bg-black p-2 rounded-md text-white text-xs cursor-pointer">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
