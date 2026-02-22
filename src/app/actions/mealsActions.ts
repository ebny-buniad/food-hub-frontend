"use server"
import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
// Update meal (For provider)
export async function updateMeal(id: string, data: any) {
    try {
        const cookieStore = await cookies();
        const payload = data;
        const url = new URL(`${NEXT_PUBLIC}/provider/meals/${id}`);
        const res = await fetch(url.toString(), {
            method: "PUT",
            headers: {
                cookie: cookieStore.toString(),
                "Content-type": "application/json"
            },
            credentials: "include",
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
}
// Delete meal (For Provider)
export async function deleteMeal(id: string) {
    try {
        if (!id) {
            return { success: false, message: "Meal id is required" };
        }
        const cookieStore = await cookies();
        const res = await fetch(
            `${NEXT_PUBLIC}/provider/meals/${id}`,
            {
                method: "DELETE",
                headers: {
                    cookie: cookieStore.toString(),
                },
                cache: "no-store",
            }
        );
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return {
                success: false,
                message: data?.message || "Delete failed",
            };
        }
        return {
            success: true,
            data,
        };
    } catch (error: any) {
        return {
            success: false,
            message: error?.message || "Something went wrong",
        };
    }
}