"use client";
import { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState(["Apples", "Bananas", "Cherries"]);
  const [item, setItem] = useState("");
  return (
    <div id="wd-array-state">
      <h3>Array State Variable</h3>
      <input id="wd-array-input" value={item} onChange={(e) => setItem(e.target.value)} />
      <button
        id="wd-add-element-click"
        onClick={() => {
          if (!item.trim()) return;
          setArray([...array, item]);
          setItem("");
        }}
      >
        Add
      </button>
      <ul>
        {array.map((element, index) => (
          <li key={`${element}-${index}`}>
            {element}{" "}
            <button
              id="wd-delete-element-click"
              onClick={() => setArray(array.filter((_, i) => i !== index))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
