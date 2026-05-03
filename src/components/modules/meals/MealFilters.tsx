"use client";

import { CreditCard, Sparkles, Star, Utensils, Vegan } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function MealFilters({ categorys }: { categorys: any }) {

  const [selectedCuisine, setSelectedCuisine] = useState("");

  const router = useRouter();
  const params = useSearchParams();

  function updateFilter(key: string, value: string) {
    const search = new URLSearchParams(params.toString());
    if (value) search.set(key, value);
    else search.delete(key);
    router.push(`/meals?${search.toString()}`);
  }

  function clearFilter() {
    router.push(`/meals`);
  }


  return (
    <aside className="hidden lg:block w-72 h-fit sticky top-24 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm">
      <div className="flex  justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold">
            Filters
          </h3>
        </div>
        <button onClick={()=>clearFilter()} className="text-red-800 font-semibold cursor-pointer text-sm">
          Clear Filters
        </button>
      </div>
      <div className="space-y-8">
        {/* Cuisine Filter */}
        <div className="space-y-3">
          <span className="font-label-bold flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">
              <Utensils size={16} />
            </span>
            Cuisine
          </span>
          <div className="grid grid-cols-2 gap-2">
            {categorys.map((item: any) => (
              <button
                key={item.id}
                onClick={() => {
                  const newValue =
                    selectedCuisine === item.cuisine ? "" : item.cuisine;

                  setSelectedCuisine(newValue);
                  updateFilter("cuisine", newValue);
                }}
                className={`px-3 py-2 text-sm font-medium rounded-lg border transition
      ${selectedCuisine === item.cuisine
                    ? "bg-orange-600 text-white border-orange-600"
                    : "bg-orange-50 text-orange-600 border-orange-200 hover:bg-orange-100"
                  }
    `}
              >
                {item.cuisine}
              </button>
            ))}
          </div>
        </div>
        {/* Dietary */}
        <div className="space-y-3">
          <span className="font-label-bold flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">
              <Vegan size={16} />
            </span>
            Dietary
          </span>
          <div className="flex flex-wrap gap-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                className="rounded text-primary focus:ring-primary-container border-outline-variant"
                type="checkbox"
              />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Halal
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                className="rounded text-primary focus:ring-primary-container border-outline-variant"
                type="checkbox"
              />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Vegan
              </span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                className="rounded text-primary focus:ring-primary-container border-outline-variant"
                type="checkbox"
              />
              <span className="text-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                Vegetarian
              </span>
            </label>
          </div>
        </div>
        {/* Price Range */}
        <div className="space-y-3">
          <span className="font-label-bold flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">
              <CreditCard size={16} />
            </span>
            Price Range
          </span>
          <div className="flex items-center gap-2">
            <input
              className="w-full bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-orange-500 text-sm p-2"
              placeholder="Min"
              type="number"
            />
            <span className="text-gray-400">-</span>
            <input
              className="w-full bg-surface-container rounded-lg border-none focus:ring-2 focus:ring-orange-500 text-sm p-2"
              placeholder="Max"
              type="number"
            />
          </div>
        </div>
        {/* Rating */}
        <div className="space-y-3">
          <span className="font-label-bold flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">
              <Star size={16} />
            </span>
            Rating
          </span>
          <div className="space-y-1">
            <button className="w-full flex items-center justify-between text-sm text-on-surface-variant hover:bg-gray-50 p-2 rounded-lg transition-colors">
              <div className="flex text-secondary-container">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
                <span className="material-symbols-outlined">star</span>
              </div>
              <span>&amp; up</span>
            </button>
          </div>
        </div>
        {/* Featured Toggle */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="font-label-bold flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-orange-500 text-[18px]">
              <Sparkles size={16} />
            </span>
            Featured
          </span>
          <div className="relative inline-flex items-center cursor-pointer">
            <input className="sr-only peer" type="checkbox" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </div>
        </div>
      </div>
    </aside>

  );
}
