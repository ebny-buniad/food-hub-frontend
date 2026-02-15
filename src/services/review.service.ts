const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const reviewServices = {

    // Create review
    createReview: async function (data: any) {
        try {
            const url = new URL(`${API_URL}/reviews`)
            const payload = data;
            const res = await fetch(url.toString(), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });
            const result = await res.json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Get user reviews

    getReviews: async function (cookie: string) {
        try {
            const url = new URL(`${API_URL}/my-reviews`);
            const res = fetch(url.toString(), {
                method: "GET",
                headers: {
                    cookie: cookie
                },
                credentials: "include"
            })
            const result = (await res).json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}