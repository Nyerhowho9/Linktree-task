import React from 'react';
import { Route, Link, Switch, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import '../src/styles/main.css';


function App() {
  return (
        <Routes>
          <Route exact path="/Linktree-task" element={<Home/>}/>
          <Route path="/contact" element={<Contactus/>}/>
          
        </Routes>
  );
}

export default App;
