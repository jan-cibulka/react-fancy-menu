import React, { useCallback, useState, VoidFunctionComponent } from "react";
import "./MenuFlipped.scss";

export interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface MenuProps {
  menuData: MenuItem[];
}

const MenuFlipped: VoidFunctionComponent<MenuProps> = ({ menuData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <div className='root'>
      <div className='navigation'>
        <ul>
          {menuData.map((item, index) => (
            <li
              className={`item ${index === activeIndex && "active"}`}
              key={index}
              onClick={() => {
                handleItemClick(index);
              }}>
              <a href='#'>
                <span className='icon'>{item.icon}</span>
                <span className='text'>{item.name}</span>
              </a>
            </li>
          ))}

          <div
            className='indicator'
            style={{
              transform: `translateX(calc(70px * ${activeIndex})`,
            }}
          />
        </ul>
      </div>
    </div>
  );
};

export default MenuFlipped;
