import todos from "./todos.json";

export default function TodoList() {
  return (
    <div id="wd-todo-list">
      <h3>Todo List (3.8.4)</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input type="checkbox" defaultChecked={todo.done} /> {todo.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}