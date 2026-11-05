import { create } from "zustand";

export interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  addTodo: (title: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, title: string) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
    { id: "3", title: "Learn Zustand" },
  ],
  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: new Date().getTime().toString(), title }],
    })),
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  updateTodo: (id, title) =>
    set((state) => ({
      todos: state.todos.map((t) => (t.id === id ? { ...t, title } : t)),
    })),
}));
