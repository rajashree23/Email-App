import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { MailContextProvider } from "./context/MailProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <MailContextProvider>
      <App />
    </MailContextProvider>
  </Router>
);
