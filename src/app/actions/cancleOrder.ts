"use server";
import { cookies } from "next/headers";

export async function cancelMyOrder(orderId: string) {
    const cookieStore = await cookies();
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders/${orderId}`, {
            method: "PATCH",
            headers: {
                cookie: cookieStore.toString(),
            },
            cache: "no-store",
        });

        const data = await res.json().catch(() => ({}));

        if (!res.ok) {
            return {
                success: false,
                message: data?.message || "Failed to cancel order",
            };
        }

        return { success: true };
    } catch (e: any) {
        return { success: false, message: e.message };
    }
}