import Link from "next/link";
import { HTTP_SERVER } from "../lib/httpServer";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <p>Krish Nagaral</p>
      <p>
        <a
          href="https://github.com/Blanq-one/webdev-client"
          id="wd-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </p>
      <p>
        <a
          href="https://github.com/Blanq-one/webdev-server"
          id="wd-github-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          Server GitHub repository
        </a>
      </p>
      <p>
        <a
          href={HTTP_SERVER}
          id="wd-server-root"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed server ({HTTP_SERVER || "NEXT_PUBLIC_HTTP_SERVER not set"})
        </a>
      </p>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
        </li>
        <li id="wd-lab4-link">
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/dashboard" id="wd-kambaz-link">
            Kambaz
          </Link>
          <ul id="wd-kambaz-screens">
            <li>
              <Link href="/account/signin">Sign in</Link>
            </li>
            <li>
              <Link href="/account/signup">Sign up</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/courses/1234/home">Course home (CS1234)</Link>
            </li>
            <li>
              <Link href="/courses/1234/modules">Course modules (CS1234)</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
