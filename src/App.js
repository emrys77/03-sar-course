import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import styles from '../node_modules/dragula/dist/dragula.css';

//import DataStore from './flux/DataStore.js';

import SARCourse from './components/GetData4.js';

import Question from './components/Question';
import Text from './components/Text';
import LearningCheck from './components/LearningCheck';
import Video from './components/Video';


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
  
 

        //<LearningCheck intro="move stuff around brochacho" options={['me','myself','I']} />

   //     <SARCourse></SARCourse>


    return (
      
      <div className="App">
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Survive Armed Robbery course</h1>
        </header>
        
        <LearningCheck intro="move stuff around brochacho" options={['me','myself','I']} />

        <Question content="Who is most likely to commit an armed robbery?" />

        <Video vimeo_code="182642621" video_intro_text="Video intro text" />

      </div>
 
    );
  }

}



export default App;

