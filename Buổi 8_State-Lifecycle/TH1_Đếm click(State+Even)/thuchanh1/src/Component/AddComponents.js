import React from 'react';
import { Component } from 'react';

export default class AddComponents extends Component {
    constructor(props) {
        super(props);
        this.state = { number:0 };
    }
    increment = () => {
        this.setState({number:this.state.number + 1});
    }
    decrease = () => {
        this.setState({number:this.state.number - 1});
    }
    render(){
        return (
            <div style={{textAlign:"center",padding:30}}>
                {/* Cách 1 */}
                <button onClick={(e) => this.increment(e)}>Increment-Tăng</button>
                {/* Cách 2 */}
                <button onClick={() => this.setState({number:this.state.number + 1})}>Increment-Tăng</button>
                <span style={{padding:10}}>{this.state.number}</span>
                <button onClick={this.decrease}>Decrease-Giảm</button>
            </div>
        )
    }
}