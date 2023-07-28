import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = (params) => {
    params === 'plus'
      ? this.setState({ count: this.state.count + 1 })
      : this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="App">
        React
        <button onClick={() => this.handleClick('minus')}>-</button>
        {this.state.count}
        <button onClick={() => this.handleClick('plus')}>+</button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}

export default App;
