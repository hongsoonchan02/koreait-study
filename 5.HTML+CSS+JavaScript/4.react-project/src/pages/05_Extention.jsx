

export default function Extention() {
    const todoHeader = "todo-header";

    return(
        <>
            <h1 className={todoHeader}>Todo List</h1>

            <ul style={{backgroundColor: 'red', color: 'blue'}}>
                <li>잠자기</li> 
                <li>놀기</li>
                <li>먹기</li>
            </ul>
        </>
    )

}