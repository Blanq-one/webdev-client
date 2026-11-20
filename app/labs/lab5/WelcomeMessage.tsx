import { HTTP_SERVER } from "../../lib/httpServer";
import Exercise from "./Exercise";

export default function WelcomeMessage() {
  return (
    <div id="wd-welcome">
      <h3>Welcome</h3>
      <Exercise id="wd-welcome-link" title="Welcome Message" href={`${HTTP_SERVER}/lab5/welcome`} />
    </div>
  );
}
