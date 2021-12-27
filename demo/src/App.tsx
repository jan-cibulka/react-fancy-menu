import React, { useCallback, useState } from "react";
import "./App.css";
import { Menu} from "react-fancy-menu";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";
function App() {
  const handleChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <Menu
        controlledId={activeIndex}
        onChange={handleChange}
        pageColor={"#fff"}
        backgroundColor={"#333222"}
        indicatorColor={"red"}
        items={[
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
        ]}
      />
    </div>
  );
}

export default App;
