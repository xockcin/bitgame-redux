import React from "react";
import {Counter} from "./components/Counter";
import { Display } from "./components/Display";
import { Retro } from "./components/Retro";
import { Tokens } from "./components/Tokens";
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