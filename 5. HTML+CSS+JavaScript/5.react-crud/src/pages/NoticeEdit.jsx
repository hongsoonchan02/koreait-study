import Header from "../components/Header"
import { useEffect, useState } from "react";
import { useNoticeEditHook } from "../hooks/useNoticeEditHook";
import { useRef } from "react";
import { useQuillEditorHook } from "../hooks/useQuillEditorHook";
import { useNoticeEditMutation } from "../query/noticeEditMutation";
import { Link } from "react-router-dom";
import { useFileUploadHook } from "../hooks/useFileUploadHook";

function NoticeEdit() {

    const { data } = useNoticeEditHook();
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const { selectedFiles, imagePreview, handleImageChange } = useFileUploadHook();
    
    useEffect(() => {
        if (data) {
            setTitle(data.title)
            setCategory(data.category)
        }
    }, [data])

    const [editorReady, setEditorReady] = useState(false);
    const contentLoadedRef = useRef(false);
    const editorInitializedRef = useRef(false);
    const { quillRef } = useQuillEditorHook(data);
    const noticeEditMutation = useNoticeEditMutation();

    function handleSubmit(e) {
        e.preventDefault();
        const content = quillRef.current.root.innerHTML;// 내용 가져오기


        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("category", category);

        selectedFiles.forEach(file => {
            console.log(file)
            formData.append("files", file);
        })
        // API 요청
        noticeEditMutation.mutate({
            formData: formData,
            postId: data.id
        });
    }

    return (

        <>
            <Header />

            <div className="container">
                <h1 style={{ marginBottom: "2rem" }}>공지사항 수정</h1>
                <div className="form-card" style={{ maxWidth: 800 }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>분류</label>
                            <select
                                id="announcementCategory"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "0.75rem",
                                    border: "1px solid var(--border)",
                                    borderRadius: "0.5rem"
                                }}
                            >
                                <option value="공지">공지</option>
                                <option value="점검">점검</option>
                                <option value="이벤트">이벤트</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>제목</label>
                            <input
                                type="text"
                                id="announcementTitle"
                                placeholder="공지사항 제목을 입력하세요"
                                required=""
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>내용</label>
                            <div id="noticeEditor" className="editor-container" />
                        </div>
                        <div className="form-group">
                            <label>이미지 업로드</label>
                            <input type="file" id="announcementImage" accept="image/*"
                            onChange={handleImageChange} />
                            <div id="imagePreview" style={{ marginTop: "1rem" }} />
                        </div>
                        <div className="form-actions" style={{ textAlign: "center" }}>
                            <button type="submit" className="btn btn-primary">
                                수정
                            </button>
                            <Link
                                to="/notice/list"
                                className="btn btn-secondary"
                                style={{ textDecoration: "none" }}
                            >
                                취소
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NoticeEdit;