import { useState } from "react";

const MyForm = () => {
    // const [username,setUsername] = useState("");
    // const [age,setAge] = useState(0);

    const [account,setAccount] = useState({username: "",age: 0})
    // const handleChange = (e) => {
    //     console.log(e.target);
    //     setAge(e.target.value);
    // }
    const handleChange = (e) => {
        setAccount({...account,[e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        //Khóa lại trước khi submit
        e.preventDefault();
        // console.log(e.target);
    }
    let message;
    // if (age > 0) {
    //     message = '>0';
    // } else {
    //     message = '';
    // }
    return (
        <form onSubmit={handleSubmit}>
            {/* <h3>Your name: {username} - {age > 0 ? age: ''}</h3> */}
            <h3>Your name: {account.username} - {account.age}</h3>
            {/* <input type='text' className="" placeholder="Enter your name" onKeyUp={(e)=>{setUsername(e.target.value)}}></input> */}
            <input type='text' name="username" className="" placeholder="Enter your name" onKeyUp={handleChange}></input>
            <br/>
            <input type='number' name="age" className="" placeholder="Enter your age" onKeyUp={handleChange}></input>
            <input type='submit' value="Submit"></input>
            <h3>{message}</h3>
        </form>
    )
}

export default MyForm;