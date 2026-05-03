import { MealCard } from "@/components/modules/meals/MealCard";
import { MealFilters } from "@/components/modules/meals/MealFilters";
import SearchMeals from "@/components/modules/meals/SearchMeals";
import TrendingMeals from "@/components/modules/meals/TrendingMeals";
import { mealsServices } from "@/services/meals.service";
import { Meal } from "@/types";
import { ChevronDown } from "lucide-react";

export default async function MealsPage({
  searchParams,
}: {
  searchParams: Promise<{
    q?:string,
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
  if (params.q) filters.q = params.q;
  if (params.dietary) filters.dietary = params.dietary;
  if (params.cuisine) filters.cuisine = params.cuisine;
  if (minPrice) filters.minPrice = minPrice;
  if (maxPrice) filters.maxPrice = maxPrice;

  // fetch meals from backend
  const data = await mealsServices.getMeals(filters, { cache: "no-store" });
  const meals = data?.data || [];
  const { data: categorys } = await mealsServices.getCategories();

  // Fetch trending meals
  const trendingMealsData = await mealsServices.getTrendingMeals();



  return (
    <div className="container mx-auto mt-10 p-3">
      <SearchMeals/>

      <TrendingMeals trendingMealsData={trendingMealsData?.data || []} />

      <div className="lg:flex gap-10">
        <MealFilters categorys={categorys} />

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">
                All Meals
              </h1>
              <p className="text-on-surface-variant">
                {meals.length} scrumptious meals found in your area
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-label-sm text-on-surface-variant whitespace-nowrap">
                Sort by:
              </span>
              <div className="relative group">
                <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-outline-variant shadow-sm text-sm font-label-bold">
                  Popular
                  <span className="material-symbols-outlined text-[18px]">
                    <ChevronDown size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Meals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {meals.map((meal: any) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
