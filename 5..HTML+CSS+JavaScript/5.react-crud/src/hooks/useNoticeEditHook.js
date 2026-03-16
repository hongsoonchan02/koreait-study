import { useParams } from "react-router-dom"
import { useNoticeDetailQuery } from "../query/NoticeDetailQuery";


export const useNoticeEditHook = () => {

    const { id } = useParams();
    const { data, isLoading, isError, error } = useNoticeDetailQuery(id);

    return{data}
}