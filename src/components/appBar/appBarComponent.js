import React from 'react';
import PropoTypes from 'prop-types';

const AppBar = ({ usuario }) => (
  <React.Fragment>
    <p>Hello {usuario}</p>
  </React.Fragment>
);
AppBar.protoTypes = {
  usuario: PropoTypes.string
};

export default AppBar;
