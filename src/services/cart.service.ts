const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const cartServices = {

    // User add meals in cart

    createCart: async function (data: any) {
        try {
            const payload = data;
            // API call here
            const url = new URL(`${NEXT_PUBLIC}/cart`);
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

    // Get user active cart
    getCart: async function (cookieHeader: any) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/cart`);
            const res = await fetch(url.toString(), {
                headers: {
                    cookie: cookieHeader
                }
            });
            const { data } = await res.json();
            return data;
        } catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Delete cart items
    deleteCart: async function (id: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/cart/${id}`);
            const res = await fetch(url, {
                method: "DELETE",
                credentials: "include",
                cache: "no-store"
            })
            return {
                res,
                seccess: true
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }

}