"use client";
import { useState } from "react";
export default function ObjectStateVariable() {
  const [course, setCourse] = useState({ title: "Web Development", year: "2025", city: "Mumbai" });
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
      <label htmlFor="wd-object-city">City</label>
      <input
        id="wd-object-city"
        value={course.city}
        onChange={(e) => setCourse({ ...course, city: e.target.value })}
      />
    </div>
  );
}
