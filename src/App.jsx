import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
    posts: [],
    loading: true,
    comments: [],
  };

  handleClick = (params) => {
    params === 'plus'
      ? this.setState({ count: this.state.count + 1 })
      : this.setState({ count: this.state.count - 1 });
  };

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data, loading: false }));

    this.timerId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=2')
        .then((response) => response.json())
        .then((data) => this.setState({ comments: data }));
    }, 3000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // размонитируем приложение - сделаем отмену таймера
    clearInterval(this.timerId);
  }

  render() {
    console.log('render', this.state.count);
    return (
      <div className="App">
        React
        <button onClick={() => this.handleClick('minus')}>-</button>
        {this.state.count}
        <button onClick={() => this.handleClick('plus')}>+</button>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
        <button className="btn" onClick={() => this.componentWillUnmount()}>
          Отмена интервала
        </button>
        {this.state.loading ? (
          <h3>Loading...</h3>
        ) : (
          <h3>{this.state.posts.length} was loaded</h3>
        )}
      </div>
    );
  }
}

export default App;
