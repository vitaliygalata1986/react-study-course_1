import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  };

  handleClickPlus = () => {
    // this.setState(
    //   (prevState) => ({ count: prevState.count + 1 }),
    //   () => {
    //     console.log('setState complete');
    //   }
    // );
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));

    this.setState({ count: this.state.count + 1 });

    console.log('From handle click');
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
      </div>
    );
  }
}

export default App;
