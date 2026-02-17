import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { getUser } from "@/services/getUser"

export default async function Profile() {
    const user = await getUser()

    if(!user){
        return (
            <p className="text-center">User not found!</p>
        )
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Card className="rounded-2xl shadow-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        My Profile
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">

                    {/* Top Section */}
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user?.image ?? ""} />
                            <AvatarFallback>
                                {user?.name?.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold">{user?.name}</h2>
                            <p className="text-muted-foreground">{user?.email}</p>

                            <div className="flex gap-2">
                                <Badge variant="secondary">
                                    {user?.role}
                                </Badge>

                                <Badge
                                    variant={user?.status === "ACTIVE" ? "default" : "destructive"}
                                >
                                    {user?.status}
                                </Badge>

                                {user?.emailVerified && (
                                    <Badge variant="outline">
                                        Verified
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    <Separator />

                    {/* Info Section */}
                    <div className="grid sm:grid-cols-2 gap-6 text-sm">

                        <div>
                            <p className="text-muted-foreground">User ID</p>
                            <p className="font-medium break-all">{user?.id}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Created At</p>
                            <p className="font-medium">
                                {new Date(user?.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Last Updated</p>
                            <p className="font-medium">
                                {new Date(user?.updatedAt).toLocaleDateString()}
                            </p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Email Verified</p>
                            <p className="font-medium">
                                {user?.emailVerified ? "Yes" : "No"}
                            </p>
                        </div>

                    </div>

                </CardContent>
            </Card>
        </div>
    )
}
