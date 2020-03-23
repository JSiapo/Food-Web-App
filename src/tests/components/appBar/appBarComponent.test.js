import React from 'react';
import AppBarContainer from 'components/appBar';
import renderer from 'react-test-renderer';

it('should compare structure message from AppBar', () => {
  const appBar = renderer.create(<AppBarContainer username={''} />);
  expect(appBar.toJSON).toMatchSnapshot();
});
