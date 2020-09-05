import React from "react";
import ReactDOM from "react-dom";

const firstName = "Abdullah";
const currentDate = new Date();
const lastName = "Mujahid";
const year = currentDate.getFullYear();
ReactDOM.render(
  <div>
    <h1>
      My name is {firstName} {lastName}
    </h1>
    <p>
      Created by {firstName} {lastName}
    </p>
    Copyright {year}
    <p></p>
  </div>,
  document.getElementById("root")
);
