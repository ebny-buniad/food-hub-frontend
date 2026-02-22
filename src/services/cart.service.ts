const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const cartServices = {
    
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