import { userService } from "./user.service";

export const getUser = async () => {
    const { data } = await userService.getSession();
    return data;
}