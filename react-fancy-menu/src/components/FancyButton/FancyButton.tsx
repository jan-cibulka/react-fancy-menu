import React, { useState } from "react";
import { VoidFunctionComponent } from "react";

const FancyButton: VoidFunctionComponent = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <button onClick={() => setCount(count * 2)}>Push</button>
    </div>
  );
};

export { FancyButton };
