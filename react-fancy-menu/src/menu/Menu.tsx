import React, { useCallback, useState, VoidFunctionComponent } from "react";
import styled from "styled-components";

export interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface MenuProps {
  menuData: MenuItem[];
}

const Navigation = styled.div`
  padding: 0px 20px;
  height: 70px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  min-width: 400px;

  ul {
    display: flex;
    padding: 0;
    width: 350px;
    li {
      position: relative;
      list-style: none;
      width: 70px;
      height: 70px;
      z-index: 1;
      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        text-align: center;
        font-weight: 500;
        .icon {
          position: relative;
          display: block;
          line-height: 75px;
          font-size: 1.5em;
          text-align: center;
          transition: 0.5s;
          color: #222327;
        }
        .text {
          position: absolute;
          color: #222327;
          font-weight: 400;
          font-size: 0.75em;
          letter-spacing: 0.05em;
          transition: 0.5s;
          opacity: 0;
          transform: translateY(-25px);
        }
      }
    }
    li.active a {
      .icon {
        transform: translateY(35px);
      }
      .text {
        opacity: 1;
        transform: translateY(-15px);
      }
    }
  }
  .indicator {
    position: absolute;
    box-sizing: border-box;
    bottom: -50%;
    border-radius: 50%;
    border: 5px solid #222327;
    width: 70px;
    height: 70px;
    background: #77fd29;
    transition: 0.5s;
    box-shadow: 0px 0px 3px #222327, inset 0px 0px 3px #222327;
    &:before {
      content: "";
      position: absolute;
      bottom: 50%;
      left: -20px;
      width: 19px;
      height: 20px;
      background: transparent;
      border-bottom-right-radius: 20px;
      box-shadow: 1px 10px 0 #222327;
    }
    &:after {
      content: "";
      position: absolute;
      bottom: 50%;
      right: -20px;
      width: 19px;
      height: 20px;
      background: transparent;
      border-bottom-left-radius: 20px;
      box-shadow: -1px 10px 0 #222327;
    }
  }
`;

const Menu: VoidFunctionComponent<MenuProps> = ({ menuData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <Navigation>
      <ul>
        {menuData.map((item, index) => (
          <li
            className={`item ${index === activeIndex ? "active" : ""}`}
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
    </Navigation>
  );
};

export default Menu;
