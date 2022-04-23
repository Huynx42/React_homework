import { Component } from "react";

class StateDemo2 extends Component {
    constructor() {
        super();
        this.state = { number:1 }
    }
    increaseNumber = () => {
        this.setState({number:this.state.number + 1})
    }
    render() {
        return (
            <div className="container">
                <h1>{this.state.number}</h1>
                <button onClick={this.increaseNumber}>Click Me</button>
            </div>
        )
    }
}

export default StateDemo2;