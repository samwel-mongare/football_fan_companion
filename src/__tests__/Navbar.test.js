import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('The navbar ', () => {
  it('should render the heading text', () => {
    render(<Navbar />);
    const headingElement = screen.getByText(/Football Fan Companion/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('should render the menu items', () => {
    render(<Navbar />);
    const navElement = screen.getByTestId('hamburger');
    expect(navElement).toBeVisible();
  });

  it('should render the hambuger button on mobile view', () => {
    render(<Navbar />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeVisible();
  });
});
