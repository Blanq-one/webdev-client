import "./lab3.css";

const bgGreen = { backgroundColor: "green" };
const flag = true;

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
        <div className="wd-box bg-red">Red</div>
        <div className="wd-box bg-blue">Blue</div>
        <div className="wd-box bg-green">Green</div>
        <div className="wd-box bg-orange">Orange</div>
        <div className={flag ? "wd-box bg-purple" : "wd-box bg-gray"}>Purple</div>
        <div className={flag ? "wd-box bg-gold" : "wd-box bg-gray"}>Gold</div>
      </div>
    </div>
  );
}