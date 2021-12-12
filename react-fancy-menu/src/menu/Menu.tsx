import React, { useCallback, useState, VoidFunctionComponent } from "react";
import "./Menu.css";

export interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface MenuProps {
  menuData: MenuItem[];
}

const Menu: VoidFunctionComponent<MenuProps> = ({ menuData }) => {
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

          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
