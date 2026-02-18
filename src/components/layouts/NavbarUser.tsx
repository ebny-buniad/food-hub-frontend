"use client"

import { HelpCircle, LayoutDashboard, LogOut, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export const NavbarUser = ({ user }: { user: any }) => {

    const router = useRouter();

    const handelLogOut = async () => {
        const result = await authClient.signOut();
        if(result.data?.success === true){
            router.push("/auth/login")
            router.refresh();
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative h-10 w-10 rounded-full cursor-pointer" variant="ghost">
                    <Avatar>
                        <AvatarImage alt="@haydenbleasel" src={`${user?.image}`} />
                        <AvatarFallback>
                            <img src="https://cdn-icons-png.flaticon.com/512/9385/9385289.png" alt="" />
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="font-medium text-sm leading-none">{user?.name}</p>
                        <p className="text-muted-foreground text-xs leading-none">{user?.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href={`/profile`}>
                    <DropdownMenuItem>
                        <User />
                        Profile
                    </DropdownMenuItem></Link>
                <DropdownMenuItem>
                    <Settings />
                    Settings
                </DropdownMenuItem>
                <Link href={`/dashboard`}>
                    <DropdownMenuItem>
                        <LayoutDashboard />
                        Dashboard
                    </DropdownMenuItem></Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={()=> handelLogOut()} variant="destructive">
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default NavbarUser
