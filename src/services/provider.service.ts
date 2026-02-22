import { cookies } from "next/headers";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const providerServices = {

    // Get all providers
    getAllProviders: async function () {
        try {
            const url = new URL(`${NEXT_PUBLIC}/providers`);
            const res = await fetch(url.toString());
            const result = await res.json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Get all categories
    getCategories: async function () {
        try {
            const url = new URL(`${NEXT_PUBLIC}/categories`);
            const res = await fetch(url.toString());
            const result = await res.json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Get provider orders
    getProviderOrders: async function () {
        try {
            const cookieStore = await cookies();
            const url = new URL(`${NEXT_PUBLIC}/provider/orders`);
            const res = await fetch(url.toString(), {
                method: "GET",
                headers: {
                    cookie: cookieStore.toString()
                },
                credentials: "include"
            });
            const result = await res.json();
            return result
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Update order status
    updateOrderStatus: async function (orderId: string, status: string) {
        try {
            const paylaod = { status: status }
            console.log(paylaod)
            const url = new URL(`${NEXT_PUBLIC}/provider/orders/status/${orderId}`);
            const res = await fetch(url.toString(), {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(paylaod)
            });
            const result = await res.json();
            return {
                data: result,
                success: true
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Get provider stats
    getProviderStats: async function (cookie: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/provider/stats`);
            const res = await fetch(url.toString(), {
                method: "GET",
                headers: {
                    cookie: cookie
                },
                credentials: "include"
            });
            const result = await res.json();
            return result
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}