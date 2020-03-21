import React from 'react';
import PropTypes from 'prop-types';

function MessageComponent({ usuario }) {
  return (
    <h1>
      Hello, <span>{usuario}</span>
    </h1>
  );
}

MessageComponent.propTypes = {
  usuario: PropTypes.string.isRequired
};

export default MessageComponent;
