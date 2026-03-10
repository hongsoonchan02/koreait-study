import { create } from "zustand";

const useGugudanCountStore = create((set, get) => ({
    number1: 0,
    setNumber1: (num1) => set({number1: num1}),
    number2: 0,
    setNumber2: (num2) => set({number2: num2}),
    result: 0,
    setResult: (res) => set({result: res}),
    clear: () => set({number1: '', number2: '', result:'', resultMsg: ''}),
    resultMsg: '',
    // setResultMsg: () => set((state) => ({resultMsg: state.result === state.number1 * state.number2 ? "정답입니다." : "오답입니다."}))

    checkAnswer: () => { // 정답 확인 함수
        // get() : 현재 저장소의 상태(state)를 불러오는 함수
        const {number1, number2, result} = get();
        const resultCheck = Number(number1) * Number(number2) === Number(result);

        set({resultMsg: resultCheck ? "정답 입니다!" : "오답 입니다!"});
    }

}))

export default useGugudanCountStore;