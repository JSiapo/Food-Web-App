import React from 'react';
// import { render } from '@testing-library/react';
import AppBarContainer from 'components/appBar';
import renderer from 'react-test-renderer';

it('should compare structure message', () => {
  const appBar = renderer.create(<AppBarContainer usuario={'José'} />);
  expect(appBar.toJSON).toMatchSnapshot();
});
