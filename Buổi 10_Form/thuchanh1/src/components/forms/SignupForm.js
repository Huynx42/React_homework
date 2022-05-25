import { useState } from "react";
import Input from "./Input";

const SignupForm = () => {
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        console.log(form);
    }
    const handleSubmit = () => {
        let isValid = form.username && form.email && form.password && form.repassword;
        alert(isValid ? "Sign up successfully!" : "Please fill in all blanks");
        // console.log(isValid);
    }
    return (
        <div className="container pt-5">
            <form onSubmit={handleSubmit}>
                <Input id="username" type="text" name="username" label="Username" value={form.username || ""} onChange={handleChange} placeholder="Enter your fullname"/>
                <Input id="email" type="email" name="email" label="Email" onChange={handleChange}/>
                <Input id="password" type="password" name="password" label="Password" onChange={handleChange}/>
                <Input id="repassword" type="password" name="repassword" label="Confirm password" onChange={handleChange}/>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
export default SignupForm;