"use client";
import { useState } from "react";

function Child({ sayHello }: { sayHello: () => void }) {
  return (
    <button id="wd-pass-function-click" onClick={sayHello}>
      Invoke the Function
    </button>
  );
}

export default function PassingFunctions() {
  const [message, setMessage] = useState("");
  return (
    <div id="wd-passing-functions">
      <h3>Passing Functions as Props</h3>
      <Child sayHello={() => setMessage("Hello from the parent!")} />
      <p>{message}</p>
    </div>
  );
}
