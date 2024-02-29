import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Recipe from "../components/Recipe";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    render(<Recipe title="Peanut butter fingers" type="Snack" duration={1}/>);

  // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Peanut butter fingers");
});

test("renders with the correct title ", () => {
    // Setup - rendering the component on the page
    render(<Recipe title="Peanut butter fingers" type="Snack" duration={1}/>);

    // Assert
    expect(screen.getByText("Snack")).toHaveTextContent("Snack");
});