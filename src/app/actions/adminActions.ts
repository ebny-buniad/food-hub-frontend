"use server"

import { cookies } from "next/headers";
const API = process.env.NEXT_PUBLIC_API_URL;

// Get all user
export async function getAllUsers() {
    try {
        const cookieStore = await cookies()
        const res = await fetch(`${API}/admin/users`, {
            method: "GET",
            headers: {
                cookie: cookieStore.toString(),
            },
            credentials: "include",
        });
        const result = await res.json();
        return result;
    } catch (err) {
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}

// Update user status
export async function updateUserStatus(id: string) {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${API}/admin/users/status/${id}`);
        const res = await fetch(url.toString(), {
            method: "PATCH",
            headers: {
                cookie: cookieStore.toString()
            },
            credentials: "include"
        })
        const result = await res.json();
        return result;
    }
    catch (err) {
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}

// Get all orders
export async function getAllOrders() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${API}/admin/orders`);
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
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}

// Create Categories
export async function createCategories(data: any) {
    try {
        const cookieStore = await cookies();
        const payload = data;
        const url = new URL(`${API}/categories`);
        const res = await fetch(url.toString(), {
            method: "POST",
            headers: {
                cookie: cookieStore.toString(),
                "Content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });

        const result = await res.json()

        return {
            data: result,
            status: true
        }
    }
    catch (err) {
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}

// Get admin stats

export async function getAdminStats() {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${API}/admin-stats`);
        const res = await fetch(url.toString(), {
            method: "GET",
            headers: {
                cookie: cookieStore.toString()
            },
            credentials: "include"
        })

        const result = await res.json();
        return result;
    }
    catch (err) {
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}

// Delete categories
export async function deleteCategories(id: string) {
    try {
        const cookieStore = await cookies();
        const url = new URL(`${API}/categories/${id}`);
        const res = await fetch(url.toString(), {
            method: "DELETE",
            headers: {
                cookie: cookieStore.toString()
            },
            credentials: "include"
        });
        const result = await res.json();
        return {
            data: result,
            success: true
        };
    }
    catch (err) {
        return {
            data: null,
            error: { message: "Something Went Wrong" },
        };
    }
}