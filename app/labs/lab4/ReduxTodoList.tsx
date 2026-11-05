"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { addTodo, deleteTodo, setTodo, updateTodo } from "./store/todosReducer";
import TodoListView from "./TodoListView";

export default function ReduxTodoList() {
  const { todos, todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <div id="wd-redux-todo-list">
      <h3>Redux Todo List</h3>
      <TodoListView
        idPrefix="wd-redux-todo"
        todos={todos}
        title={todo.title}
        editing={todo.id !== ""}
        setTitle={(title) => dispatch(setTodo({ ...todo, title }))}
        onAdd={() =>
          dispatch(addTodo({ id: new Date().getTime().toString(), title: todo.title }))
        }
        onUpdate={() => dispatch(updateTodo(todo))}
        onEdit={(t) => dispatch(setTodo(t))}
        onDelete={(id) => {
          dispatch(deleteTodo(id));
          if (id === todo.id) dispatch(setTodo({ id: "", title: "" }));
        }}
      />
    </div>
  );
}
