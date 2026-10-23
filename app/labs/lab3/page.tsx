import Link from "next/link";
import Add from "./Add";
import ConditionalsAndData from "./ConditionalsAndData";
import Imports from "./Imports";
import Styles from "./Styles";
import ClientPathname from "./ClientPathname";
import ServerInfo from "./ServerInfo";
import TodoList from "./TodoList";

export default function Lab3() {
  return (
    <div id="wd-lab3">
      <h2>Lab 3 - JavaScript Fundamentals</h2>
      <ConditionalsAndData />
      <Imports />
      <Styles />

      <h3>Client Component (3.7.1)</h3>
      <ClientPathname />

      <h3>Server Component (3.7.2)</h3>
      <ServerInfo />

      <h3>Labs TOC (3.8.2)</h3>
      <p>The sidebar marks the current lab with aria-current="page".</p>

      <h3>Add Component (3.8.1)</h3>
      <Add a={3} b={4} />
      <Add a={10} b={20} />

      <h3>Path Parameters (3.8.3)</h3>
      <ul>
        <li>
          <Link href="/labs/lab3/add/12/30">/labs/lab3/add/12/30</Link>
        </li>
        <li>
          <Link href="/labs/lab3/add/3/4">/labs/lab3/add/3/4</Link>
        </li>
        <li>
          <Link href="/labs/lab3/add/7/7">/labs/lab3/add/7/7</Link>
        </li>
      </ul>

      <TodoList />
    </div>
  );
}