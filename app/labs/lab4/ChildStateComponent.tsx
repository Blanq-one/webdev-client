"use client";
export default function ChildStateComponent({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <div id="wd-child-state">
      <h3>Parent/Child Counter: {count}</h3>
      <button id="wd-child-up-click" onClick={() => setCount(count + 1)}>Up</button>
      <button id="wd-child-down-click" onClick={() => setCount(count - 1)}>Down</button>
    </div>
  );
}
