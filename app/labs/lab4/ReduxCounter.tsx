"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { increment, decrement } from "./store/counterReducer";

export default function ReduxCounter() {
  const { count } = useSelector((state: RootState) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-counter-redux">
      <h3>Redux Counter: {count}</h3>
      <button id="wd-counter-redux-up-click" onClick={() => dispatch(increment())}>Up</button>
      <button id="wd-counter-redux-down-click" onClick={() => dispatch(decrement())}>Down</button>
    </div>
  );
}
