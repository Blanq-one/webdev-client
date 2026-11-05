"use client";
import { useState } from "react";
export default function ClickCounter() {
  const [count, setCount] = useState(7);
  return (
    <div id="wd-click-counter">
      <h3>useState Counter: {count}</h3>
      <button id="wd-counter-up-click" onClick={() => setCount(count + 1)}>Up</button>
      <button id="wd-counter-down-click" onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
