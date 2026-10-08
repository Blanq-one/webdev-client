export default function Flex() {
  return (
    <div id="wd-css-flex">
      <h2>Flex</h2>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-fg-color-black wd-width-75px">
          Column 1
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
        <div className="wd-bg-color-red wd-fg-color-black wd-flex-grow-1">
          Column 3
        </div>
      </div>
      <div className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-fg-color-black wd-my-flex-fixed">
          I play
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">good cricket</div>
        <div className="wd-bg-color-red wd-fg-color-black wd-flex-grow-1">
          and football.
        </div>
      </div>
      <div id="wd-ai-flex" className="wd-flex-row-container">
        <div className="wd-bg-color-yellow wd-fg-color-black wd-width-75px">
          AI pinned
        </div>
        <div className="wd-bg-color-blue wd-fg-color-white">AI middle</div>
        <div className="wd-bg-color-green wd-fg-color-white wd-flex-grow-1">
          AI grows
        </div>
      </div>
    </div>
  );
}
