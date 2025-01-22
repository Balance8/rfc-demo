import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import LoginPage from '../app/login/page';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

test('login links redirect to dashboard', () => {
  render(<LoginPage />);

  // Get all links and verify they point to dashboard
  const links = screen.getAllByRole('link');
  links.forEach((link) => {
    expect(link.getAttribute('href')).toMatch(/\/dashboard|#/);
  });
});
