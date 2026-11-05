"use client";
import Link from "next/link";
import { useState } from "react";

export default function QueryAndPathParameters() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  return (
    <div id="wd-query-and-path-parameters">
      <h3>Query and Path Parameters</h3>
      <input
        id="wd-url-a"
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <input
        id="wd-url-b"
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <div>
        <Link id="wd-query-parameter-link" href={`/labs/lab4/url-encoding/query-params?a=${a}&b=${b}`}>
          Query Parameters
        </Link>
      </div>
      <div>
        <Link id="wd-path-parameter-link" href={`/labs/lab4/url-encoding/path-params/${a}/${b}`}>
          Path Parameters
        </Link>
      </div>
    </div>
  );
}
