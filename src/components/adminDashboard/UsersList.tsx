"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { adminServices } from "@/services/admin.service"
import { useRouter } from "next/navigation"

type User = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: string
    updatedAt: string
    role: string
    status: string
}

export default function UsersList({ users }: { users: User[] }) {
    const router = useRouter();

    const handleStatusToggle = async (id: string) => {
        await adminServices.updateUserStatus(id);
        router.refresh();
    }

    return (
        <div className="p-6">
            <div className="space-y-3">
                <h2 className="text-4xl font-bold">All Users</h2>
            </div>
            <div className="rounded-xl border shadow-sm overflow-hidden w-7xl">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {users?.map((user) => (
                            <TableRow key={user?.id}>

                                {/* User Info */}
                                <TableCell className="flex items-center gap-3">
                                    <Image
                                        src={
                                            user?.image ??
                                            "https://ui-avatars.com/api/?name=" + user?.name
                                        }
                                        alt={user?.name ?? "User"}
                                        width={40}
                                        height={40}
                                        className="rounded-full object-cover"
                                    />
                                    <span className="font-medium">
                                        {user?.name ?? "N/A"}
                                    </span>
                                </TableCell>

                                {/* Email */}
                                <TableCell>{user?.email ?? "N/A"}</TableCell>

                                {/* Role */}
                                <TableCell>
                                    <Badge variant="secondary">
                                        {user?.role ?? "USER"}
                                    </Badge>
                                </TableCell>

                                {/* Status */}
                                <TableCell>
                                    <Badge
                                        className={
                                            user?.status === "ACTIVE"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-red-100 text-red-600"
                                        }
                                    >
                                        {user?.status ?? "UNKNOWN"}
                                    </Badge>
                                </TableCell>

                                {/* Created Date */}
                                <TableCell>
                                    {user?.createdAt
                                        ? new Date(user?.createdAt).toLocaleDateString()
                                        : "N/A"}
                                </TableCell>

                                {/* Action Button */}
                                <TableCell className="text-right">
                                    <Button
                                        size="sm"
                                        variant={
                                            user?.status === "ACTIVE"
                                                ? "destructive"
                                                : "default"
                                        }
                                        onClick={() =>
                                            handleStatusToggle(user?.id)
                                        }
                                    >
                                        {user?.status === "ACTIVE"
                                            ? "Suspend"
                                            : "Activate"}
                                    </Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
