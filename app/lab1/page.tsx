import HeadingTags from "./HeadingTags";
import ParagraphTag from "./ParagraphTag";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <HeadingTags />
      <div id="wd-your-heading">
        <h2>
          yo this is krish and i love playing{" "}
          <span id="wd-your-span">games</span>
        </h2>
      </div>
      <p id="wd-p-your-1">
        I recently started playing Dragon&apos;s Dogma, and it&apos;s become one
        of my favorite games. The story really pulled me in, and the combat
        system feels rewarding once you get the hang of the different
        techniques.
      </p>
      <p id="wd-p-your-2">
        What I like most is the setting, it&apos;s based on a medieval English
        theme, which gives the whole world a distinct atmosphere that a lot of
        other fantasy games don&apos;t quite capture.
      </p>
      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        <h5>What I built</h5>
        <h6>Next step</h6>
      </div>
      <ParagraphTag />
      <p id="wd-ai-p">
        Wrapping text in <code>&lt;p&gt;</code> tags creates vertical spacing
        because browsers apply a default top and bottom margin to every
        paragraph element. Each <code>&lt;p&gt;</code> is also a block-level
        element, so it starts on its own line, and those default margins push
        neighboring paragraphs apart without any CSS of your own.
      </p>
    </div>
  );
}
