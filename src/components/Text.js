import React from 'react';

function Text(props) {
  return  (
    <h2 className="title">{props.title}</h2>
    <div className="content">{props.content}</div>
  );
}

Text.propTypes = {
  title: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired
};

export default Text;

