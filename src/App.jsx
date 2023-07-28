import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props); // если пропсы будут, то передадим в родительский клас
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
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
