import Exercise from "./Exercise";

// These point at this Next.js app's own origin, not HTTP_SERVER.
export default function RouteHandlers() {
  return (
    <div id="wd-route-handlers">
      <h3>Next.js Route Handlers</h3>
      <Exercise id="wd-route-handler-hello" title="Hello Route Handler" href="/api/lab5/hello" />
      <Exercise
        id="wd-route-handler-calculator"
        title="Calculator Route Handler"
        href="/api/lab5/calculator?a=12&b=30&operation=add"
      />
    </div>
  );
}
