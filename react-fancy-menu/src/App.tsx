import "./App.css";
import Menu, { MenuItem } from "./menu/Menu";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";

import { useCallback, useState } from "react";

function App() {
  const handleChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <Menu
        items={items}
        controlledId={activeIndex}
        onChange={handleChange}
        pageColor='#5e5e79'
      />
    </div>
  );
}

const items: MenuItem[] = [
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
    name: "Profile",
    icon: <IoPersonOutline />,
  },
  {
    name: "Friends",
    icon: <IoPeopleOutline />,
  },
  {
    name: "Friends",
    icon: <IoPeopleOutline />,
  },
  {
    name: "Friends",
    icon: <IoPeopleOutline />,
  },
  {
    name: "Friends",
    icon: <IoPeopleOutline />,
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
export default App;
