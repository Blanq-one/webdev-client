"use client";
import { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John");
  return (
    <div id="wd-string-state-variables">
      <h3>String State Variables</h3>
      <p>{firstName}</p>
      <input
        id="wd-string-input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  );
}
