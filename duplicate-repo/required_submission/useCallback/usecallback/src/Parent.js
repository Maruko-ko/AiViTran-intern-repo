import React, { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  console.log("Parent rendered");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>useCallback Demo</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      <Child onIncrement={increment} />
    </div>
  );
}

export default Parent;
