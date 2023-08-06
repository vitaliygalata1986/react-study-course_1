import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
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

  componentDidUpdate() {
    localStorage.setItem('timer', this.state.count);
  }

  componentDidMount() {
    // один раз, как мы смонтировали приложение, нам нужно вытащить значение из localStorage
    const userCount = localStorage.getItem('timer');
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    console.log(this.state.count);
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
