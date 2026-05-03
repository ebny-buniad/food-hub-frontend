"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchMeals() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const delay = setTimeout(async () => {
            setLoading(true);
            const res = await fetch(`/api/meals?q=${query}`);
            const data = await res.json();
            setResults(data);
            setLoading(false);
        }, 300);

        return () => clearTimeout(delay);
    }, [query]);

    function handleSearch() {
        router.push(`/meals?q=${encodeURIComponent(query)}`);
    }

    return (
        <div className="max-w-3xl mx-auto mb-12 relative">
            <div className="relative flex items-center bg-white rounded-xl border overflow-hidden">
                <div className="pl-5 pr-3 text-orange-600">🔍</div>

                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }}
                    className="w-full py-5 pr-6 bg-transparent outline-none"
                    placeholder="Search meals..."
                />

                <button onClick={()=>handleSearch()} className="mr-3 px-6 py-2 bg-orange-500 text-white rounded-lg">
                    Search
                </button>
            </div>

            {query && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border z-40">
                    <div className="p-2">
                        {loading && <p className="p-3">Searching...</p>}

                        {!loading && results.length === 0 && (
                            <p className="p-3">No results found</p>
                        )}

                        {results.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => router.push(`/meals?q=${item.name}`)}
                                className="px-4 py-3 hover:bg-orange-50 cursor-pointer"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}