import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    isCounting: false,
  };

  startTimer = () => {
    this.setState({ isCounting: true });

    this.counterID = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };

  stopTimer = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterID);
  };

  resetTimer = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.counterID);
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
    return (
      <div className="App">
        <h1>React</h1>
        <h3>{this.state.count}</h3>
        {!this.state.isCounting ? (
          <button onClick={this.startTimer}>Start</button>
        ) : (
          <button onClick={this.stopTimer}>Stop</button>
        )}
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default App;
