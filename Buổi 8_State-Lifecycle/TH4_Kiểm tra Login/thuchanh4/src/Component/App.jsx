import React,{Component} from 'react';
import Home from './Home';

class AppTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:false
        }
    }

    handleLogIn = () => {
        this.setState({isLoggedIn:true})
    }

    handleLogOut = () => {
        this.setState({isLoggedIn:false})
    }

    render() {
        const {isLoggedIn} = this.state;
        if (isLoggedIn)
            return(
                //hỏi: tại sao ở đây sử dụng OnLogOuting, và cách thực hiện chương trình ntn
                //OnLogOuting ở đây là truy xuất Thuộc tính props của Home dùng JSX
                <Home onLogOuting={this.handleLogOut}/>
            )
        return (
            <div style={{textAlign:'center'}}>
                <h1>Please log in</h1>
                <button onClick={this.handleLogIn}>Log in</button>
            </div>
        )
    }
}
export default AppTest;