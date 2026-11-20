import { HTTP_SERVER } from "../../lib/httpServer";
import Exercise from "./Exercise";

const a = 12;
const b = 30;
const operations = [
  { operation: "add", title: "Query Parameter: Add" },
  { operation: "subtract", title: "Query Parameter: Subtract" },
  { operation: "multiply", title: "Query Parameter: Multiply" },
  { operation: "divide", title: "Query Parameter: Divide" },
];

export default function QueryParameters() {
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      {operations.map(({ operation, title }) => (
        <Exercise
          key={operation}
          id={`wd-query-parameter-${operation}`}
          title={title}
          href={`${HTTP_SERVER}/lab5/calculator?operation=${operation}&a=${a}&b=${b}`}
        />
      ))}
    </div>
  );
}
