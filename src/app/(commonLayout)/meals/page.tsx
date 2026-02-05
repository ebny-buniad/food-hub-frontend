import { MealCard } from "@/components/layouts/MealCard";
import { MealFilters } from "@/components/layouts/MealFilters";
import { mealsServices } from "@/services/meals.service";

export default async function MealsPage({
  searchParams,
}: {
  searchParams: Promise<{
    dietary?: string;
    cuisine?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}) {
  // unwrap the searchParams Promise
  const params = await searchParams;

  // parse numbers safely
  const minPrice = params.minPrice ? Number(params.minPrice) : undefined;
  const maxPrice = params.maxPrice ? Number(params.maxPrice) : undefined;

  // build filter object dynamically
  const filters: any = {};
  if (params.dietary) filters.dietary = params.dietary;
  if (params.cuisine) filters.cuisine = params.cuisine;
  if (minPrice) filters.minPrice = minPrice;
  if (maxPrice) filters.maxPrice = maxPrice;

  // fetch meals from backend
  const { data } = await mealsServices.getMeals(filters, { cache: "no-store" });

  return (
    <div className="container mx-auto mt-10">
      {/* Client-side Filter UI */}
      <MealFilters />

      {/* Meals Grid */}
      <div className="grid grid-cols-5 gap-5 mt-10">
        {data.map((meal: Meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
}
