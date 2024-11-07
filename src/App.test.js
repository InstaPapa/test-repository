import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  React.act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Fake App Test/i);
  expect(linkElement).toBeInTheDocument();
});