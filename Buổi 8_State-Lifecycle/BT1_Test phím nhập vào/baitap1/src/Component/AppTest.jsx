import React,{Component} from 'react';

class AppTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keypressed:''
        }
    }

    handleKey = (e) => {
        this.setState({keypressed:e.key})
    }

    render() {
        return(
            <div style={{textAlign:"center"}}>
                <h1>Key press is: {this.state.keypressed}</h1>
                <input type='text' onKeyDown={(e)=>this.handleKey(e)}></input>
            </div>
        )
    }
}
export default AppTest;