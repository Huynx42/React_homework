import { useState } from "react"

const MyValidateForm = () => {
    const [age,setAge] = useState(0);
    const  [err,setErr] = useState('');

    const handleChange = (e) => {
        let ageInput = e.target.value;
        // if (!Number(ageInput)) {
        //     alert("Not a number");
        // }
        if (!Number(ageInput)) {
           setErr("Not a number");
        } else {
            setAge(ageInput);
            setErr('');
        }
    }

    return (
        <div>
            <h1>{age}</h1>
            <form>
                <input type='text' onChange={handleChange}></input>
                <h3>{err}</h3>
            </form>
        </div>
    )
}

export default MyValidateForm;