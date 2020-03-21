import React from 'react';
import PropTypes from 'prop-types';
import NavigatorButtons from 'components/appBar/buttonNav/navigatorButtons';
import MessageComponent from 'components/appBar/messageComponent';

const AppBarContainer = ({ usuario }) => {
  return (
    <div>
      <MessageComponent usuario={usuario} />
      <NavigatorButtons />
    </div>
  );
};

AppBarContainer.propTypes = {
  usuario: PropTypes.string.isRequired
};

export default AppBarContainer;
