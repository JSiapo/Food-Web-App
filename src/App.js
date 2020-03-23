import React from 'react';
import AppBarContainer from 'components/appBar';
import FoodContainer from 'components/foodsComponents';

const App = () => {
  return (
    <React.Fragment>
      <AppBarContainer username={'José'} />
      <FoodContainer fecha={'04/03/2020'} />
    </React.Fragment>
  );
};

export default App;
