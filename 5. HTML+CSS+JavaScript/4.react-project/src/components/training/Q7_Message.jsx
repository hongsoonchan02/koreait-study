import { useState } from "react";


export default function Q7_Message() {
    
    const [state, setState] = useState(true);

    function msg() {
        setState(!state);
    }

    return(
        <button onClick={msg}>
            {state ? "안녕하세요." : "반갑습니다."}
        </button>
    )

}
