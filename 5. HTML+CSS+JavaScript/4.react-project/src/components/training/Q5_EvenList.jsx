
export default function Q5_EvenList({list}) {

    return(
        <>
            {list
                .filter(number => number % 2 === 0)
                .map((number, index) => {
                    return <p key={index}>{number}</p>
                })
            }
        </>
    )
}