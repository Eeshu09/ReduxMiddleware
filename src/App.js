import React from "react";
import "./App.css";
import logo from '../src/Components/img/hdfclogo.png'
import Part1 from '../src/Pages/Part1'
import Part2 from '../src/Pages/Part2'
import Part3 from '../src/Pages/Part3'
import {Routes,Route} from 'react-router-dom'


function App() {
  
  return (
    <div>
       <div style={{ display: "flex" }}>
        <img
          src={logo}
          alt="Logo"
          style={{ marginLeft: "15px", width: "200px", height: "auto" }}
        />
      </div>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Assessment Information
      </h1>
      <Routes>
        <Route path="/" element={<Part1/>}/>
        {/* <Route path ="/part2" element={<Part2/>}/> */}
        {/* <Route path="/part3" element={<Part3/>}/> */}
        <Route/>
      </Routes>

      {/* <Mainform /> */}
    </div>
  );
}

export default App;
