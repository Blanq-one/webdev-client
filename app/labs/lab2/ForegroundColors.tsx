export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-blue">
        I am from Mumbai, which is in India,{" "}
        <span className="wd-fg-color-red">
          and it&apos;s a place quite similar to New York.
        </span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This sample paragraph is blue and{" "}
        <span className="wd-fg-color-black">this nested text is black.</span>
      </p>
    </div>
  );
}
