import React, { VoidFunctionComponent } from "react";
import "./Menu.css";

import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubblesOutline,
  IoCameraOutline,
  IoSettingsOutline,
} from "react-icons/io5";
interface MenuProps {}

const Menu: VoidFunctionComponent<MenuProps> = () => {
  return (
    <div className='root'>
      <div className='navigation'>
        <ul>
          <li className='list active'>
            <a href='/'>
              <span className='icon'>
                <IoHomeOutline />
              </span>
              <span className='text'>Home</span>
            </a>
          </li>

          <li className='list'>
            <a href='/'>
              <span className='icon'>
                <IoPersonOutline />
              </span>
              <span className='text'>Profile</span>
            </a>
          </li>

          <li className='list'>
            <a href='/'>
              <span className='icon'>
                <IoChatbubblesOutline />
              </span>
              <span className='text'>Message</span>
            </a>
          </li>
          <li className='list'>
            <a href='/'>
              <span className='icon'>
                <IoCameraOutline />
              </span>
              <span className='text'>Photos</span>
            </a>
          </li>

          <li className='list'>
            <a href='/'>
              <span className='icon'>
                <IoSettingsOutline />
              </span>
              <span className='text'>Settings</span>
            </a>
          </li>
          <div className='indicator'></div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
