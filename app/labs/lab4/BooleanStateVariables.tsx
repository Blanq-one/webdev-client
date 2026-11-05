"use client";
import { useState } from "react";
export default function BooleanStateVariables() {
  const [done, setDone] = useState(true);
  return (
    <div id="wd-boolean-state-variables">
      <h3>Boolean State Variables</h3>
      <label>
        <input
          type="checkbox"
          id="wd-boolean-checkbox"
          checked={done}
          onChange={() => setDone(!done)}
        />{" "}
        {done ? "Done" : "Not done"}
      </label>
    </div>
  );
}
