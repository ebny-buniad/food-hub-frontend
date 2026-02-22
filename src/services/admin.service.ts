const API = process.env.NEXT_PUBLIC_API_URL;

export const adminServices = {
    // Get all categories
    getAllCategories: async function () {
        try {
            const url = new URL(`${API}/categories`);
            const res = await fetch(url.toString(), {
                method: "GET",
                credentials: "include"
            });
            const result = await res.json();
            return result;
        }
        catch (err) {
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    }
}