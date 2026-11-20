import { HTTP_SERVER } from "../../lib/httpServer";
import Exercise from "./Exercise";

const exercises = [
  { id: "wd-retrieve-todos", title: "Get Todos", path: "/lab5/todos" },
  { id: "wd-retrieve-todo-by-id", title: "Get Todo by ID", path: "/lab5/todos/2" },
  { id: "wd-retrieve-completed-todos", title: "Get Completed Todos", path: "/lab5/todos?completed=true" },
];

export default function WorkingWithArrays() {
  return (
    <div id="wd-working-with-arrays">
      <h3>Remote Arrays</h3>
      {exercises.map(({ id, title, path }) => (
        <Exercise key={id} id={id} title={title} href={`${HTTP_SERVER}${path}`} />
      ))}
    </div>
  );
}
