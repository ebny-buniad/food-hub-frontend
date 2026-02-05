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
          <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Sale
          </span>
        </div>

        <div className="p-5 space-y-4">
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

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
