import ClickCounter from "./ClickCounter";
import ParentStateComponent from "./ParentStateComponent";
import ZustandCounter from "./ZustandCounter";
import ReduxCounter from "./ReduxCounter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";

export default function Lab4() {
  return (
    <div id="wd-lab4">
      <h2>Lab 4</h2>
      <ClickCounter />
      <ParentStateComponent />
      <ZustandCounter />
      <ReduxCounter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
    </div>
  );
}
