import { Component } from "react";

export default class LifeCycleTest extends Component {
    constructor() {
        super();
        this.state = {status:"OK"}
    }
    componentWillMount(){
        console.log("Component will mount");
    }
    componentDidMount(){
        console.log("Component did mount");
    }
    render() {
        console.log("Component render");
        return (
            <h1>Hello</h1>
        )
    }
}