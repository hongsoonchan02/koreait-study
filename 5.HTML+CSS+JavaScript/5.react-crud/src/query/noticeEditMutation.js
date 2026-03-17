import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { noticeEditApi } from "../api/boardApi";

export const useNoticeEditMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation ({
        mutationFn: ({formData, postId}) => { noticeEditApi(formData, postId) },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['noticeList']
            })
            alert('게시글이 수정되었습니다.');
            navigate('/notice/list');
        }
    })
}