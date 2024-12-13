import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Добропожаловать в мой проект/i);
  expect(linkElement).toBeInTheDocument();
});
