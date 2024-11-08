import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  React.act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Это тестовый проект/i);
  expect(linkElement).toBeInTheDocument();
});