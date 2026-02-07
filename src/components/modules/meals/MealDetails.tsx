export function MealDetails({ meal }: { meal: any }) {
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
        <div className="bg-white my-10 md:w-xl mx-auto rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border">

            {/* Image */}
            <div className="relative">
                <img
                    src={thumbnail}
                    alt={name}
                    className="w-full h-52 object-cover"
                />

                {/* Availability Badge */}
                <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full 
            ${isAvailable ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                >
                    {isAvailable ? "Available" : "Out of Stock"}
                </span>

                {/* Dietary Badge */}
                <span className="absolute top-3 right-3 bg-indigo-600 text-white px-3 py-1 text-xs rounded-full">
                    {dietary}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
                    {name}
                </h3>

                {/* Cuisine */}
                <p className="text-sm text-gray-500">
                    Cuisine: {category?.cuisine}
                </p>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                    {description}
                </p>

                {/* Price + Reviews */}
                <div className="flex justify-between items-center pt-2">
                    <p className="text-xl font-bold text-indigo-600">
                        ৳ {price}
                    </p>

                    <div className="text-sm text-gray-500">
                        ⭐ {reviews?.length ?? 0} reviews
                    </div>
                </div>

                {/* Button */}
                <button
                    disabled={!isAvailable}
                    className={`w-full mt-3 py-2 rounded-lg font-medium transition-all
            ${isAvailable
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                            : "bg-gray-300 text-gray-600 cursor-not-allowed"
                        }`}
                >
                    {isAvailable ? "Add to Cart" : "Unavailable"}
                </button>
            </div>
        </div>
    );
}
