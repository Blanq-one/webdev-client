import { create } from "zustand";
import { modules as seedModules } from "../database";

export type CourseModule = (typeof seedModules)[number];

interface ModulesState {
  modules: CourseModule[];
  addModule: (course: string, name: string) => void;
  deleteModule: (id: string) => void;
  updateModule: (id: string, name: string) => void;
}

export const useModulesStore = create<ModulesState>((set) => ({
  modules: seedModules,
  addModule: (course, name) =>
    set((state) => ({
      modules: [
        ...state.modules,
        { _id: new Date().getTime().toString(), course, name, lessons: [] },
      ],
    })),
  deleteModule: (id) =>
    set((state) => ({ modules: state.modules.filter((m) => m._id !== id) })),
  updateModule: (id, name) =>
    set((state) => ({
      modules: state.modules.map((m) => (m._id === id ? { ...m, name } : m)),
    })),
}));
