import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => {
        console.log('setState complete');
      }
    );
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    console.log('From handle click');
  };

  render() {
    return (
      <div className="App">
        React
        <button onClick={this.handleClick}>{this.state.count}</button>
        {/* так как мы работаем с классовым компонентом, то доступ к handleClick только через this */}
      </div>
    );
  }
}

export default App;
