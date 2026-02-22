"use server"

import { cookies } from "next/headers";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
export async function createCart(data: any) {
    try {
        const cookieStore = await cookies();
        const payload = data;
        const url = new URL(`${NEXT_PUBLIC}/cart`);
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(payload)
        })
        const result = await res.json();
        return {
            data: result,
            success: true,
            error: null
        };
    } catch (err) {
        console.error(err);
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}