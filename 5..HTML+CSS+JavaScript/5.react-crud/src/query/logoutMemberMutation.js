import useUserStore from "../store/userStore"
import { useMutation } from "@tanstack/react-query";
import { logoutMemberApi } from "../api/memberApi";

export const useLogoutMemberMutation = () => {

    const { logout } = useUserStore();

    return useMutation({
        mutationFn: logoutMemberApi,
        onSuccess: (data) => {
            logout();
        }
    })
}