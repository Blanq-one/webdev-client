import { create } from "zustand";
import { courses as seedCourses } from "../database";

export type Course = (typeof seedCourses)[number];

interface CoursesState {
  courses: Course[];
  addCourse: (course: Omit<Course, "_id">) => void;
  deleteCourse: (id: string) => void;
  updateCourse: (id: string, changes: Partial<Omit<Course, "_id">>) => void;
}

export const useCoursesStore = create<CoursesState>((set) => ({
  courses: seedCourses,
  addCourse: (course) =>
    set((state) => ({
      courses: [...state.courses, { ...course, _id: new Date().getTime().toString() }],
    })),
  deleteCourse: (id) =>
    set((state) => ({ courses: state.courses.filter((c) => c._id !== id) })),
  updateCourse: (id, changes) =>
    set((state) => ({
      courses: state.courses.map((c) => (c._id === id ? { ...c, ...changes } : c)),
    })),
}));
