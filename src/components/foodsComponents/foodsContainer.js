import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import foods from 'example_foods.json';
import FoodComponent from './foodComponent'; //temp -> fetch (API)

const FoodContainer = ({ fecha }) => {
  return (
    <Fragment>
      <p>{fecha}</p>
      {foods.map(food => {
        return (
          <FoodComponent
            option={food['food'].options}
            key={food.id}
            image={food['food'].image}
          />
        );
      })}
    </Fragment>
  );
};
FoodContainer.propTypes = {
  fecha: PropTypes.string.isRequired
};
export default FoodContainer;
