import './App.css';
import { BrowserRouter, Routes,Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import {Contacts} from "./pages/contacts"
import {Projects} from "./pages/projects"
import Navik from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sonder} from "./pages/projects_description/sonder"
import {Home} from "./pages/home"
import {Tgbot} from "./pages/projects_description/tgbot"
function App() {
  return (
    <BrowserRouter>
      <head>
          <link rel="icon" href="https://t2.eventshock.ru/favicon.ico"/>
          <title> Azizbek Gulomov</title>

     </head>
      <Navik />
      <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/sonder" element = {<Sonder />}/>
            <Route path="/projects/tgbot" element = {<Tgbot/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
