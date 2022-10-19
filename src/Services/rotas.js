import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Components/Home/index.jsx';
import Onu from '../Components/Onu/index.jsx';
import Projects from '../Components/Projects/index.jsx';
import SobreMim from '../Components/SobreMim/index.jsx';

export default function Rotas(){

  return(
    <Router>
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/Onu" element={<Onu/>}/>
     <Route path="/Projects" element={<Projects/>}/>
     <Route path="/SobreMim" element={<SobreMim/>}/>
    </Routes> 
    </Router>
  )
}
