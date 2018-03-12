  import React from 'react';
  import Text from '../components/Text';
  import Question from '../components/Question';
  import QuestionCount from '../components/QuestionCount';
  import AnswerOption from '../components/AnswerOption';

  function Course(props) {
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    return (
       <div className="course">
         <QuestionCount
           counter={props.questionId}
           total={props.questionTotal}
         />

         // - - - -   conditional here?   - - - - 
         if we are a :
           text
           video
           sortable list (learning check)
           multiple choice
           pop up info boxes
        //

         <Question content={props.question} />
         <ul className="answerOptions">
           {props.answerOptions.map(renderAnswerOptions)}
         </ul>
       </div>
    );
  }

  Course.propTypes = {
    answer: React.PropTypes.string.isRequired,
    answerOptions: React.PropTypes.array.isRequired,
    counter: React.PropTypes.number.isRequired,
    question: React.PropTypes.string.isRequired,
    questionId: React.PropTypes.number.isRequired,
    questionTotal: React.PropTypes.number.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
  };

  export default Course;