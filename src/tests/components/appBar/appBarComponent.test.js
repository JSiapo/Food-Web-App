import React from 'react';
import { render } from '@testing-library/react';
import AppBar from 'components/appBar';

describe('appBar component', () => {
  it('should compare welcome message', () => {
    const appBar = render(<AppBar usuario='' />);
    expect(appBar).toMatchSnapshot();
  });
  it('should compare today', () => {
    const appBar = render(<AppBar usuario='' />);
    expect(appBar).toMatchSnapshot();
  });
});
