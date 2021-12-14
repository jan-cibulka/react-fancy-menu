import "./App.css";
import Menu, { MenuItem } from "./menu/Menu";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoChatbubblesOutline,
  IoCameraOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { useCallback, useState } from "react";

function App() {
  const logChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <Menu
        menuData={menuData}
        pageColor='blue'
        backgroundColor='red'
        indicatorColor='#fff'
        controlledId={activeIndex}
        onChange={logChange}
      />
    </div>
  );
}

const menuData: MenuItem[] = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
  },
  {
    name: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    name: "Message",
    icon: <IoChatbubblesOutline />,
  },
  {
    name: "Photos",
    icon: <IoCameraOutline />,
  },
  {
    name: "Settings",
    icon: <IoSettingsOutline />,
  },
];
export default App;
