import React,{Component} from 'react';

//onLogOuting ở đây: là 1 thuộc tính JSX của props thuộc this=Home 
class Home extends Component {
    render() {
        return (
            <div style={{textAlign:'center'}}>
                <h1>Welcome to the Website</h1>
                <button onClick={this.props.onLogOuting}>Log out</button>
            </div>
        )
    }
}

export default Home;