import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import dragula from 'react-dragula';

var itemsList = items.map(function(item){
    return <li>{item}</li>;
});

var App = React.createClass({
    options: { props.options };


    render: function () {
        return  <div className="LearningCheck"><p>{ props.intro }</p><ul className="learning_check">{ itemsList }</ul></div>;
    },
    componentDidMount: function () {
      var container = React.findDOMNode(this);
      dragula([container]);
    }
  });
  React.render(<App />, document.getElementById('examples'));

LearningCheck.propTypes = {
    intro: PropTypes.string.isRequired,
    options: PropTypes.array
  }

  export default LearningCheck;
