import './App.css';
import React, { Component } from 'react';

let count = localStorage.getItem('timer') ? +localStorage.getItem('timer') : 0;

class App extends Component {
  state = {
    count,
  };

  startTimer = () => {
    console.log(this.state.count);
    this.timerId = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.timerId);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
    localStorage.setItem('timer', this.state.count);
  };

  render() {
    localStorage.setItem('timer', this.state.count);
    return (
      <div className="App">
        <button className="btn" onClick={this.stopTimer}>
          Stop
        </button>
        {this.state.count}
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
