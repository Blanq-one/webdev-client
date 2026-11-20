import { HTTP_SERVER } from "../../lib/httpServer";
import Exercise from "./Exercise";

const exercises = [
  { id: "wd-retrieve-assignment", title: "Get Assignment", path: "/lab5/assignment" },
  { id: "wd-retrieve-assignment-title", title: "Get Assignment Title", path: "/lab5/assignment/title" },
  { id: "wd-retrieve-module", title: "Get Module", path: "/lab5/module" },
  { id: "wd-retrieve-module-name", title: "Get Module Name", path: "/lab5/module/name" },
];

export default function WorkingWithObjects() {
  return (
    <div id="wd-working-with-objects">
      <h3>Remote Objects</h3>
      {exercises.map(({ id, title, path }) => (
        <Exercise key={id} id={id} title={title} href={`${HTTP_SERVER}${path}`} />
      ))}
    </div>
  );
}
