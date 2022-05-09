import { useState } from "react";

const TextArea = () => {
    const [message,setMessage] = useState("This is a description");
    const handleChange = (e) => {
        setMessage(e.target.value);
    }
    return (
        <form>
            <textarea name='abc' onKeyUp={handleChange} />
        </form>
    )
}

export default TextArea;