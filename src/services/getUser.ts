import { userService } from "./user.service";

export const getUser = async () => {
    const { data } = await userService.getSession();
    const user = data?.user;
    return user;
}