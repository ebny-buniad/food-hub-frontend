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
            console.error("Get Users Error:", err);
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
            console.error("Get Users Error:", err);
            return {
                data: null,
                error: { message: "Something Went Wrong" },
            };
        }
    }

}