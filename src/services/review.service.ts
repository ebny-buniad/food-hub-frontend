const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const reviewServices = {
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
    }
}