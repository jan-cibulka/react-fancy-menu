import "./App.css";
import { MenuItem, Menu, demoMenuContent } from "./components/menu/Menu";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoSettingsOutline,
  IoLocationOutline,
  IoPeopleOutline,
} from "react-icons/io5";

import { useCallback, useState } from "react";
import React from "react";

function App() {
  const handleChange = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='App'>
      <Menu
        items={demoMenuContent}
        controlledId={activeIndex}
        onChange={handleChange}
        pageColor='#5e5e79'
        backgroundColor='rgb(100,20,30)'
      />
    </div>
  );
}

export default App;
