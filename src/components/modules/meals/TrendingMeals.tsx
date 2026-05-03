import React from "react";

const TrendingMealSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-48 w-full rounded-xl bg-gray-200"></div>
      <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
      <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
    </div>
  );
};

export default function TrendingMeals({ trendingMealsData }: any) {
  const isLoading = !trendingMealsData || trendingMealsData.length === 0;

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          🔥 Trending Now
        </h2>

        <button className="text-primary font-semibold hover:underline">
          View All
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {isLoading
          ? //  Skeleton show
            [...Array(5)].map((_, i) => (
              <TrendingMealSkeleton key={i} />
            ))
          : //  Real data
            trendingMealsData.map((meal: any) => (
              <div
                key={meal.id}
                className="flex-none w-full group cursor-pointer space-y-3"
              >
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <img
                    src={meal.thumbnail}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {meal.ratingAvg >= 4 && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      🔥 Best selling
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 bg-white/90 px-2 py-1 rounded-lg text-sm font-semibold shadow">
                    ৳{meal.price}
                  </div>
                </div>

                <h3 className="font-semibold text-lg truncate">
                  {meal.name}
                </h3>

                <p className="text-sm text-gray-500 flex items-center gap-1">
                  ⭐ {meal.ratingAvg || "No rating"}
                </p>
              </div>
            ))}
      </div>
    </section>
  );
}