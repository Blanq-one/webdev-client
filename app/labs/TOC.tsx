"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const labs = [
  { href: "/labs/lab1", label: "Lab 1" },
  { href: "/labs/lab2", label: "Lab 2" },
  { href: "/labs/lab3", label: "Lab 3" },
  { href: "/labs/lab4", label: "Lab 4" },
  { href: "/labs/lab5", label: "Lab 5" },
];

export default function TOC() {
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  return (
    <nav id="wd-toc">
      <div id="wd-your-toc">
        <p>Krish Nagaral</p>
        <p>
          <a
            href="https://github.com/Blanq-one/webdev-client"
            id="wd-toc-github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>
        </p>
        <p>Have no regrets ever!</p>
        <p>Play games and read murder mystery books.</p>
      </div>
      <ul>
        <li>
          <Link href="/labs" id="wd-home-link">Home</Link>
        </li>
        {labs.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              id={`wd-${href.split("/").pop()}-link`}
              aria-current={isCurrent(href) ? "page" : undefined}
              style={
                isCurrent(href)
                  ? { fontWeight: "bold", backgroundColor: "gold", color: "black" }
                  : undefined
              }
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/dashboard" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </nav>
  );
}