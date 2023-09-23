import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Compo/Home";
import Nav from "./Compo/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Compo/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
