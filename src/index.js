import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//we are going to import BrowserRouter (Maybe former context) because our app is destined to be used in a  Web browser
//HashRouter:  add "#" before the actual root you selected, for example, "/books" becomes "/#/books/"
//unstable_HistoryRouter  : take complete control of the history of your browser navigation
//MemoryRouter :changing of routes are made in the memory, not in the browser , usually good enough when testing
//StaticRouter : only useful for server rendering page, because , it fixes the only you have to run you code in. import { StaticRouter } from "react-router-dom/server";
//NativeRouter for Ract-Native
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
