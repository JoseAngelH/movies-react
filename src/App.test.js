import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => {
    return /learn react/i.test(content);
  });
  expect(linkElement).toBeInTheDocument();
});
