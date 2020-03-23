import React from 'react';
import PropTypes from 'prop-types';
import NavigatorButtons from 'components/appBar/buttonNav/navigatorButtons';
import MessageComponent from 'components/appBar/messageComponent';

/**
 *
 * @param {username} Object contendrá la info del usuario
 */

const AppBarContainer = ({ username }) => {
  return (
    <div>
      <MessageComponent username={username} />
      <NavigatorButtons />
    </div>
  );
};

AppBarContainer.propTypes = {
  username: PropTypes.string.isRequired
};

export default AppBarContainer;
