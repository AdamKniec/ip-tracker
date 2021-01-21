import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the app title correctly", () => {
  render(<App />);
  const linkElement = screen.getByText(/IP Address Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
