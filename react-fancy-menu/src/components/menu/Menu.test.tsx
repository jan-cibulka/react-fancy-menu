import React from "react";
import { render, screen } from "@testing-library/react";
import { demoMenuContent, Menu } from "./Menu";
import { assert } from "console";

describe("Test menu items", () => {
  test("render menu", () => {
    render(<Menu items={[]} />);
    const menuElement = screen.getByText(demoMenuContent[0].name);
    expect(menuElement.)
  });
  test("render menu", () => {
    render(<Menu items={demoMenuContent} />);
    const menuElement = screen.getByText(demoMenuContent[0].name);
  });
});
describe("Test color overrides", () => {});
