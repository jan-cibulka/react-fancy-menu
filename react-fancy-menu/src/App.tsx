import "./App.css";
import { useCallback, useState } from "react";
import React from "react";
import { Menu } from "./components";
import { demoMenuContent } from "./components/Menu/Menu";

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
