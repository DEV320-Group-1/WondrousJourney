import { render, within } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Item from '../components/Item';

vi.mock('../components/TripAdvisorButton', () => ({
  default: () => <button>TripAdvisor</button>,
}));
vi.mock('../components/BritannicaButton', () => ({
  default: () => <button>Britannica</button>,
}));

describe('Item', () => {
  const mockItem = {
    name: 'Machu Picchu',
    summary: 'An Incan citadel set high in the Andes Mountains.',
    categories: ['Ancient', 'South America'],
    links: {
      images: ['https://example.com/machu-picchu.jpg'],
    },
  };

  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  it('renders the wonder name', () => {
    const { container } = render(<Item item={mockItem} />);
    expect(container.textContent).toContain('Machu Picchu');
  });

  it('renders the summary', () => {
    const { container } = render(<Item item={mockItem} />);
    expect(container.textContent).toContain('An Incan citadel set high in the Andes Mountains.');
  });

  it('renders categories joined by a comma', () => {
    const { container } = render(<Item item={mockItem} />);
    expect(container.textContent).toContain('Ancient, South America');
  });

  it('renders the image with correct src and alt', () => {
    const { container } = render(<Item item={mockItem} />);
    const img = container.querySelector('img');
    expect(img.alt).toBe('Machu Picchu');
    expect(img.src).toBe('https://example.com/machu-picchu.jpg');
  });

  it('renders TripAdvisor and Britannica buttons', () => {
    const { container } = render(<Item item={mockItem} />);
    expect(container.textContent).toContain('TripAdvisor');
    expect(container.textContent).toContain('Britannica');
  });

  it('renders without crashing when optional fields are missing', () => {
    const { container } = render(<Item item={{ name: 'Mystery Wonder' }} />);
    expect(container.textContent).toContain('Mystery Wonder');
  });
});