"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { useCoursesStore } from "../store/coursesStore";

const inputClass = "mb-2 w-full max-w-md rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
const labelClass = "block text-sm font-medium";
const btnClass = "me-2 rounded px-3 py-1.5 text-sm font-medium text-white disabled:opacity-50";

export default function Dashboard() {
  const { courses, addCourse, deleteCourse, updateCourse } = useCoursesStore();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("CS4200");
  const [startDate, setStartDate] = useState("2026-03-09");
  const [editingId, setEditingId] = useState<string | null>(null);

  const reset = () => {
    setName("");
    setDescription("");
    setNumber("CS4200");
    setStartDate("2026-03-09");
    setEditingId(null);
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-course-form">
        {editingId ? "Edit Course" : "New Course"}
      </h2>
      <input
        id="wd-course-name"
        placeholder="Course name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={inputClass}
      />
      <input
        id="wd-course-description"
        placeholder="Course description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={inputClass}
      />
      <label htmlFor="wd-course-number" className={labelClass}>Course Number</label>
      <input
        id="wd-course-number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className={inputClass}
      />
      <label htmlFor="wd-course-start-date" className={labelClass}>Start Date</label>
      <input
        id="wd-course-start-date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className={inputClass}
      />
      <div className="mb-3">
        <button
          type="button"
          id="wd-add-new-course-click"
          className={btnClass + " bg-green-600"}
          onClick={() => {
            addCourse({ name, description, number, startDate, image: "/images/reactjs.jpg" });
            reset();
          }}
        >
          Add
        </button>
        <button
          type="button"
          id="wd-update-course-click"
          className={btnClass + " bg-blue-600"}
          disabled={editingId === null}
          onClick={() => {
            if (editingId !== null) updateCourse(editingId, { name, description, number, startDate });
            reset();
          }}
        >
          Update
        </button>
      </div>
      <hr />
      <h2 id="wd-dashboard-published">{`Published Courses (${courses.length})`}</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            title={course.name}
            subtitle={course.description}
            image={course.image}
            onEdit={() => {
              setEditingId(course._id);
              setName(course.name);
              setDescription(course.description);
              setNumber(course.number);
              setStartDate(course.startDate);
            }}
            onDelete={() => {
              deleteCourse(course._id);
              if (course._id === editingId) reset();
            }}
          />
        ))}
      </div>
    </div>
  );
}
