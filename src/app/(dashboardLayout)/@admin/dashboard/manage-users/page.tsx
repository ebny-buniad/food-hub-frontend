import UsersList from "@/components/adminDashboard/UsersList";
import { adminServices } from "@/services/admin.service";
import { userService } from "@/services/user.service"

export default async function ManageUsers() {

    const cookieHeader = await userService?.getUserCookie();
    const users = await adminServices?.getAllUsers(cookieHeader as string);

    return (
        <div>
            <UsersList users={users}></UsersList>
        </div>
    )
}
