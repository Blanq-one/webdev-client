export default async function PathParameters({
  params,
}: PageProps<"/labs/lab4/url-encoding/path-params/[a]/[b]">) {
  const { a, b } = await params;
  return (
    <div id="wd-path-parameters">
      <h2>Path Parameters</h2>
      <h3>{`${a} + ${b} = ${Number(a) + Number(b)}`}</h3>
    </div>
  );
}
