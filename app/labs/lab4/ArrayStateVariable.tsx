"use client";
import { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h3>Array State Variable</h3>
      <button type="button" id="wd-add-element-click" onClick={addElement}>
        Add Element
      </button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              type="button"
              id={`wd-delete-element-${index}-click`}
              onClick={() => deleteElement(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
