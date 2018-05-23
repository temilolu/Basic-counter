import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 50
    };

    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleIncrement() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handleDecrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  handleReset() {
    this.setState({
      count: 0
    });
  }


  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Basic counter</h1>
        </header>


        <section>
          <h1>Counter: {count}</h1>

          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.handleReset}>reset</button>

        </section>
      </div>
    );
  }
}

export default App;
