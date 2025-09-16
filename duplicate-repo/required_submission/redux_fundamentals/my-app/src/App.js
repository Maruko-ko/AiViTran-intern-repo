import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCounterValue } from "./counterSlice";
import CounterMessage from "./CounterMessage";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCounterValue);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <CounterMessage />
    </div>
  );
}

export default App;
