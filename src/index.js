import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Teklanika" />
    <NameTag name="Denali" />
    <NameTag name="Foraker" />
    <NameTag name="Hunter" />
    <NameTag name="Wickersham" />
    <NameTag name="Matanuska" />
    <NameTag name="Knik" />
    <NameTag name="Talkeetna" />
    <NameTag name="Susitna" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
