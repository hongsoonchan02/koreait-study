
export default function Q2_Button() {
    function buttonMsg () {
        alert("버튼이 클릭되었습니다.")
    }
    return(
        <button onClick={buttonMsg}>클릭하기</button>
    )
}