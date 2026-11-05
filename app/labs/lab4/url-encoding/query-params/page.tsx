export default async function QueryParameters({
  searchParams,
}: PageProps<"/labs/lab4/url-encoding/query-params">) {
  const { a, b } = await searchParams;
  return (
    <div id="wd-query-parameters">
      <h2>Query Parameters</h2>
      <h3>{`${a} + ${b} = ${Number(a) + Number(b)}`}</h3>
    </div>
  );
}
