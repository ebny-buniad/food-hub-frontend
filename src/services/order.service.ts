import { cookies } from "next/headers";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const orderServices = {
    //* Get user orders
    getOrders: async () => {
        try {
            const cookieStore = await cookies();
            const url = new URL(`${API_URL}/orders`);
            const res = await fetch(url.toString(), {
                headers: {
                    cookie: cookieStore.toString(),
                },
                credentials: "include",
                cache: "no-store",
            });
            const result = await res.json();
            if (!res.ok || result.error) {
                return { data: null, error: { message: result.message || result.error } };
            }
            return { data: result, error: null };
        } catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
};