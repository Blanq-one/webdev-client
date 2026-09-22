export default function ParagraphTag() {
  return (
    <div id="wd-paragraph-tag">
      <p>
        This is the first paragraph. Notice that it sits in its own block of
        text, separated from whatever comes after it.
      </p>
      <p>
        This is the second paragraph. The gap between it and the paragraph above
        appears without any styling being added.
      </p>
      <p>
        This is the third paragraph. Each paragraph starts on a new line instead
        of running together with its neighbors.
      </p>
    </div>
  );
}
