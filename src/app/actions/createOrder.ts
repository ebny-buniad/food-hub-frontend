"use server"

import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export async function createOrder(data: any) {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${API_URL}/orders`);
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        const result = await res.json();
        if (!res.ok || result.error) {
            return {
                data: null,
                error: { message: result.message || result.error || "Order not created" },
            };
        }
        return { data: result, success: true, error: null };
    } catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}