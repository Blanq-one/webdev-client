export default function Add({ a, b }: { a: number; b: number }) {
  return <p id={`wd-add-${a}-${b}`}>{`${a} + ${b} = ${a + b}`}</p>;
}
