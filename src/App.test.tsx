import { render, screen } from '@testing-library/react';
import App from './App';
import { contentData } from './contentData';

// react-markdown is ESM-only, which CRA's Jest config doesn't transform.
jest.mock('react-markdown', () => ({ children }: { children: string }) => children);

test('renders a row for each content section', () => {
  render(<App />);
  for (const content of contentData) {
    expect(screen.getByText(content.title)).toBeInTheDocument();
  }
});
