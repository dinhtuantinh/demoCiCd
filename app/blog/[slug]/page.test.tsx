/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

jest.mock("./page", () => ({
  __esModule: true,
  default: jest.fn(({ params }) => (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>TinhDT</p>
    </>
  )),
}));

it("App Router: Works with dynamic route segments", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByRole("heading")).toHaveTextContent("Slug: Test");
});

it("Tinh test document", () => {
  render(<Page params={{ slug: "Test" }} />);
  expect(screen.getByText("TinhDT")).toBeInTheDocument();
});
