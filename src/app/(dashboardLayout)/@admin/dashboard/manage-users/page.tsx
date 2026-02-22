import { getAllUsers } from "@/app/actions/adminActions";
import UsersList from "@/components/adminDashboard/UsersList";

export default async function ManageUsers() {
    const users = await getAllUsers();
    return (
        <div>
            <UsersList users={users}></UsersList>
        </div>
    )
}
