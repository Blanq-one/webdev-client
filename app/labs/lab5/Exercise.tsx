export default function Exercise({
  id,
  title,
  href,
}: Readonly<{ id: string; title: string; href: string }>) {
  return (
    <div id={`${id}-exercise`}>
      <h4>{title}</h4>
      <a id={id} href={href}>
        {href}
      </a>
    </div>
  );
}
