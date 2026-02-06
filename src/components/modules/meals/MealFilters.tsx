"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function MealFilters({ categorys }: { categorys: any }) {
  const router = useRouter();
  const params = useSearchParams();

  function updateFilter(key: string, value: string) {
    const search = new URLSearchParams(params.toString());

    if (value) search.set(key, value);
    else search.delete(key);

    router.push(`/meals?${search.toString()}`);
  }

  return (
    <div className="flex gap-4 mb-6">
      {/* Dietary */}
      <select
        onChange={(e) => updateFilter("dietary", e.target.value)}
        defaultValue={params.get("dietary") ?? ""}
      >
        <option value="">All Dietary</option>
        <option value="HALAL">HALAL</option>
        <option value="VEGAN">Vegan</option>
      </select>

      {/* Cuisine */}
      <select
        onChange={(e) => updateFilter("cuisine", e.target.value)}
        defaultValue={params.get("cuisine") ?? ""}
      >
        <option value="">All Cuisine</option>
        {
          categorys.map((category: any) => (
            <option key={category.id} value={`${category.cuisine}`}>{category.cuisine}</option>
          ))
        }
      </select>

      {/* Price */}
      <select
        onChange={(e) => updateFilter("minPrice", e.target.value)}
        defaultValue={params.get("minPrice") ?? ""}
      >
        <option value="">Min Price</option>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
      </select>
    </div>
  );
}
