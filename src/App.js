import React from "react";
import {Counter} from "./features/counter/Counter";
import {Display} from "./features/display/Display"
import {Retro} from "./features/retro/Retro"
import {Tokens} from "./features/tokens/Tokens"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Tokens />
      <Display />
      <Counter />
    </div>
  );
}

export default App;