"use server"

import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;
export async function createReview(data: any) {
    const cookieStore = await cookies();
    try {
        const url = new URL(`${NEXT_PUBLIC}/reviews`)
        const payload = data;
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-type": "application/json"
            },
            credentials: "include",
            cache: "no-store",
            body: JSON.stringify(payload)
        });
        const result = await res.json();
        return result;
    }
    catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
} 