import React from 'react';
import { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <p>Count {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increase</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrease</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
            </div>
        )
    }
}

export default Counter;