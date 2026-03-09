
export default function Q9_Result({member}) {
    return(
        <>
            {member.score > 70 ? <h3>{member.name}-합격</h3> : <h3>{member.name}-불합격</h3>}
        </>
    )
}