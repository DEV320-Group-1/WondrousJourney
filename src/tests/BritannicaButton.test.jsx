import { render, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BritannicaButton from '../components/BritannicaButton';

describe('BritannicaButton', () => {
  const mockItem = {
    name: 'Great Wall of China',
    links: {
      britannica: 'https://www.britannica.com/topic/Great-Wall-of-China',
    },
  };

  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  it('renders a button with the text "Britannica"', () => {
    const { container } = render(<BritannicaButton item={mockItem} />);
    expect(within(container).getByText('Britannica')).toBeTruthy();
  });

  it('opens the Britannica link in a new tab when clicked', () => {
    const { container } = render(<BritannicaButton item={mockItem} />);
    within(container).getByText('Britannica').click();
    expect(window.open).toHaveBeenCalledWith(
      'https://www.britannica.com/topic/Great-Wall-of-China',
      '_blank'
    );
  });

  it('does not throw when britannica link is missing', () => {
    const { container } = render(<BritannicaButton item={{ name: 'X', links: {} }} />);
    container.querySelector('button').click();
    expect(window.open).toHaveBeenCalledWith(undefined, '_blank');
  });

  it('does not throw when links is undefined', () => {
    const { container } = render(<BritannicaButton item={{ name: 'X' }} />);
    container.querySelector('button').click();
    expect(window.open).toHaveBeenCalledWith(undefined, '_blank');
  });
});