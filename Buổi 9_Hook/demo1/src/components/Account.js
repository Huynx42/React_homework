import {Component, useState} from 'react';

//Stateless (functional component)
function Account() {
    //Khai báo state getter,setter
    const [username,setUsername] = useState("Admin");
    const [email,setEmail] = useState('admin@gmail.com');
    const changeName = () => {
        setUsername("Salleeee");
    }
    return (
        <div>
            <h1>{username}</h1>
            <h2>Email: {email}</h2>
            <input type='email' onKeyUp={(e) => {setEmail(e.target.value)}}></input>
            <button onClick={changeName}>Change usernam</button>
        </div>
    )
}

//Stateful (class component)
//Nếu sử dụng Class
class Person extends Component {
    constructor() {
        super();
        this.state = {
            username:"Admin"
        }
    }
    changeName = () => {
        this.setState({username : "Sazzzi"});
    }
    render() {
        return (
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={this.changeName}>Change usernam</button>
            </div>
        )
    }
}

export default Account;
// export default Person;