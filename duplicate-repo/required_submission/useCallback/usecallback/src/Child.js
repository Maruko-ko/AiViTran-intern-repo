import React from "react";

function Child({ onIncrement }) {
  console.log("Child rendered");
  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
}

export default React.memo(Child);
