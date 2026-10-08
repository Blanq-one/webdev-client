export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow wd-fg-color-black">
          Portrait
        </div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red wd-fg-color-black">
          Square
        </div>
      </div>
      <div className="wd-dimension-my-box wd-bg-color-gray wd-fg-color-black">
        New York is more like a chaotic and fun life.
      </div>
      <div id="wd-ai-dimension" className="wd-ai-dimension wd-fg-color-black">
        This sample box has a fixed size, and its long sentence shows how the
        declared width and height behave.
      </div>
    </div>
  );
}
