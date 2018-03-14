import React, { Component } from 'react';
import axios from 'axios';

var WPjson = React.createClass({

  getInitialState: function() {
    return {
      questions: []
    }
  },

  componentDidMount: function() {
    var _this = this;
    this.serverRequest = 
      axios
        .get("http://staging7.emrysmedia.com/wp-json/wp/v2/questions/?per_page=100")
        .then(function(result) {    
          _this.setState({
            questions: result.data.questions
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
        {/* Render stuff here */<h3> hullo data</h3>}
      </div>
    )
  }
});