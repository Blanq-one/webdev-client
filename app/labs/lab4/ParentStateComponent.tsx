"use client";
import { useState } from "react";
import ChildStateComponent from "./ChildStateComponent";
export default function ParentStateComponent() {
  const [count, setCount] = useState(123);
  return (
    <div id="wd-parent-state">
      <ChildStateComponent count={count} setCount={setCount} />
    </div>
  );
}
