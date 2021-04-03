import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// In dev mode React will still shows errors after catching with ErrorBoundary
if (process.env.NODE_ENV === "development") {
  import("react-error-overlay").then((m) => {
    m.stopReportingRuntimeErrors();
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
