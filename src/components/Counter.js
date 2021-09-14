import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  increament,
  increamentAmount,
} from "../redux/counter/counterSlice";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(countValue);

  const artir = () => {
    dispatch(increament());
  };
  const azalt = () => {
    dispatch(decreament());
  };
  const miktar = () => {
    dispatch(increamentAmount(count));
  };

  const handleAmount = (e) => {
    setCount(e.target.value);
  };

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={artir}>+</button>
      <button onClick={azalt}>-</button>
      <br />
      <br />
      <input value={count} onChange={handleAmount} type="number" />
      <button onClick={miktar}>Miktar kadar artır</button>
    </div>
  );
};
