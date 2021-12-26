import React, { useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { FancyButton } from "react-fancy-menu";
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
      <FancyButton></FancyButton>
     </div>
  );
}

export default App;
