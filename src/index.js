import React from "react";
import ReactDOM from "react-dom";
// import PrimeraApp from "./PrineraApp";
import CounterApp from "./CounterApp"
import "./index.css"


const root = document.querySelector("#root");

ReactDOM.render(<CounterApp value={10} />, root);