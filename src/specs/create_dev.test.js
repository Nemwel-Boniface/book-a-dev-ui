import { render, screen } from '@testing-library/react';
import CreateDev from '../pages/create_dev';

test('renders learn react link', () => {
  render(<CreateDev />);
  const titleElement = screen.getByText(/Create a new developer/i);
  expect(titleElement).toBeInTheDocument();
});
