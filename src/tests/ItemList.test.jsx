import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { WondersContext } from "../context/WondersContext";
import ItemList from "../ItemList";

const mockWonders = [
  { id: 1, name: "Great Pyramid of Giza", categories: ["Ancient"], summary: "An ancient wonder.", links: { images: [] } },
  { id: 2, name: "Taj Mahal", categories: ["Modern"], summary: "A beautiful mausoleum.", links: { images: [] } },
  { id: 3, name: "Christ the Redeemer", categories: ["Modern"], summary: "A famous statue.", links: { images: [] } },
];

function renderWithContext() {
  return render(
    <WondersContext.Provider value={{ wonders: mockWonders }}>
      <ItemList />
    </WondersContext.Provider>
  );
}

test("renders Great Pyramid of Giza", () => {
  renderWithContext();
  expect(screen.getAllByText(/Great Pyramid of Giza/i).length).toBeGreaterThan(0);
});

test("renders Taj Mahal", () => {
  renderWithContext();
  expect(screen.getAllByText(/Taj Mahal/i).length).toBeGreaterThan(0);
});

test("renders Christ the Redeemer", () => {
  renderWithContext();
  expect(screen.getAllByText(/Christ the Redeemer/i).length).toBeGreaterThan(0);
});