"use client";
import { Todo } from "./store/todosStore";

export default function TodoListView({
  idPrefix,
  todos,
  title,
  editing,
  setTitle,
  onAdd,
  onUpdate,
  onEdit,
  onDelete,
}: {
  idPrefix: string;
  todos: Todo[];
  title: string;
  editing: boolean;
  setTitle: (title: string) => void;
  onAdd: () => void;
  onUpdate: () => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div>
      <input
        id={`${idPrefix}-title`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {editing ? (
        <button id={`${idPrefix}-update-click`} onClick={onUpdate}>Update</button>
      ) : (
        <button id={`${idPrefix}-add-click`} onClick={onAdd}>Add</button>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button id={`${idPrefix}-edit-click`} onClick={() => onEdit(todo)}>Edit</button>
            <button id={`${idPrefix}-delete-click`} onClick={() => onDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
