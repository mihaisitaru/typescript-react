import React, { useState } from "react";
import CounterOutput from "./CounterOutput";

function App() {
  let [state, setState] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ textAlign: "center" }}>
          <CounterOutput counter={state > 0 ? state : 0} />
          <button onClick={() => setState(++state)}>Increment</button>
          <button onClick={() => setState(state > 0 ? --state : 0)}>
            Decrement
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
