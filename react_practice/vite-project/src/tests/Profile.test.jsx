import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../components/Profile";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    render(<Profile name="Quackie Makers" job="Pizza delivery" birthdate="1993"/>);

  // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("Quackie Makers");
});

test("renders with the correct job ", () => {
  // Setup - rendering the component on the page
    render(<Profile name="Quackie Makers" job="Pizza delivery" birthdate="1993"/>);

  // Assert
    expect(screen.getByText("Pizza delivery")).toHaveTextContent("Pizza delivery");
});