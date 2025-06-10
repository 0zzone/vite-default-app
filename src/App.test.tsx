import { render, screen } from '@testing-library/react';
import App from './App';

describe('Hello component', () => {
  it('renders the text correctly', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});