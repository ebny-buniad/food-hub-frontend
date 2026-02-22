"use server"

import { cookies } from "next/headers";

const NEXT_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

// Create provider profile
export async function createProviderProfile(data: any) {
    try {
        const cookieStore = await cookies();
        const payload = data;
        const url = new URL(`${NEXT_PUBLIC}/provider/profile`);
        const res = await fetch(url.toString(), {
            method: "POST",
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
        };
    }
    catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}


// Get provider Profile
export async function getProviderProfile() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/provider/profile`);
        const res = await fetch(url.toString(), {
            method: "GET",
            headers: {
                cookie: cookieStore.toString()
            },
            credentials: "include",
            cache: "no-store",
        });
        const result = await res.json();
        return result
    }
    catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}

// Get provider provider with provider meals (Update, delete operation)
export async function getProviderMeals() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/provider/meals`);
        const res = await fetch(url.toString(), {
            method: "GET",
            headers: {
                cookie: cookieStore.toString()
            },
            credentials: "include"
        });
        const result = await res.json();
        return result;
    }
    catch (err) {
        return { data: null, error: { message: "Something Went Wrong" } };
    }
}

// Create new meal
export async function createNewMeal(data: any) {
    const payload = data;
    try {
        const cookieStore = await cookies();
        const url = new URL(`${NEXT_PUBLIC}/provider/meals`);
        const res = await fetch(url.toString(), {
            method: "POST",
            credentials: "include",
            headers: {
                cookie: cookieStore.toString(),
                "Content-type": "application/json"
            },
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

// Get provider orders
// export async function getProviderOrders() {
//     try {
//         const cookieStore = await cookies();
//         const url = new URL(`${NEXT_PUBLIC}/provider/orders`);
//         const res = await fetch(url.toString(), {
//             method: "GET",
//             headers: {
//                 cookie: cookieStore.toString()
//             },
//             credentials: "include"
//         });
//         const result = await res.json();
//         return result
//     }
//     catch (err) {
//         return { data: null, error: { message: "Something Went Wrong" } };
//     }
// }

// Update order status
export async function updateOrderStatus(orderId: string, status: string) {
    try {
        const cookieStore = await cookies();
        const paylaod = { status: status }
        const url = new URL(`${NEXT_PUBLIC}/provider/orders/status/${orderId}`);
        const res = await fetch(url.toString(), {
            method: "PATCH",
            headers: {
                cookie: cookieStore.toString(),
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(paylaod)
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