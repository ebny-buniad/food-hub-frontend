const API_URL = process.env.API_URL;
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const adminServices = {
    // Get all users
    getAllUsers: async (cookie: string) => {
        try {
            const res = await fetch(`${API_URL}/admin/users`, {
                method: "GET",
                headers: {
                    cookie: cookie,
                },
                credentials: "include",
            });
            return await res.json();
        } catch (err) {
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    },

    // Update user status
    updateUserStatus: async function (id: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/admin/users/status/${id}`);
            const res = await fetch(url.toString(), {
                method: "PATCH",
                credentials: "include"
            })
            return res;
        }
        catch (err) {
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    },

    // Get all orders
    getAllOrders: async function (cookie: string) {
        try {
            const url = new URL(`${API_URL}/admin/orders`);
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
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    },

    // Create Categories
    createCategories: async function (data: any) {
        const payload = data;
        try {
            const url = new URL(`${NEXT_PUBLIC}/categories`);
            const res = await fetch(url.toString(), {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            });

            return {
                data: res,
                status: true
            }
        }
        catch (err) {
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    },

    // Get all categories

    getAllCategories: async function () {
        try {
            const url = new URL(`${API_URL}/categories`);
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
    },

    // Delete categories

    deleteCategories: async function (id: string) {
        try {
            const url = new URL(`${NEXT_PUBLIC}/categories/${id}`);
            const res = await fetch(url.toString(), {
                method: "DELETE",
                credentials: "include"
            });
            return res;

        }
        catch (err) {
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    }

}