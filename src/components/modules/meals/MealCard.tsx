"use client"

import { createCart } from "@/app/actions/createCart";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function MealCard({ meal }: { meal: any }) {
  const router = useRouter();
  const { id, isAvailable } = meal;

  const [quantity, setQuantity] = useState(1)
  const increase = () => setQuantity((prev) => prev + 1)
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const handelCreateCart = async (id: any) => {
    try {
      const items = {
        mealId: id,
        quantity: quantity,
      };
      const { data, error } = await createCart(items);
      if (!data?.success) {
        toast.error("Login your account before order!");
        router.push("/auth/login");
        return;
      }
      toast.success("Added to cart successfully!");
    } catch (err) {
      toast.error("Something went wrong");
    }
  }

  return (
    <div
      key={meal.id}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Image */}
      <div className="relative h-48">
        <img
          src={meal.thumbnail}
          alt={meal.name}
          className="w-full h-full object-cover"
        />

        {/* Price */}
        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-sm font-semibold text-gray-800">
          ৳{meal.price}
        </div>

        {/* Cuisine */}
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-gray-600">
          {meal?.category?.cuisine}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          {/* Title */}
          <h3 className="font-semibold text-base group-hover:text-red-500 transition-colors">
            {meal.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            ★
            <span className="text-sm">
              {meal.ratingAvg || "0.0"}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-1">
          Delicious and freshly prepared meal.
        </p>

        <div className="flex items-center rounded-md mb-4">
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

        {/* Button */}
        <div className="flex justify-end gap-3">
          <button
            onClick={() => handelCreateCart(id)}
            disabled={!isAvailable}
            className="w-full py-2 bg-white border cursor-pointer border-red-500 text-red-500 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2">
            {isAvailable ? "🛒 Add to Cart" : "Unavailable"}
          </button>
          <Link href={`/meals/${id}`} className="bg-black p-2 rounded-md text-white text-xs cursor-pointer flex items-center justify-center gap-2">
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
