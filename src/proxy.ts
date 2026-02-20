import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.service";

export async function proxy(request: NextRequest) {
    const pathName = request.nextUrl.pathname;
    let isAuthenticated = false;

    const { data } = await userService.getSession();
    if (data) {
        isAuthenticated = true;
    }
    if (pathName.startsWith("/dashboard") && !isAuthenticated) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*"],
};