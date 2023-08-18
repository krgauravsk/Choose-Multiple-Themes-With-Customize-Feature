import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom';
import App from "./App";

import * as themes from "./theme/schema.json";
import { setToLS } from "./utils/storage";

const Index = () => {
  setToLS("all-themes", themes.default);
  return <App />;
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Index />
  </StrictMode>
);
// ReactDOM.render(
//   <Index />
//   document.getElementById('root'),
// );

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
