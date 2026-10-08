export default function TailwindResponsiveShowHide() {
  return (
    <div id="wd-tailwind-responsive-show-hide">
      <p className="block md:hidden bg-red-200 text-black p-2">small screen</p>
      <p className="hidden md:block bg-green-200 text-black p-2">large screen</p>
    </div>
  );
}
