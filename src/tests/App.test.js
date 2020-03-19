import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('should compare structure with snapshot', () => {
    // const home = renderer.create(<App />);
    const home = render(<App />);
    expect(home).toMatchSnapshot('Hello World');
  });
});
