"use client";
import { useState } from "react";

export default function EventHandlers() {
  const [message, setMessage] = useState("");
  const hello = () => setMessage("Hello World!");
  return (
    <div id="wd-event-handlers">
      <h3>Event Handlers</h3>
      <button id="wd-hello-world-click" onClick={hello}>Hello World!</button>
      <p>{message}</p>
    </div>
  );
}
