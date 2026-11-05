"use client";
import { useState } from "react";
export default function DateStateVariable() {
  const [startDate, setStartDate] = useState("2025-01-01");
  return (
    <div id="wd-date-state-variables">
      <h3>Date State Variables</h3>
      <p>Selected date (YYYY-MM-DD): {startDate}</p>
      <input
        type="date"
        id="wd-date-input"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
    </div>
  );
}
