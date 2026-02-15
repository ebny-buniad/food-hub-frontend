const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const reviewServices = {
    createReview: async function (data: any) {
        try {
            const url = new URL(`${API_URL}/reviews`)
        }
        catch (err) {
            return { data: null, error: { message: "Something Went Wrong" } };
        }
    }
}