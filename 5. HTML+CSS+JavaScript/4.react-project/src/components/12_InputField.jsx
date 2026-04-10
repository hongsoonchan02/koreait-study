import { useState } from "react";

function InputField() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleName(event) {
        setName(event.target.value);
    }

    return (
        <form action="">
            <input type="text" onChange={handleName}/>
            <input type="text" onChange={(e) => {
                                        setEmail(e.target.value)
                                        console.log(email)}}/>
        </form>

    )
}

export default InputField;