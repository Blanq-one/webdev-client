import type { ReactNode } from "react";
function HighlightedBox({
  backgroundColor = "lightyellow",
  borderColor = "orange",
  borderWidth = 2,
  borderRadius = 8,
  children,
}: {
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: string | number;
  borderRadius?: string | number;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor,
        borderColor,
        borderWidth,
        borderStyle: "solid",
        borderRadius,
        padding: "0.75rem 1rem",
        marginBottom: "0.75rem",
        color: "#000000",
      }}
    >
      {children}
    </div>
  );
}
export default function HighlightedBoxLab() {
  return (
    <div id="wd-highlighted-box">
      <h3>Highlighted Box</h3>
      <HighlightedBox
        backgroundColor="lavender"
        borderColor="purple"
        borderWidth={3}
        borderRadius={12}
      >
        <h4>Callout</h4>
        <p>
          This box wraps <strong>any</strong>{" "}children — headings, paragraphs,
          lists, and more.
        </p>
        <ul>
          <li>backgroundColor</li>
          <li>borderColor</li>
          <li>borderWidth</li>
          <li>borderRadius</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#e8f5e9"
        borderColor="green"
        borderWidth={2}
        borderRadius={20}
      >
        <p>
          A second box with different style props wrapping different content.
        </p>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="lightcyan"
        borderColor="green"
        borderWidth={3}
        borderRadius={16}
      >
        <h4>Krish Nagaral</h4>
        <ul>
          <li>Learn the fundamentals</li>
          <li>Get an A in this course</li>
          <li>Build a good rapport with the professor</li>
        </ul>
      </HighlightedBox>
      <HighlightedBox
        backgroundColor="#fdf0e6"
        borderColor="brown"
        borderWidth={2}
        borderRadius={10}
      >
        <h4>Sample Section</h4>
        <p>
          This box demonstrates nested paragraphs and headings inside a
          reusable wrapper.
        </p>
        <ol>
          <li>First nested item</li>
          <li>Second nested item</li>
          <li>Third nested item</li>
        </ol>
      </HighlightedBox>
    </div>
  );
}
