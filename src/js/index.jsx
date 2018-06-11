import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./App/components/ScrollToTop.jsx";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById(`reactcontent`)
);
