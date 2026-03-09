
export default function Q6_Menu({menu}) {
    return(
        <>
            <ul>
                {menu
                    .map((string, index) => {
                        return <li key={index}>{string}</li>
                    })}
            </ul>
        </>
    )
}