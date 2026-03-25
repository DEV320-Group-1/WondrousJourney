import { render, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TripAdvisorButton from '../components/TripAdvisorButton';

describe('TripAdvisorButton', () => {
  const mockItem = {
    name: 'Colosseum',
    links: {
      trip_advisor: 'https://www.tripadvisor.com/Attraction_Review-Colosseum',
    },
  };

  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  it('renders a button with the text "TripAdvisor"', () => {
    const { container } = render(<TripAdvisorButton item={mockItem} />);
    expect(within(container).getByText('TripAdvisor')).toBeTruthy();
  });

  it('opens the TripAdvisor link in a new tab when clicked', () => {
    const { container } = render(<TripAdvisorButton item={mockItem} />);
    within(container).getByText('TripAdvisor').click();
    expect(window.open).toHaveBeenCalledWith(
      'https://www.tripadvisor.com/Attraction_Review-Colosseum',
      '_blank'
    );
  });

  it('does not throw when trip_advisor link is missing', () => {
    const { container } = render(<TripAdvisorButton item={{ name: 'X', links: {} }} />);
    container.querySelector('button').click();
    expect(window.open).toHaveBeenCalledWith(undefined, '_blank');
  });

  it('does not throw when links is undefined', () => {
    const { container } = render(<TripAdvisorButton item={{ name: 'X' }} />);
    container.querySelector('button').click();
    expect(window.open).toHaveBeenCalledWith(undefined, '_blank');
  });
});