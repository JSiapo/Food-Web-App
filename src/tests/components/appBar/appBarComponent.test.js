import React from 'react';
import { render } from '@testing-library/react';
import AppBar from 'components/appBar';
import { daysObject } from 'utils/dateUtil';

describe('appBar component', () => {
  it('should compare welcome message', () => {
    const appBar = render(<AppBar usuario='' />);
    expect(appBar).toMatchSnapshot('Hello ');
  });
  it('should compare today', () => {
    const appBar = render(<AppBar usuario='' />);
    expect(appBar).toMatchSnapshot(`
    ${daysObject.daysName[0]}
    ${daysObject.daysMonth[0]}
    `);
  });
});
