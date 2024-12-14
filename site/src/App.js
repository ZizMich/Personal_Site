import './App.css';
import { BrowserRouter, Routes,Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import {Contacts} from "./pages/contacts"
import {Projects} from "./pages/projects"
import Navik from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sonder} from "./pages/projects_description/sonder"
import {Home} from "./pages/home"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navik />
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/sonder" element = {<Sonder />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
