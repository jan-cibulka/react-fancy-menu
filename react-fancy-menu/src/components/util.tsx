import React from "react";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";

import { MenuItem } from "../MenuItem";

export const INDICATOR_COLOR_DEFAULT = "#C84B31"; //brick
export const BACKGROUND_COLOR_DEFAULT = "#2D4263"; //navy
export const TEXT_COLOR_DEFAULT = "#777"; //gray

export const getCssStyleOverrides = (
  itemCount: number,
  isBottom: boolean,
  isSmall: boolean,
  indicatorColor = "",
  backgroundColor = "",
  pageColor = ""
) => {
  const cssSupportsAvailable = !!CSS.supports;

  const indicatorBackgroundColor =
    cssSupportsAvailable && CSS.supports("color", indicatorColor)
      ? indicatorColor
      : INDICATOR_COLOR_DEFAULT;

  const navigationBackgroundColor =
    cssSupportsAvailable && CSS.supports("color", backgroundColor)
      ? backgroundColor
      : BACKGROUND_COLOR_DEFAULT;

  const shadowAndBorderColor =
    cssSupportsAvailable && CSS.supports("color", pageColor)
      ? pageColor
      : "transparent";

  return {
    navigation: {
      backgroundColor: navigationBackgroundColor,
      minWidth: isSmall ? itemCount * 40 + 20 : itemCount * 70 + 40,
    },
    indicator: {
      backgroundColor: indicatorBackgroundColor,
      borderColor: shadowAndBorderColor,
      boxShadow: `0px 0px 3px ${shadowAndBorderColor}, inset 0px 0px 3px ${shadowAndBorderColor}`,
    },
    indicatorBefore: {
      boxShadow: !isBottom
        ? `1px 10px 0 ${shadowAndBorderColor}`
        : `1px -10px 0 ${shadowAndBorderColor}`,
    },
    indicatorAfter: {
      boxShadow: !isBottom
        ? `-1px 10px 0 ${shadowAndBorderColor}`
        : `-1px -10px 0 ${shadowAndBorderColor}`,
    },
  };
};

export const demoMenuContent: MenuItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
  },
  {
    name: "Map",
    icon: <IoLocationOutline />,
  },
  {
    name: "Profile",
    icon: <IoPersonOutline />,
  },
];
