const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const providerServices = {
    createProviderProfile: async function (data: string) {
        try {
            const payload = data;
            const url = new URL(`${API_URL}/provider/profile`);
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

    // Get all providers
    getAllProviders: async function () {
        try {
            const url = new URL(`${API_URL}/providers`);
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
            const url = new URL(`${API_URL}/provider/profile`);
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

    getProvider: async function (id: string) {
        try {
            const url = new URL(`${API_URL}/providers/${id}`);
            const res = await fetch(url.toString());
            const result = await res.json();
            return result;
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    },

    // Create meal
    createMeal: async function () {
        try {

        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}