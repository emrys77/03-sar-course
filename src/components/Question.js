import React from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

import ReactDOM from 'react-dom';

import dragula from 'react-dragula';

//var dragula = require('react-dragula');


function Info(props) {
  return (
    <div className="text">
      <h2 className="title">{props.title}</h2>
      <div className="content">{props.content}</div>
    </div>
  );
}

function MultipleChoice(props) {

}
function PopUp(props) {
 
}



Info.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

MultipleChoice.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array,
  correct: PropTypes.string.isRequired
}
PopUp.propTypes = {
  intro: PropTypes.string.isRequired,
  box1: PropTypes.string.isRequired,
  box2: PropTypes.string.isRequired
}


function Question(props) {
  return  (
    <h2 className="question">{props.content}</h2>
  );
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;

