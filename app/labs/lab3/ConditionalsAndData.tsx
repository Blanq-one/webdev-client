const functionScoped = "function scoped";
const trueVar = true;
const falseVar = false;
const age = 20;
const hour = 9;
const user: string | null = null;
const nullValue: string | null = null;
const house: {
  bedrooms: number;
  bathrooms: number;
  owners: string[];
  garage?: { cars: number };
} = {
  bedrooms: 4,
  bathrooms: 3,
  owners: ["Ronaldo", "Goku", "Neymar", "Luffy"],
};
const sampleObject = {
  name: "Krish",
  address: { city: "Boston", state: "MA" },
  courses: ["CS5610", "CS5800"],
};

export default function ConditionalsAndData() {
  return (
    <div id="wd-conditionals-data">
      <h3>Variables and Constants (3.2.1)</h3>
      <p>Scope: {functionScoped}</p>

      <h3>Boolean Variables (3.2.2)</h3>
      <p>trueVar = {String(trueVar)}</p>
      <p>falseVar = {String(falseVar)}</p>

      <h3>If Else (3.2.3)</h3>
      {trueVar && <p>true1</p>}
      {!falseVar && <p>not false1</p>}
      {!falseVar && <p>not false1</p>}

      <h3>Ternary Operator (3.2.4)</h3>
      <p>{age >= 18 ? "Adult" : "Minor"}</p>
      <p>{hour < 12 ? "Good morning" : "Good afternoon"}</p>

      <h3>Inline Conditional (3.2.5)</h3>
      <p>{user ? "Welcome back" : "Guest Inline"}</p>
      <p>{`nullValue ?? "default" => ${nullValue ?? "default"}`}</p>

      <h3>JSON.stringify (3.4.1)</h3>
      <pre>{JSON.stringify(sampleObject, null, 2)}</pre>

      <h3>House Destructuring (3.4.2)</h3>
      <p>
        Bedrooms: {house.bedrooms}
      </p>
      <h4>bathrooms</h4>
      <p>Bathrooms: {house.bathrooms}</p>
      <h5>owners</h5>
      <p>{house.owners.join(", ")}</p>

      <h3>Optional Chaining (3.4.3)</h3>
      <p>{`house.garage?.cars ?? 0 => ${house.garage?.cars ?? 0}`}</p>
    </div>
  );
}