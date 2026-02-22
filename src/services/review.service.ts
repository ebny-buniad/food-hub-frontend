import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
export const reviewServices = {
    // Get user reviews
    getReviews: async function () {
        const cookieStore = await cookies();
        try {
            const url = new URL(`${NEXT_PUBLIC}/my-reviews`);
            const res = fetch(url.toString(), {
                method: "GET",
                headers: {
                    cookie: cookieStore.toString()
                },
                credentials: "include",
                cache: "no-store",
            })
            const result = (await res).json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}