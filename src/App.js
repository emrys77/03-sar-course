import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SARCourse from './components/GetData4.js';

import Question from './components/Question';
import Text from './components/Text/Text';
import LearningCheck from './components/LearningCheck/LearningCheck';
import MultipleChoice from './components/MultipleChoice/MultipleChoice';
import Video from './components/Video/Video';


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

    return (
      
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Survive Armed Robbery course</h1>
        </header>
        
        <SARCourse />
          
        <MultipleChoice question="who is the best?" options={['me','myself','I','Emrys']} />

        <LearningCheck intro="move stuff around brochacho" box1hd="Soft Targets" box2hd="Hard Targets" options={['me','move me', 'change the world', 'myself','I']} />

        <Text content="Who is most likely to commit an armed robbery?" />

        <Video vimeo_code="182642621" video_intro_text="Video intro text" />

      </div>
 
    );
  }

}

export default App;