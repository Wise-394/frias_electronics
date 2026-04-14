import { render, screen } from "@testing-library/react";
import ShopList from "../components/ShopList";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

const mockLaptops = [
  {
    id: 1,
    title: "MacBook Pro",
    images: ["img0.jpg", "img1.jpg"],
  },
];
const mockPhones = [
  {
    id: 2,
    title: "iPhone 15",
    images: ["img0.jpg", "img1.jpg"],
  },
];

describe("ShopList", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn((url) => {
        if (url.includes("laptops")) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ products: mockLaptops }),
          });
        }
        if (url.includes("smartphones")) {
          return Promise.resolve({
            ok: true,
            json: () => Promise.resolve({ products: mockPhones }),
          });
        }
        return Promise.reject(new Error("Unknown URL"));
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.clearAllMocks();
  });

  it("renders the combined products from both API calls", async () => {
    render(<ShopList />);

    const cards = await screen.findAllByTestId("shop-item");

    expect(cards).toHaveLength(2);
    expect(screen.getByText("MacBook Pro")).toBeInTheDocument();
    expect(screen.getByText("iPhone 15")).toBeInTheDocument();
  });

  it("calls fetch exactly twice", async () => {
    render(<ShopList />);

    await screen.findAllByTestId("shop-item");

    expect(vi.mocked(fetch)).toHaveBeenCalledTimes(2);
    expect(vi.mocked(fetch)).toHaveBeenCalledWith(
      expect.stringContaining("laptops"),
    );
    expect(vi.mocked(fetch)).toHaveBeenCalledWith(
      expect.stringContaining("smartphones"),
    );
  });
});
