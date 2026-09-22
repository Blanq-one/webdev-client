import HeadingTags from "./HeadingTags";
import ListTags from "./ListTags";
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
      <div id="wd-your-favorite-recipe">
        <h3>My Favorite Recipe: Vada Pav</h3>
        <ol>
          <li>Make a flavored potato filling.</li>
          <li>Coat the filling in gram flour batter.</li>
          <li>Fry it until golden and crispy.</li>
          <li>Serve it inside bread and enjoy.</li>
        </ol>
      </div>
      <div id="wd-your-books">
        <h3>Favorite Books</h3>
        <ul>
          <li>All books by Agatha Christie, I&apos;m a big murder mystery fan.</li>
          <li>Murder on the Orient Express (my favorite one specifically).</li>
        </ul>
      </div>
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
      <ListTags />
      <ul id="wd-ai-html-tags">
        <li>
          <code>&lt;h1&gt;</code>&ndash;<code>&lt;h6&gt;</code> &mdash; headings,
          from the most important down to the least.
        </li>
        <li>
          <code>&lt;p&gt;</code> &mdash; a paragraph, a block of body text.
        </li>
        <li>
          <code>&lt;ol&gt;</code> &mdash; an ordered list, numbered because the
          sequence matters.
        </li>
        <li>
          <code>&lt;ul&gt;</code> &mdash; an unordered list, bulleted because
          the order does not matter.
        </li>
        <li>
          <code>&lt;li&gt;</code> &mdash; one item inside an ordered or
          unordered list.
        </li>
        <li>
          <code>&lt;div&gt;</code> &mdash; a generic block container used to
          group other elements.
        </li>
        <li>
          <code>&lt;span&gt;</code> &mdash; a generic inline container for part
          of a line of text.
        </li>
      </ul>
    </div>
  );
}
