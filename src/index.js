import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider as SessionProvider } from "./session/context";
import { Provider as ProjectProvider } from "./project/context";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

ReactDOM.render(
  <SessionProvider>
    <ProjectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProjectProvider>
  </SessionProvider>,
  document.getElementById("root")
);

serviceWorker.register();
