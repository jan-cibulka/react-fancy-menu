// /* eslint-disable testing-library/no-debugging-utils */
// import React from "react";

// import { mount, render } from "enzyme";
// import  {
//   BACKGROUND_COLOR_DEFAULT,
//   demoMenuContent,
//   getCssStyleOverrides,
//   INDICATOR_COLOR_DEFAULT,
//   LINK_COLOR_DEFAULT,
//   Menu,
// } from "./Menu";

// describe("Test menu items", () => {
//   test("no items", () => {
//     render(<Menu items={[]} />);
//   });

//   test("demo items", () => {
//     const component = mount(<Menu items={demoMenuContent} />);
//     demoMenuContent.forEach((item, index) => {
//       expect(component.find("li").at(index).find(".text").text()).toBe(
//         item.name
//       );
//     });

//     component.unmount();
//   });
// });

// describe("Test color overrides", () => {
//   test("no colors", () => {
//     let { indicator, navigation, link } = getCssStyleOverrides(10);
//     expect(navigation.backgroundColor).toBe(BACKGROUND_COLOR_DEFAULT);
//     expect(link.color).toBe(LINK_COLOR_DEFAULT);
//     expect(indicator.backgroundColor).toBe(INDICATOR_COLOR_DEFAULT);
//     expect(indicator.borderColor).toBe("transparent");
//   });
// });

// describe("Test controlled id and callback", () => {
//   // const doneChange = jest.fn();
//   // const view = mount(<Menu items={demoMenuContent} onChange={doneChange} />);
// });
