import { HTTP_SERVER } from "../../lib/httpServer";
import WelcomeMessage from "./WelcomeMessage";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import RouteHandlers from "./RouteHandlers";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      {!HTTP_SERVER && (
        <p id="wd-http-server-missing">
          NEXT_PUBLIC_HTTP_SERVER is not set, so the server links below will not work.
        </p>
      )}
      <WelcomeMessage />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <RouteHandlers />
    </div>
  );
}
