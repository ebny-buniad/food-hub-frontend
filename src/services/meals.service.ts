const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

interface GetMealsParams {
    dietary?: string,
    cuisine?: string,
    minPrice?: number,
    maxPrice?: number
}
interface ServiceOptions {
    cache?: RequestCache;
    revalidate?: number;
}
export const mealsServices = {
    // Get all meals with filter
    getMeals: async function (
        params?: GetMealsParams,
        options?: ServiceOptions
    ) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/meals`);
            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value);
                    }
                });
            }
            const config: RequestInit = {};
            if (options?.cache) {
                config.cache = options.cache;
            }
            if (options?.revalidate) {
                config.next = { revalidate: options.revalidate };
            }
            const res = await fetch(url.toString(), config);
            const data = await res.json();
            return {
                data: data,
                error: null
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },
    // Get single meal by ID
    getMeal: async function (id: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/meals/${id}`);
            const res = await fetch(url.toString());
            const data = await res.json();
            return {
                data: data,
                error: null
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },
    // Get all categories for filter items or meals
    getCategories: async function () {
        try {
            const url = new URL(`${NEXT_PUBLIC}/categories`);
            const res = await fetch(url.toString());
            const data = await res.json();
            return {
                data: data,
                error: null
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}