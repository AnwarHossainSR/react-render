import React, { useState } from "react";
import { ChildOne } from "./ChildOne";
import { OptimizedParentOne } from "./OptimizedParentOne";

export const GrandParent = () => {
  const [newCount, setNewCount] = useState(0);
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>
        GrandParent Count - {newCount}
      </button>
      <OptimizedParentOne newCount={newCount}>
        <ChildOne />
      </OptimizedParentOne>
    </div>
  );
};
