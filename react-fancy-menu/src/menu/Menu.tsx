import React, {
  useCallback,
  useEffect,
  useState,
  VoidFunctionComponent,
} from "react";
import "./Menu.scss";

export interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface MenuProps {
  menuData: MenuItem[];
  pageColor?: string;
  indicatorColor?: string;
  backgroundColor?: string;
  onChange?: (index: number) => void;
  controlledId?: number;
}

const getCssStyleOverrides = (
  indicatorColor: string | undefined,
  backgroundColor: string | undefined,
  pageColor: string | undefined
) => {
  const INDICATOR_COLOR_DEFAULT = "#95a5ff";
  const BACKGROUND_COLOR_DEFAULT = "#fff";
  const PAGE_COLOR_DEFUALT = "#222327";

  return {
    navigation: {
      backgroundColor: backgroundColor ?? BACKGROUND_COLOR_DEFAULT,
    },
    link: {
      color: pageColor ?? PAGE_COLOR_DEFUALT,
    },
    indicator: {
      backgroundColor: indicatorColor ?? INDICATOR_COLOR_DEFAULT,
      borderColor: pageColor ?? PAGE_COLOR_DEFUALT,
      boxShadow: `0px 0px 3px ${
        pageColor ?? PAGE_COLOR_DEFUALT
      }, inset 0px 0px 3px ${pageColor ?? PAGE_COLOR_DEFUALT}`,
    },
    indicatorBefore: {
      boxShadow: `1px 10px 0 ${pageColor ?? PAGE_COLOR_DEFUALT}`,
    },
    indicatorAfter: {
      boxShadow: `-1px 10px 0 ${pageColor ?? PAGE_COLOR_DEFUALT}`,
    },
  };
};

const Menu: VoidFunctionComponent<MenuProps> = ({
  menuData,
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
    pageColor
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
        {menuData.map((item, index) => (
          <li
            className={`item ${index === activeIndex && "active"}`}
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

export default Menu;
