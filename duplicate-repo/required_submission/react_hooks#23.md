## Example component:
```bash
import React, { useState, useMemo } from "react";

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [numbers] = useState(Array.from({ length: 5000 }, (_, i) => i + 1));

  // Expensive calculation: sum of all numbers
  const expensiveCalculation = (nums) => {
    console.log("Running expensive calculation...");
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      // Artificial delay
      for (let j = 0; j < 1000; j++) {}
      total += nums[i];
    }
    return total;
  };

  // useMemo to cache result
  const total = useMemo(() => expensiveCalculation(numbers), [numbers]);

  return (
    <div>
      <h2>useMemo Demo</h2>
      <p>Total sum: {total}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default UseMemoDemo;

```

## How does useMemo improve performance?
In my implementation, I noticed that useMemo stopped the expensive calculation from running every time I clicked the button. It only recalculated when the list of numbers changed. This made the component feel safer because React reused the previous result instead of doing the heavy computation again.

## When should I avoid using useMemo?
From this tesk, I realised it is not always good to wrap everything in useMemo. If the calcuation is cheap or the component doesn't re-render often, then useMemo just adds extra complexity without real performance benefits. It’s best for cases where I can clearly see a slowdown without it.

## What happens if I remove useMemo from your implementation?
When I tried removing useMemo, I saw that the expensive function ran every single time I updated the count. This didn’t change the result (since the numbers list stayed the same), but it wasted processing time and made the console spam “Running expensive calculation…” on every click. Basically, React was doing unnecessary work.