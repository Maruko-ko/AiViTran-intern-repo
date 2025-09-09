## Example component 
```bash

import React, { useEffect, useState } from "react";

function UseEffectDemo() {
  const [data, setData] = useState(null);

  // Runs on mount and unmount
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component unmounted");
    };
  }, []); // empty dependency array = run once

  // Function to fetch data
  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>useEffect Demo</h2>
      <button onClick={fetchData}>Fetch Data</button>
      {data && (
        <div>
          <h4>{data.title}</h4>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default UseEffectDemo;

```

## Reflection
### When should you use useEffect instead of handling logic inside event handlers?
I saw that event handlers are great for responding to direct user actions (like clicking a button), but useEffect is the better choice when I want something to happen automatically as part of the component’s lifecycle. For example, logging a message when the component mounts or cleaning up when it unmounts wouldn’t make sense in an event handler, because the user doesn’t “trigger” those — they’re tied to how the component itself behaves.

### What happens if you don’t provide a dependency array?
I noticed that if I leave out the dependency array, the effect will run after every render. At first this sounded harmless, but I realized it could cause infinite loops if the effect updates state, because the re-render keeps triggering it. It also wastes resources, since the logic keeps running even when nothing has actually changed.

### How can improper use of useEffect cause performance issues?

While testing, I learned that two main mistakes can cause problems: (a) forgetting to add a cleanup function, which leaves event listeners or intervals hanging around, and (b) using unstable values (like inline objects or functions) in the dependency array, which makes the effect run over and over again unnecessarily. Both of these can slow down the app or even lead to memory leaks if I’m not careful.