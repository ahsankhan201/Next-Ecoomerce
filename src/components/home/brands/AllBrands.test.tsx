import React from "react";
import { render } from "@testing-library/react";
import AllBrands from "./AllBrands";
import "@testing-library/jest-dom/extend-expect";

test("renders our brands section heading", () => {
  const { getByText } = render(<AllBrands />);
  const headingElement = getByText(/our brands/i);
  expect(headingElement).toBeInTheDocument();
});

test("renders all brands images", () => {
  const { getAllByRole } = render(<AllBrands />);
  const images = getAllByRole("img");
  console.log(images.length);
  expect(images.length).toBe(3);
});

test("renders spotlight section heading", () => {
  const { getByText } = render(<AllBrands />);
  console.log(getByText);
  const headingElement = getByText(/#spotlight/i);
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toBeVisible();
});

test("renders spotlight cards", () => {
  const { getAllByTestId } = render(<AllBrands />);
  const cards = getAllByTestId("spotlight-card");
  console.log("cards", cards.length);
  expect(cards.length).toBeGreaterThan(0);
});
