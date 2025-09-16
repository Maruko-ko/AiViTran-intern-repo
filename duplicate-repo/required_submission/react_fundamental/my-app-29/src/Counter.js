import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <h2 className="text-2xl font-bold text-gray-800">Counter Example</h2>
      <p className="text-lg">
        Current count: <span className="font-mono">{count}</span>
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 active:bg-gray-700 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
