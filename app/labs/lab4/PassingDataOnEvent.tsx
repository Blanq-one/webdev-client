"use client";
import { useState } from "react";

export default function PassingDataOnEvent() {
  const [result, setResult] = useState("");
  const add = (a: number, b: number) => setResult(`${a} + ${b} = ${a + b}`);
  return (
    <div id="wd-passing-data-on-event">
      <h3>Passing Data on Events</h3>
      <button id="wd-pass-data-click" onClick={() => add(2, 3)}>Pass 2 and 3 to add()</button>
      <p>{result}</p>
    </div>
  );
}
