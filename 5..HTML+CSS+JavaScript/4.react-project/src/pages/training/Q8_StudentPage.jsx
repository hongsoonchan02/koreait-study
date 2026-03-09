import Q8_StudentList from "../../components/training/Q8_StudentList";

function Q8_StudentPage() {
    return(
        <>
            <Q8_StudentList member={[{name: "김학생", score: "90점"},{name: "이학생", score: "80점"}]}></Q8_StudentList>
        </>
    )
}

export default Q8_StudentPage;