import './App.css';
import React, { Component } from 'react';

let count = localStorage.getItem('timer') ? +localStorage.getItem('timer') : 0;

class App extends Component {
  state = {
    count,
  };

  startTimer = (params) => {
    console.log(this.state.count);
    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
    localStorage.setItem('timer', this.state.count);
  }

  render() {
    localStorage.setItem('timer', this.state.count);
    return (
      <div className="App">
        <button className="btn" onClick={() => this.componentWillUnmount()}>
          Stop
        </button>
        {this.state.count}
        <button onClick={this.startTimer}>Start</button>
        <button onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

export default App;
