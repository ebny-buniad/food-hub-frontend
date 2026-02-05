const API_URL = process.env.API_URL


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
    getMeals: async function (
        params?: GetMealsParams,
        options?: ServiceOptions
    ) {
        try {
            const url = new URL(`${API_URL}/meals`);

            if (params) {
                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && value !== null && value !== "") {
                        url.searchParams.append(key, value);
                    }
                });
            }

            console.log('params ----------------',params)

            

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
    }
}