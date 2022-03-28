import React from "react";
import { GrandParent } from "./components/Optimization/GrandParent";
//import { ChildOne } from "./components/Optimization/ChildOne";
//import { ParentOne } from "./components/Optimization/ParentOne";
//import { Parent } from "./components/Parent Child/Parent";
//import { UseReducer } from "./components/UseReducer/UseReducer";
//import { UseState } from "./components/UseState/UseState";
//import { ObjectUseState } from './components/Immutable State/ObjectUseState'
//import { ArrayUseState } from "./components/Immutable State/ArrayUseState";

const App = () => {
  return (
    <div>
      {/* <UseState />
      <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      <GrandParent />
    </div>
  );
};

export default App;
