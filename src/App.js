import React from "react";
import { Display } from "./components/Display";
import { Retro } from "./components/Retro";
import { Tokens } from "./components/Tokens";
import {Buttons} from "./components/Buttons"
import {Bytes} from "./components/Bytes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Tokens />
      <Display />
      <Bytes />
      <Buttons />
    </div>
  );
}

export default App;