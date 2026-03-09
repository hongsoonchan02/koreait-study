
export default function Q4_FruitList({list}) {

    return(
        <>
            <ul>
                {list.map((string, index) => {
                    return <li key={index}>{string}</li>
                })}
            </ul>
        </>
    )
}