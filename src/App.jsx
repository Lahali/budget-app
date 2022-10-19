import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Welcome from "./components/Welcome";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/budget" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
