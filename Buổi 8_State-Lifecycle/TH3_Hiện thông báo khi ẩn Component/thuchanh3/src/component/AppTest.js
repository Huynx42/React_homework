import {Component} from 'react';

class Hello extends Component {
    componentWillUnmount() {
        alert("Component will unmouting");
    }
    render() {
        return (
            <h1>Hello world!!!</h1>
        )
    }
}
export default class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : true
        }
    }
    deleteComponent = () => {
        this.setState({value:false})
    }
    // Cách 1: Delete text, giữ lại button
    render() {
        let comp;
        if (this.state.value) {
            comp = <Hello />
        }
        return (
            <div style={{textAlign:"center"}}>
                {comp}
                <button onClick={this.deleteComponent}>Delete Component</button>
            </div>
        )
    }
    // Cách 2: delete hết
    // render() {
    //     if (this.state.value) {
    //         return (
    //             <div style={{textAlign:"center"}}>
    //                 <h1>Hellllllll</h1>
    //                 <button onClick={this.deleteComponent}>Delete Component</button>
    //             </div>
    //         )
    //     }
    // }
}