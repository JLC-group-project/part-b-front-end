import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import fetch from "node-fetch";
import Home from "./Home";
// describe("Home component", () => {
//   it("Shows the image url", () => {
//     // render(<Home />);
//     expect(screen.getByRole("image"));
//   });
// });

global.fetch = fetch;

describe("Home component", () => {
  // it("Shows the image url", () => {
  //   // render(<Home />);
  //   expect(screen.getByRole("image"));
  // });
  it("show the heading content", () => {
    render(<Home />);
    expect(screen.getByRole("Heading", { level: 1 })).toHaveTextContent(
      "Welcome to Coder Cafe2.0!"
    );
  });

  it("show the subheading content", () => {
    render(<Home />);
    expect(screen.getByRole("Heading", { level: 2 })).toHaveTextContent(
      "We are a cafe that serves up code related content."
    );
  })
});
