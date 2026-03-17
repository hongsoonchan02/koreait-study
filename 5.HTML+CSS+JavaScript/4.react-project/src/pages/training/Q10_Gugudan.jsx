import { Link } from "react-router-dom";
import useGugudanCountStore from "../../store/Q10_GugudanCountStore";


function Gugudan() {

    const {number1, number2, setNumber1, setNumber2, setResult, resultMsg, setResultMsg} = useGugudanCountStore();
    function reload() {
        window.location.reload()
    }

    return(
        <> 
            <div>
                <label htmlFor="number1">첫번째 수 (a):</label>
                <input type="number" id="number1" onChange={(e) => setNumber1(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="number2">두번째 수 (b):</label>
                <input type="number" id="number2" onChange={(e) => setNumber2(e.target.value)}/>
            </div>
            <p>
                {/* 문제: a x b = ? 형식으로 보여야 함 */}
                문제 : {number1} x {number2} = ?
            </p>
            <input type="number" onChange={(e) => setResult(e.target.value)}/>
            <button onClick={() => resultCheck()}>정답 확인</button>
            <button style={{marginLeft: '10px'}} onClick={reload}>초기화</button>

            {/* 
                사용자가 입력한 숫자가 정답일 경우 '정답 입니다!' 출력
                정답이 아닌 경우 '오답 입니다!' 출력
            */}
            <p style={{marginTop: '10px'}}>{resultMsg}</p>
        </>
    )
}

export default Gugudan;