import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import Cart from "./Cart";

describe("Cart component", () => {
    it("Shows the image url", () => {
        render(<Cart />);
        expect(screen.getByRole("image"));
    })
    it("show the heading content", () => {
        render(<Cart />);
        expect(screen.getByRole("Heading", { level: 1 })).toHaveTextContent(
            "Welcome to Coder Cafe2.0!")
    })
    it("shows cart is empty when cart is empty", () => {
        render(<Cart />);
        expect(screen.getByRole("Heading", { level: 1 })).toHaveTextContent("Cart is empty");
    })
})