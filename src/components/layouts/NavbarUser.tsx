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

export const NavbarUser = ({ user }: { user: any }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="relative h-10 w-10 rounded-full cursor-pointer" variant="ghost">
                    <Avatar>
                        <AvatarImage alt="@haydenbleasel" src={`${user?.image}`} />
                        <AvatarFallback>HB</AvatarFallback>
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
                <DropdownMenuItem variant="destructive">
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}

export default NavbarUser
