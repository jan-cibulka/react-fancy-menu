import React, {
  useCallback,
  useEffect,
  useState,
  VoidFunctionComponent,
} from "react";

import { MenuItem } from "../../MenuItem";
import { getCssStyleOverrides } from "../util";

import "../../styles/Menu.scss";
import "../../styles/MenuBottom.scss";
import "../../styles/MenuTop.scss";
import "../../styles/MenuDense.scss";
// import "../../styles/MenuNormalSize.scss";

type MenuProps = {
  items: MenuItem[];
  pageColor?: string;
  indicatorColor?: string;
  backgroundColor?: string;
  onChange?: (index: number) => void;
  controlledId?: number;
  isBottom?: boolean;
  dense?: boolean;
};

const Menu: VoidFunctionComponent<MenuProps> = ({
  items,
  indicatorColor,
  backgroundColor,
  pageColor,
  onChange,
  controlledId,
  isBottom,
  dense,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (controlledId) {
      setActiveIndex(controlledId);
    }
  }, [controlledId]);

  const styles = getCssStyleOverrides(
    items.length,
    isBottom ? true : false,
    dense ? true : false,
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
    <div
      className={`menu 
      ${isBottom ? "menu-bottom" : "menu-top"} 
      ${dense ? "menu-dense" : ""}`}
      style={styles.navigation}>
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
            transform: `translateX(calc(${
              dense ? "40" : "70"
            }px * ${activeIndex} - ${dense ? "15" : "0"}px)`,
          }}>
          <div className='before' style={styles.indicatorBefore} />
          <div className='after' style={styles.indicatorAfter} />
        </div>
      </ul>
    </div>
  );
};

export { Menu };
