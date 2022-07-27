import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

import Menu from "./Menu";

describe("Menu component", () => {
    it("Displays the menu", () => {
        render(<Menu />);
        expect(screen.getByRole("listbox")).toBeInTheDocument();
    })
    it("Displays the add to cart button", () => {
        render(<Menu />);
        expect(screen.getByRole("button")).toBeInTheDocument();
    })
})