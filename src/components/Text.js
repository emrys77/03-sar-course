import React from 'react';
import PropTypes from 'prop-types';

function Text(props) {
  return  (
    <div class="text">
      <h2 className="title">{props.title}</h2>
      <div className="content">{props.content}</div>
    </div>
  );
}

Text.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Text;

