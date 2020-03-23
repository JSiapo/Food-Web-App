import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import style from 'components/foodsComponents/foodComponent.module.css';

const FoodComponent = ({ option, image }) => {
  return (
    <Fragment>
      <div className={style.card}>
        <img src={image} alt={option} className={style.image} />
        <p className={style.option}>{option}</p>
      </div>
    </Fragment>
  );
};

FoodComponent.propTypes = {
  option: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default FoodComponent;
