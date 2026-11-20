import { HTTP_SERVER } from "../../lib/httpServer";
import Exercise from "./Exercise";

const a = 12;
const b = 30;
const operations = [
  { operation: "add", title: "Path Parameter: Add" },
  { operation: "subtract", title: "Path Parameter: Subtract" },
  { operation: "multiply", title: "Path Parameter: Multiply" },
  { operation: "divide", title: "Path Parameter: Divide" },
];

export default function PathParameters() {
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      {operations.map(({ operation, title }) => (
        <Exercise
          key={operation}
          id={`wd-path-parameter-${operation}`}
          title={title}
          href={`${HTTP_SERVER}/lab5/${operation}/${a}/${b}`}
        />
      ))}
    </div>
  );
}
