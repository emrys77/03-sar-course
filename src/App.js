import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Survive Armed Robbery course</h1>
        </header>
        <Question content="Who is most likely to commit an armed robbery?" />
      </div>
    );
  }
}

export default App;
