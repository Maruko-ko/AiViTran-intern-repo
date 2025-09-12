# Example: Infinite re-render caused by useEffect
## What was the issue?
In my React project, I recreated a bug where a component re-renders infinitely becuase the useEffect hook did not have a properly dependency array
Buggy code snippet:
``` bash
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // triggers state update every render
  });

  return <p>Count: {count}</p>;
}
```
- The problem: Each time the component renders, setCount updates state. That triggers another render, which repeats endlessly.
- This led to infinite loop and a frozen browser tab

## What debugging method did I use?
1. React DevTools: Observed that the component was re-rendering continuusly
2. Console logging: Added console.log("render", count) to confirm the render count kept increasing.
3. Reasoning aboutHooks: Recognised that missing dependency arrays in useEffect can cause repeated execution
## How did I solve the problem?
I fixed the bug by adding dependency array to the useEffect hook so that it only runs when needed.
Fixed code:
``` bash
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, []); // run only once after mount

  return <p>Count: {count}</p>;
}
```
Now the counter increments every second instead of infinite re-rendering
Using setInterval with a cleanup function avoids unnecessary re-renders.