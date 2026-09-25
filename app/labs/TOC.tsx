import Link from "next/link";

export default function TOC() {
  return (
    <nav id="wd-toc">
      <div id="wd-your-toc">
        <p>Krish Nagaral</p>
        <p>Have no regrets ever!</p>
        <p>Play games and read murder mystery books.</p>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        {/* Kambaz link goes here once that section is built */}
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </nav>
  );
}
