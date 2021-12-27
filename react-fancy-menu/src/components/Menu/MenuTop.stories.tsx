import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Menu } from "./Menu";
import { demoMenuContent } from "../util";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Menu/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const OrangeTemplate: ComponentStory<typeof Menu> = (args) => (
  <div
    style={{
      backgroundColor: "#4A3F35",
      display: "flex",
      flexDirection: "column",
      height: "1000px",
      color: "#2F2519",
    }}>
    <Menu {...args} />
  </div>
);

const PastelTemplate: ComponentStory<typeof Menu> = (args) => (
  <div
    style={{
      backgroundColor: "#FFBD69",
      display: "flex",
      flexDirection: "column",
      height: "1000px",
      color: "black",
    }}>
    <Menu {...args} />
  </div>
);

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const LightTemplate: ComponentStory<typeof Menu> = (args) => (
  <div
    style={{
      backgroundColor: "#EEEEEE",
      display: "flex",
      flexDirection: "column",
      height: "1000px",
      color: "#2F2519",
    }}>
    <Menu {...args} />
  </div>
);

export const IceTheme = LightTemplate.bind({});
export const OrangeTheme = OrangeTemplate.bind({});
export const PastelTheme = PastelTemplate.bind({});
export const DefaultOnLight = LightTemplate.bind({});

IceTheme.args = {
  items: demoMenuContent,
  pageColor: "#EEEEEE",
  backgroundColor: "#00C1D4",
  indicatorColor: "#512D6D",
};

OrangeTheme.args = {
  items: demoMenuContent,
  pageColor: "#4A3F35",
  backgroundColor: "#FA7D09",
  indicatorColor: "#FF4301",
};

PastelTheme.args = {
  items: demoMenuContent,
  pageColor: "#FFBD69",
  backgroundColor: "#543864",
  indicatorColor: "#FF6363",
};

DefaultOnLight.args = {
  items: demoMenuContent,
};
