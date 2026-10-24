export default function Add({ a, b }: { a: number; b: number }) {
  return (
    <div className="wd-add" data-a={a} data-b={b}>
      <h4>Add</h4>
      <p>{`${a} + ${b} = ${a + b}`}</p>
      <p>{`${a}+${b}=${a + b}`}</p>
      <p>{`a + b = ${a + b} (a = ${a}, b = ${b})`}</p>
      <p>{`Add(${a}, ${b}) = ${a + b}`}</p>
    </div>
  );
}
