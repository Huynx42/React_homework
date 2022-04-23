// const { Component } = require("react");
import { Component } from "react";

export default class StateDemo extends Component {
    constructor() {
        super();
        this.state = { name: "Hoa" };
    }
    changeName = () => {
        this.setState({name:"Long"});
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Click Me</button>
            </div>
        )
    }
};