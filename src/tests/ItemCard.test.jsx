import { render, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ItemCard from '../components/ItemCard';

describe('ItemCard', () => {
  const mockItem = {
    name: 'Petra',
    location: 'Jordan',
    time_period: 'Nabataean Kingdom',
    build_year: '312 BC',
    summary: 'A famous archaeological city in southern Jordan.',
    categories: ['Ancient', 'Middle East'],
    links: {
      images: ['https://example.com/petra.jpg'],
    },
  };

  it('renders the wonder name', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('Petra');
  });

  it('renders the location', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('Jordan');
  });

  it('renders the time period', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('Nabataean Kingdom');
  });

  it('renders the build year', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('312 BC');
  });

  it('renders categories joined by a comma', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('Ancient, Middle East');
  });

  it('renders the summary', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    expect(container.textContent).toContain('A famous archaeological city in southern Jordan.');
  });

  it('renders the image with correct src and alt text', () => {
    const { container } = render(<ItemCard item={mockItem} />);
    const img = container.querySelector('img');
    expect(img.alt).toBe('Petra');
    expect(img.src).toBe('https://example.com/petra.jpg');
  });

  it('renders without crashing when optional fields are missing', () => {
    const { container } = render(<ItemCard item={{ name: 'Unknown Wonder' }} />);
    expect(container.textContent).toContain('Unknown Wonder');
  });
});