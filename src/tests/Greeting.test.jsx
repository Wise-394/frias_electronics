import { render, screen } from "@testing-library/react";
import Greeting from "../components/Greeting";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("Greeting", () => {
  it("Renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello world")).toBeInTheDocument;
  });

  it("Renders a cutom greeting", () => {
    render(<Greeting name="rod" />);
    expect(screen.getByText("Hello rod")).toBeInTheDocument;
  });
});
