"use server";

import { cookies } from "next/headers";
const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export async function getCart() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/cart`);
        const res = await fetch(url.toString(), {
            headers: {
                cookie: cookieStore.toString()
            }
        });
        const { data } = await res.json();
        return data;
    } catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}