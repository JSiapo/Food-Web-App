import React from 'react';
import PropTypes from 'prop-types';

const MessageComponent = ({ username }) => {
  return (
    <h1>
      Hello, <span>{username}</span>
    </h1>
  );
};

MessageComponent.propTypes = {
  username: PropTypes.string.isRequired
};

export default MessageComponent;
