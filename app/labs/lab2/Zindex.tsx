export default function Zindex() {
  return (
    <div id="wd-z-index">
      <h2>Z index</h2>
      <div className="wd-pos-relative" style={{ height: 150 }}>
        <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-fg-color-black wd-dimension-portrait">
          Portrait
        </div>
        <div className="wd-zindex-bring-to-front wd-pos-absolute-50-50 wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-fg-color-black wd-dimension-square">
          Square
        </div>
        <div className="wd-my-zindex-box wd-bg-color-green wd-fg-color-white">
          It has great fight scenes as well.
        </div>
        <div
          id="wd-ai-zindex"
          className="wd-ai-zindex-top wd-bg-color-gray wd-fg-color-black wd-dimension-square"
        >
          AI top
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
