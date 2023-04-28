import React from "react";
import MainBar from "./MainBar";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("MainBar component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<MainBar />);
    const title = getByText("+92 3001223322");
    expect(title).toBeInTheDocument();
  });
});




