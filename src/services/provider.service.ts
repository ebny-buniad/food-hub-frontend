const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const providerServices = {
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
    }
}