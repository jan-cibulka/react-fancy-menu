import React, {
  useCallback,
  useEffect,
  useState,
  VoidFunctionComponent,
} from "react";
import "./Menu.scss";

import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";

type MenuItem = {
  name: string;
  icon: JSX.Element;
};

type MenuProps = {
  items: MenuItem[];
  pageColor?: string;
  indicatorColor?: string;
  backgroundColor?: string;
  onChange?: (index: number) => void;
  controlledId?: number;
};

const INDICATOR_COLOR_DEFAULT = "#95a5ff";
const BACKGROUND_COLOR_DEFAULT = "#fff";
const LINK_COLOR_DEFAULT = "#222327";

const getCssStyleOverrides = (
  indicatorColor = "",
  backgroundColor = "",
  pageColor = "",
  itemCount: number
) => {
  const indicatorBackgroundColor = CSS.supports("color", indicatorColor)
    ? indicatorColor
    : INDICATOR_COLOR_DEFAULT;
  const navigationBackgroundColor = CSS.supports("color", backgroundColor)
    ? backgroundColor
    : BACKGROUND_COLOR_DEFAULT;
  const linkColor = CSS.supports("color", pageColor)
    ? pageColor
    : LINK_COLOR_DEFAULT;

  const shadowAndBorderColor = CSS.supports("color", pageColor)
    ? pageColor
    : "transparent";

  return {
    navigation: {
      backgroundColor: navigationBackgroundColor,
      minWidth: itemCount * 70 + 40,
    },
    link: {
      color: linkColor,
    },
    indicator: {
      backgroundColor: indicatorBackgroundColor,
      borderColor: shadowAndBorderColor,
      boxShadow: `0px 0px 3px ${shadowAndBorderColor}, inset 0px 0px 3px ${shadowAndBorderColor}`,
    },
    indicatorBefore: {
      boxShadow: `1px 10px 0 ${shadowAndBorderColor}`,
    },
    indicatorAfter: {
      boxShadow: `-1px 10px 0 ${shadowAndBorderColor}`,
    },
  };
};

const Menu: VoidFunctionComponent<MenuProps> = ({
  items,
  indicatorColor,
  backgroundColor,
  pageColor,
  onChange,
  controlledId,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (controlledId) {
      setActiveIndex(controlledId);
    }
  }, [controlledId]);

  const styles = getCssStyleOverrides(
    indicatorColor,
    backgroundColor,
    pageColor,
    items.length
  );

  const handleItemClick = useCallback(
    (i: number) => {
      if (!controlledId) {
        setActiveIndex(i);
      }
      if (onChange) {
        onChange(i);
      }
    },
    [controlledId, onChange]
  );

  return (
    <div className='navigation' style={styles.navigation}>
      <ul>
        {items.map((item, index) => (
          <li
            className={`item ${index === activeIndex ? "active" : ""}`}
            key={index}
            onClick={() => {
              handleItemClick(index);
            }}>
            <span className='icon'>{item.icon}</span>
            <span className='text'>{item.name}</span>
          </li>
        ))}

        <div
          className='indicator'
          style={{
            ...styles.indicator,
            transform: `translateX(calc(70px * ${activeIndex})`,
          }}>
          <div className='before' style={styles.indicatorBefore} />
          <div className='after' style={styles.indicatorAfter} />
        </div>
      </ul>
    </div>
  );
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
  {
    name: "Friends",
    icon: <IoPeopleOutline />,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
];

export { Menu, MenuItem };
