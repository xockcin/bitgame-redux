import React from "react";
import {Counter} from "./features/counter/Counter";
import {Display} from "./features/display/Display"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Display />
      <Counter />
    </div>
  );
}

export default App;