import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import DataStore from './flux/DataStore.js';

import GetData from './components/GetData3.js';

import Question from './components/Question';
import Text from './components/Text';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     type: '',
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     correct: '',
     result: ''
    };
  }

  render() {
 //   let allPages = DataStore.getAllPages();
 //   console.log(allPages);

 //   let allQuestions = DataStore.getAllQuestions();
 //   console.log(allQuestions);
        
    return (
      
      <div className="App">
        <div className="DataHolder"></div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Survive Armed Robbery course</h1>
        </header>
        <Question content="Who is most likely to commit an armed robbery?" />
      </div>
 
    );
  }

}

GetData();

export default App;

