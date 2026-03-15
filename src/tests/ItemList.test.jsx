import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import ItemList from "../ItemList";

test("renders Great Pyramid of Giza", () => {
  render(<ItemList />);
  expect(screen.getAllByText(/Great Pyramid of Giza/i).length).toBeGreaterThan(0);
});

test("renders Taj Mahal", () => {
  render(<ItemList />);
  expect(screen.getAllByText(/Taj Mahal/i).length).toBeGreaterThan(0);
});

test("renders Christ the Redeemer", () => {
  render(<ItemList />);
  expect(screen.getAllByText(/Christ the Redeemer/i).length).toBeGreaterThan(0);
});