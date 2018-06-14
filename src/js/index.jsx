import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./App/components/ScrollToTop.jsx";
import WebfontLoader from "@dr-kobros/react-webfont-loader";

import integral from "../assets/fonts/integral/integral.css";
import circular from "../assets/fonts/circular/circular.css";
import sinkinsans from "../assets/fonts/sinkinsans/sinkinsans.css";
import archivo from "../assets/fonts/archivo/archivo.css";

const config = {
  custom: {
    families: ["circular", "sinkinsans", "archivo", "integral"],
    urls: [circular, sinkinsans, archivo, integral]
  }
};

/* basename */

ReactDOM.render(
  <HashRouter>
    <ScrollToTop>
      <WebfontLoader config={config}>
        <App />
      </WebfontLoader>
    </ScrollToTop>
  </HashRouter>,
  document.getElementById(`reactcontent`)
);
