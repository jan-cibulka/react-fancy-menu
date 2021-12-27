/* eslint-disable testing-library/no-debugging-utils */
import React from "react";

import { mount, render } from "enzyme";
import { Menu } from "../components/Menu/Menu";
import {
  BACKGROUND_COLOR_DEFAULT,
  demoMenuContent,
  getCssStyleOverrides,
  INDICATOR_COLOR_DEFAULT,
} from "../components/util";

describe("Test menu items", () => {
  test("no items", () => {
    render(<Menu items={[]} />);
  });

  test("demo items", () => {
    const component = mount(<Menu items={demoMenuContent} />);
    demoMenuContent.forEach((item, index) => {
      expect(component.find("li").at(index).find(".text").text()).toBe(
        item.name
      );
    });

    component.unmount();
  });
});

describe("Test color overrides", () => {
  test("no colors", () => {
    let { indicator, navigation } = getCssStyleOverrides(10, true);
    expect(navigation.backgroundColor).toBe(BACKGROUND_COLOR_DEFAULT);
    expect(indicator.backgroundColor).toBe(INDICATOR_COLOR_DEFAULT);
    expect(indicator.borderColor).toBe("transparent");
  });
});
