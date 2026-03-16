import axiosInstance from "./AxiosInstance"

// 공지사항 목록 조회
export const noticeListApi = async (page = 1) => {
    const response = await axiosInstance.get("/api/board/notice", {
        params: {
            page: page,
        },
        withCredentials: true
    })
    return response.data;
}

// 공지사항 상세보기 조회
export const noticeDetailApi = async (postId) => {
    try {
        const response = await axiosInstance.get(`/api/board/notice/${postId}`, {
            withCredentials: true
        })

        return response.data;
    } catch(err) {
        // 서버가 응답을 했는데 상태코드가 4xx, 5xx
        if(err.response) {
            console.error('응답 데이터 : ', err.response.data);
            throw err;
        } else if(err.request) {
            // 요청은 보냈는데 서버가 응답을 하지 않음
            console.error('서버에 연결할 수 없습니다.');
        } else {
            // 요청 중 에러 발생했을 때
            console.error('요청 중 에러 발생 : ', err.message);
            throw err;
        }

    }
}

// 게시글 삭제
export const noticeDeleteApi = async (postId) => {
    const response = await axiosInstance.delete(`/api/board/notice/${postId}`, {
        withCredentials: true
    })

    return response.data;

}

export const noticeCreateApi = async (formData) => {
    formData.forEach(element => {
        console.log(element)
    });

    const response = await axiosInstance.post("/api/board/notice",
                                                formData, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                    }
                                                })
    

    return response.data;
}

export const noticeEditApi = async (formData, postId) => {
    console.log(postId)
    console.log(formData)
    // put, patch : 수정
    //  - put : 전체 리소스 수정
    //  - patch : 일부 리소스 수정
    const response = await axiosInstance.patch(`/api/board/notice/${postId}`,
                                                formData, {
                                                    withCredentials: true,
                                                    headers: {
                                                        'Content-Type': 'multipart/form-data'
                                                    }
                                                })
    

    return response.data;
}
