"use client";
import { useState } from "react";
import { useTodosStore } from "./store/todosStore";
import TodoListView from "./TodoListView";

export default function ZustandTodoList() {
  const { todos, addTodo, deleteTodo, updateTodo } = useTodosStore();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-zustand-todo-list">
      <h3>Zustand Todo List</h3>
      <TodoListView
        idPrefix="wd-zustand-todo"
        todos={todos}
        title={title}
        editing={editingId !== null}
        setTitle={setTitle}
        onAdd={() => {
          addTodo(title);
          setTitle("");
        }}
        onUpdate={() => {
          if (editingId !== null) updateTodo(editingId, title);
          setEditingId(null);
          setTitle("");
        }}
        onEdit={(todo) => {
          setEditingId(todo.id);
          setTitle(todo.title);
        }}
        onDelete={(id) => {
          deleteTodo(id);
          if (id === editingId) {
            setEditingId(null);
            setTitle("");
          }
        }}
      />
    </div>
  );
}
