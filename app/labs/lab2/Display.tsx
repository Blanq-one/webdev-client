export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>
      <h3>Inline</h3>
      <div>
        <span className="wd-display-inline wd-bg-color-red wd-fg-color-black">
          Inline 1
        </span>
        <span className="wd-display-inline wd-bg-color-yellow wd-fg-color-black">
          Inline 2
        </span>
        <span className="wd-display-inline wd-bg-color-blue wd-fg-color-white">
          Inline 3
        </span>
      </div>
      <h3>Inline-block</h3>
      <div>
        <span className="wd-display-inline-block wd-bg-color-red wd-fg-color-black">
          Inline-block 1
        </span>
        <span className="wd-display-inline-block wd-bg-color-yellow wd-fg-color-black">
          Inline-block 2
        </span>
        <span className="wd-display-inline-block wd-bg-color-blue wd-fg-color-white">
          Inline-block 3
        </span>
      </div>
      <h3>Block</h3>
      <div>
        <span className="wd-display-block wd-bg-color-red wd-fg-color-black">
          Block 1
        </span>
        <span className="wd-display-block wd-bg-color-yellow wd-fg-color-black">
          Block 2
        </span>
        <span className="wd-display-block wd-bg-color-blue wd-fg-color-white">
          Block 3
        </span>
      </div>
      <div
        id="wd-ai-display"
        className="wd-display-inline wd-bg-color-green wd-fg-color-white"
      >
        This sample div is forced to display inline.
      </div>{" "}
      <div className="wd-display-inline wd-bg-color-yellow wd-fg-color-black">
        I feel that way because Mumbai is chaotic and fun as well.
      </div>
    </div>
  );
}
