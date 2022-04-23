import React,{Component} from 'react';

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