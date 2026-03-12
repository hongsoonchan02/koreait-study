import { useMutation } from "@tanstack/react-query";
import { noticeDeleteApi } from "../api/boardApi";


export const useNoticeDeleteMutaion = (postId) => {

    return useMutation({
        mutationFn: noticeDeleteApi(postId),
        onSuccess: (postId) => {
            alert("게시글 삭제가 완료되었습니다.")
        },
        onError: (error) => {
            alert("게시글 삭제 중 오류가 발생했습니다.")
        }
    })
}