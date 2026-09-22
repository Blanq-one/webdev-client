import Image from "next/image";

export default function Images() {
  return (
    <div id="wd-images">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        width={400}
        height={300}
        alt="Starship"
      />
      <Image src="/teslabot.jpg" width={300} height={400} alt="Teslabot" />
    </div>
  );
}
