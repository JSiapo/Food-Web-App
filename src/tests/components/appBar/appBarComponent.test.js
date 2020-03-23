import React from 'react';
import AppBarContainer from 'components/appBar';
import FoodContainer from 'components/foodsComponents';
import renderer from 'react-test-renderer';

it('should compare structure message from AppBar', () => {
  const appBar = renderer.create(<AppBarContainer username={''} />);
  expect(appBar.toJSON).toMatchSnapshot();
});

it('should compare structure cards from Food Container', () => {
  const appBar = renderer.create(<FoodContainer fecha={'04/03/2020'} />);
  expect(appBar.toJSON).toMatchSnapshot();
});
