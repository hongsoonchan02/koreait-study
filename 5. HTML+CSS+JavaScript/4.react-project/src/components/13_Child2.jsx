function Child2({count, setCount}) {
    return(
        <>
            <p>Child의 값: {count}</p>
            <button onClick={() => setCount(count => count+1)}>증가</button>
        </>
    )
}

export default Child2;