import MathFunctions, { add, subtract } from "./functions";
import * as MathNs from "./functions";

export default function Imports() {
  return (
    <div id="wd-imports">
      <h3>Imports (3.4.4)</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Default object</th>
            <th>Namespace</th>
            <th>Named functions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MathFunctions.add(1, 2) = {MathFunctions.add(1, 2)}</td>
            <td>MathNs.add(1, 2) = {MathNs.add(1, 2)}</td>
            <td>add(1, 2) = {add(1, 2)}</td>
          </tr>
          <tr>
            <td>MathFunctions.subtract(5, 2) = {MathFunctions.subtract(5, 2)}</td>
            <td>MathNs.subtract(5, 2) = {MathNs.subtract(5, 2)}</td>
            <td>subtract(5, 2) = {subtract(5, 2)}</td>
          </tr>
          <tr>
            <td>MathFunctions.add(2, 2) = {MathFunctions.add(2, 2)}</td>
            <td>MathNs.add(2, 2) = {MathNs.add(2, 2)}</td>
            <td>add(2, 2) = {add(2, 2)}</td>
          </tr>
          <tr>
            <td>MathFunctions.subtract(9, 4) = {MathFunctions.subtract(9, 4)}</td>
            <td>MathNs.subtract(9, 4) = {MathNs.subtract(9, 4)}</td>
            <td>subtract(9, 4) = {subtract(9, 4)}</td>
          </tr>
          <tr>
            <td>{MathFunctions.add(10, 20)}</td>
            <td>{MathNs.add(10, 20)}</td>
            <td>{add(10, 20)}</td>
          </tr>
        </tbody>
      </table>
      <p>
        add(10, 20) = {add(10, 20)}
      </p>
    </div>
  );
}