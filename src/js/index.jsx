import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./App/components/ScrollToTop.jsx";
import WebfontLoader from "@dr-kobros/react-webfont-loader";
import integral from "../assets/fonts/integral/integral.css";

const config = {
  custom: {
    families: ["circular", "sinkinsans", "archivo", "integral"],
    urls: [
      "./assets/fonts/circular/circular.css",
      "./assets/fonts/sinkinsans/sinkinsans.css",
      "./assets/fonts/archivo/archivo.css",
      integral
    ]
  }
};

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <WebfontLoader config={config}>
        <App />
      </WebfontLoader>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById(`reactcontent`)
);
