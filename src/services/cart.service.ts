import { userService } from "./user.service";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const cartServices = {

    // User add meals in cart

    createCart: async function (data: any) {
        try {
            const payload = data;
            // API call here
            const url = new URL(`${API_URL}/cart`);
            const res = await fetch(url.toString(), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            const result = await res.json();
            return {
                data: result,
                success: true,
                error: null
            };
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    getCart: async function (cookieHeader: any) {
        try {
            const url = new URL(`${API_URL}/cart`);
            const res = await fetch(url.toString(), {
                headers: {
                    cookie: cookieHeader
                }
            });
            const {data} = await res.json();
            return data;
        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }

}