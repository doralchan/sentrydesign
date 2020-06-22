import React from 'react';
import { render } from '@testing-library/react';
import Preview from './preview';

test('renders learn react link', () => {
  const { getByText } = render(<Preview />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
