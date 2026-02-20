const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const providerServices = {
    createProviderProfile: async function (data: any) {
        try {
            const payload = data;
            const url = new URL(`${NEXT_PUBLIC}/provider/profile`);
            const res = await fetch(url.toString(), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            const result = await res.json();
            return {
                data: result,
                success: true
            };
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

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


    getProviderProfile: async function (cookie: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/provider/profile`);
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
    },

    // Get provider provider with provider meals (Update, delete operation)
    getProviderMeals: async function (cookie: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/provider/meals`);
            const res = await fetch(url.toString(), {
                method: "GET",
                headers: {
                    cookie: cookie
                },
                credentials: "include"
            });
            const result = await res.json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Create meal
    createNewMeal: async function (data: any) {
        const payload = data;
        try {
            const url = new URL(`${NEXT_PUBLIC}/provider/meals`);
            const res = await fetch(url.toString(), {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(payload)
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
    getProviderOrders: async function (cookie: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/provider/orders`);
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