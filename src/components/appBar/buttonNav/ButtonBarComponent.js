//Style silver app in Flutter 📱
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from 'components/appBar/buttonNav/buttonNav.module.css';

/**
 * Componente Botón con fecha y día e.g. LUN 18
 * @param {dayMonth} String Día del mes e.g. 18
 * @param {dayName} String Nombre del día e.g. LUN (referencia a Lunes)
 */

const ButtonBar = ({ dayMonth, dayName }) => {
  return (
    <Fragment>
      <button
        className={[style['btn-date']]}
        onClick={() => {
          console.log(dayName);
        }}>
        {dayName}
        <span className={style['date-month']}>{dayMonth}</span>
      </button>
    </Fragment>
  );
};

ButtonBar.propTypes = {
  dayName: PropTypes.string.isRequired,
  dayMonth: PropTypes.string.isRequired
};

export default ButtonBar;
