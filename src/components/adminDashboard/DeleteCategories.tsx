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
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { deleteCategories } from "@/app/actions/adminActions"

export default function DeleteCategories({ categories }: { categories: any }) {
    const router = useRouter();
    const handleDelete = async (id: string) => {
        try {
            const result = await deleteCategories(id)
            if (result.success === true) {
                toast.success("Category delete!")
                router.refresh();
            }
        } catch (error) {
            toast.error("Something went wrong!")
        }
    }
    if (!categories?.length) {
        return (
            <div className="text-center py-10 text-muted-foreground">
                No categories found.
            </div>
        )
    }

    return (
        <div className="p-6">
            <div className="rounded-md border shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Cuisine</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {categories?.map((category: any) => (
                            <TableRow key={category?.id}>

                                {/* Cuisine Name */}
                                <TableCell>
                                    <Badge variant="secondary">
                                        {category?.cuisine ?? "N/A"}
                                    </Badge>
                                </TableCell>

                                {/* Created Date */}
                                <TableCell>
                                    {category?.createdAt
                                        ? new Date(category?.createdAt).toLocaleDateString()
                                        : "N/A"}
                                </TableCell>

                                {/* Delete Button */}
                                <TableCell className="text-right">
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={() =>
                                            handleDelete(category?.id ?? "")
                                        }
                                    >
                                        Delete
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
