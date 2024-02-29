import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Gig from "../components/Gig";

test("renders with the correct title ", () => {
  // Setup - rendering the component on the page
    render(<Gig description="Quackie Makers" time="3.30" location="Here"/>);

  // Assert
    expect(screen.getByText("Quackie Makers")).toHaveTextContent("Quackie Makers");
    expect(screen.getByText("3.30")).toHaveTextContent("3.30");
    expect(screen.getByText("Here")).toHaveTextContent("Here");
});