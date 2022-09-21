import React from "react";
import { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Welcome from "./components/Welcome";

function App() {
 


  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Welcome page</Link> 
          </li>
          <li>
            <Link to="/budget">presupuéstame</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/budget" element = {<Main/>}/>
      </Routes>
   
   
    </div>
  );
}

export default App;
