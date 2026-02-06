""

import Link from "next/link";

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
    createdAt,
  } = meal;

  return (
    <div >
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/888026614/photo/woman-going-to-eat-salad.jpg?s=612x612&w=0&k=20&c=hwUb7l-LMDFKC3aOm952UR07LI5pt6FNUzwFgBpj8kU="
            alt="Product"
            className="w-full h-52 object-cover"
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

          <div className="flex justify-end gap-3">
            <button className="bg-gray-50 border p-2 rounded-md text text-xs cursor-pointer">
              Add to Cart
            </button>
            <Link href={`/meals/${id}`} className="bg-black p-2 rounded-md text-white text-xs cursor-pointer">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
