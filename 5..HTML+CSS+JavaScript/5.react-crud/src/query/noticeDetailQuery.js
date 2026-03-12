import { useQuery } from "@tanstack/react-query";
import { noticeDetailApi } from "../api/boardApi";

// 공지사항 상세보기
export const useNoticeDetailQuery = (postId) => {
    return useQuery({
        querykey: ['noticeDetail', postId],
        queryFn: () => noticeDetailApi(postId),
        enabled: !!postId, // postId가 있으면 true, 없으면 false
        statleTime: 60000, // 1분간 캐시 유지
        retry: 1
    })
}