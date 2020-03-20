//Style silver app in Flutter 📱
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ButtonBar({ dayMonth, dayName }) {
  return (
    <Fragment>
      <button
        className={'btn-date'}
        onClick={() => {
          console.log(dayName);
        }}>
        {dayName}
        <span className={'date-month'}>{dayMonth}</span>
      </button>
    </Fragment>
  );
}

ButtonBar.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayMonth: PropTypes.string.isRequired
};

export default ButtonBar;
