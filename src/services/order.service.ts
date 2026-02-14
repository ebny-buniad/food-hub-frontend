const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const orderServices = {
    // Create customer orders
    createOrder: async function (data: any) {
        try {
            const payload = data;
            const url = new URL(`${API_URL}/orders`);
            const res = await fetch(url.toString(), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            })
            const result = await res.json();
            return {
                data: result,
                success: true,
                error: null
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Get user orders
    getOrders: async function (cookieHeader: string) {
        try {
            const url = new URL(`${API_URL}/orders`);
            const res = await fetch(url.toString(), {
                headers: {
                    cookie: cookieHeader
                },
                credentials: "include"
            });
            const result = await res.json();
            return {
                data: result
            }
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Update 
    updateOrderStatus: async function (orderId: string) {
        console.log(orderId)
        try {
            const url = new URL(`${API_URL}/orders/${orderId}`);
            const res = await fetch(url.toString(), {
                method: "PATCH",
                credentials: "include"
            })
            return res;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}