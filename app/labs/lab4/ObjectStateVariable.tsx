"use client";
import { useState } from "react";
export default function ObjectStateVariable() {
  const [course, setCourse] = useState({ title: "Web Development", year: "2025" });
  return (
    <div id="wd-object-state-variables">
      <h3>Object State Variables</h3>
      <pre>{JSON.stringify(course, null, 2)}</pre>
      <input
        id="wd-object-title"
        value={course.title}
        onChange={(e) => setCourse({ ...course, title: e.target.value })}
      />
      <input
        id="wd-object-year"
        value={course.year}
        onChange={(e) => setCourse({ ...course, year: e.target.value })}
      />
    </div>
  );
}
