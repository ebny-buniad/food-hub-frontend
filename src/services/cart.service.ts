const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const cartServices = {
    createCart: async function (data: any) {
        try {
            const payload = {
                items: Array.isArray(data) ? data : [data]
            }
            console.log(payload)
            
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
            return { data: result, error: null };

        } catch (err) {
            console.error(err);
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }

}