/* eslint-disable @next/next/no-img-element */
const src = "/images/reactjs.jpg";

export default function TailwindFilters() {
  return (
    <div>
      <h2>Blurs</h2>
      <div className="flex">
        <img src={src} className="blur-none w-1/4" alt="blur none" />
        <img src={src} className="blur-sm w-1/4" alt="blur sm" />
        <img src={src} className="blur-lg w-1/4" alt="blur lg" />
        <img src={src} className="blur-2xl w-1/4" alt="blur 2xl" />
      </div>
      <h3 className="text-xl font-semibold mt-4">Contrast</h3>
      <div className="flex">
        <img src={src} className="contrast-50 w-1/4" alt="contrast 50" />
        <img src={src} className="contrast-100 w-1/4" alt="contrast 100" />
        <img src={src} className="contrast-150 w-1/4" alt="contrast 150" />
        <img src={src} className="contrast-200 w-1/4" alt="contrast 200" />
      </div>
      <div id="wd-ai-filters">
        <h3 className="text-xl font-semibold mt-4">Grayscale and brightness</h3>
        <div className="flex">
          <img src={src} className="grayscale w-1/4" alt="grayscale" />
          <img src={src} className="grayscale-0 w-1/4" alt="grayscale 0" />
          <img src={src} className="brightness-50 w-1/4" alt="brightness 50" />
          <img src={src} className="brightness-150 w-1/4" alt="brightness 150" />
        </div>
      </div>
    </div>
  );
}
