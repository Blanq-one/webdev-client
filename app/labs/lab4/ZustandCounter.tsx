"use client";
import { useCounterStore } from "./store/counterStore";
export default function ZustandCounter() {
  const { count, increment, decrement } = useCounterStore();
  return (
    <div id="wd-zustand-counter">
      <h3>Zustand Counter: {count}</h3>
      <button id="wd-zustand-up-click" onClick={increment}>Up</button>
      <button id="wd-zustand-down-click" onClick={decrement}>Down</button>
    </div>
  );
}
