import React from "react";
import "./App.scss";

import History from "./components/History";
import Result from "./components/Result";
import CalcButton from "./components/CalcButton";

function App() {
  return (
    <div className="App">
      <History />
      <Result />
      <CalcButton />
    </div>
  );
}

export default App;
