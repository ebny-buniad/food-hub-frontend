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
    }
}