import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const hanleIncrement = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={hanleIncrement}>Increment</button>
        </div>
    );
}
export default Counter;