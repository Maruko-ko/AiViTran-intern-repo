import React from "react";
import { useSelector } from "react-redux";
import { selectCounterValue } from "./counterSlice";

function CounterMessage() {
  const count = useSelector(selectCounterValue);

  return (
    <div>
      {count > 5 ? (
        <p>The counter is high!</p>
      ) : count < 0 ? (
        <p>The counter is negative!</p>
      ) : (
        <p>The counter is in a safe range.</p>
      )}
    </div>
  );
}

export default CounterMessage;
