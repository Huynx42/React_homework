import { Component } from "react";

class Greeting extends Component {
    render(){
        return (
            <div>
                <p>hello {this.props.name}</p>
                <br></br>
                <p>hello {this.props.age}</p>
            </div>
        );
    };
}

export default Greeting;