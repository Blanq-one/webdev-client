const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="Sample image"
        />
        {LOREM} {LOREM}
        <img
          className="wd-float-left"
          src="/images/reactjs.jpg"
          alt="Sample image"
        />
        {LOREM} {LOREM}
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="Sample image"
        />
        {LOREM} {LOREM}
        <img
          className="wd-float-left"
          src="/images/reactjs.jpg"
          alt="Sample image"
        />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow wd-fg-color-black">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red wd-fg-color-black">
          Red
        </div>
        <img
          className="wd-float-right"
          src="/images/reactjs.jpg"
          alt="Sample image"
        />
        <div className="wd-float-done" />
      </div>
      <div className="wd-my-float-demo">
        <div className="wd-float-right wd-my-float-box wd-bg-color-yellow wd-fg-color-black">
          I love to watch sports as well.
        </div>
        I like cricket, football, tennis, and volleyball sometimes.
        <div className="wd-float-done" />
      </div>
      <div className="wd-my-float-demo">
        <div
          id="wd-ai-float"
          className="wd-float-right wd-my-float-box wd-bg-color-green wd-fg-color-white"
        >
          AI float
        </div>
        {LOREM}
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
