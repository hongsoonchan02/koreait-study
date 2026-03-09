
export default function Q8_StudentList({member}) {
    return(
        <>
            {member.map((member, index) => {
                return <p key={index}>{member.name}-{member.score}</p>
            })}
        </>
    )
}