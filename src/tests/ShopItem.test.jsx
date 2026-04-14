import { render, screen } from "@testing-library/react";
import ShopItem from "../components/ShopItem";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

describe("Shop Item", () => {
  it("starts with 1 quantity", () => {
    render(<ShopItem />);
    const count = screen.getByTestId("count");
    expect(count.textContent).toContain("1");
  });

  it("increments count by 1", async () => {
    const user = userEvent.setup();
    render(<ShopItem />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const count = screen.getByTestId("count");
    await user.click(incrementButton);
    expect(count.textContent).toContain("2");
  });

  it("cannot go below 1", async () => {
    const user = userEvent.setup();
    render(<ShopItem />);
    const decrementButton = screen.getByRole("button", { name: "-" });
    const count = screen.getByTestId("count");
    await user.click(decrementButton);
    expect(count.textContent).toContain("1");
  });

  it("decrements when count is larger than 1", async () => {
    const user = userEvent.setup();
    render(<ShopItem />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    const count = screen.getByTestId("count");
    await user.click(incrementButton);
    await user.click(incrementButton);

    const decrementButton = screen.getByRole("button", { name: "-" });
    await user.click(decrementButton);
    expect(count.textContent).toContain("2");
  });

  it("displays the props", () => {
    render(<ShopItem title="phone" price="50" image="image.png" />);

    expect(screen.getByText("phone")).toBeInTheDocument();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "image.png");
  });

  it("shows price with symbol", () => {
    render(<ShopItem title="phone" price="50" image="image.png" />);

    const price = screen.getByTestId("price");
    expect(price.textContent).toBe("$50");
  });
});
