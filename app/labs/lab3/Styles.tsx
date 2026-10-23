import "./lab3.css";

const bgGreen = { backgroundColor: "green" };

export default function Styles() {
  return (
    <div id="wd-styles">
      <h3>Style Objects (3.6.1)</h3>
      <div>
        <span className="wd-box" style={{ backgroundColor: "red" }}>1</span>
        <span className="wd-box" style={{ backgroundColor: "blue" }}>2</span>
        <span className="wd-box" style={{ backgroundColor: "purple" }}>3</span>
        <span className="wd-box" style={bgGreen}>4</span>
      </div>

      <h3>CSS Classes (3.6.2)</h3>
      <div>
        <span className="wd-box wd-bg-red">1</span>
        <span className="wd-box wd-bg-blue">2</span>
        <span className="wd-box wd-bg-green">3</span>
        <span className="wd-box wd-bg-purple">4</span>
        <span className="wd-box wd-bg-orange">5</span>
        <span className="wd-box bg-gold">6</span>
      </div>
    </div>
  );
}