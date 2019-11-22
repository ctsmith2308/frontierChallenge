import React from "react";
import "./App.css";

import Main from "./components/main";
// TODO:
// Add Redux and React Router
// NOTE: Imported Main component here as a wrapper. The wrapper compononent should render
// the header and footer once, if the main contents of the page were to change to another view
// then render that view, and don't re-render the footer and header

function App() {
  return <Main />;
}

export default App;
