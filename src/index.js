import React from "react";
import ReactDOM from "react-dom";

//import router
import {BrowserRouter, Switch} from "react-router-dom"
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Switch>
    <App />
    </Switch>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById("root")
);
