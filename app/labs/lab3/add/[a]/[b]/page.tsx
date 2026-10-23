export default async function AddPathParameters({
  params,
}: PageProps<"/labs/lab3/add/[a]/[b]">) {
  const { a, b } = await params;
  return (
    <div id="wd-add-path-parameters">
      <h2>Add Path Parameters</h2>
      <h3>
        {a} + {b} = {Number(a) + Number(b)}
      </h3>
    </div>
  );
}