import './App.css';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import React from 'react';
import {Contacts} from "./pages/contacts"
import {Projects} from "./pages/projects"
import Navik from "./components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sonder} from "./pages/projects_description/sonder"
import {Home} from "./pages/home"
import RetroLoadingAnimation from "./pages/example";
import {Tgbot} from "./pages/projects_description/tgbot"
import {Vpn} from "./pages/projects_description/vpnclient"
import TvNoiseTransition from "./components/transition"
function App() {
  return (
    <BrowserRouter>
      <TvNoiseTransition></TvNoiseTransition>
      <head>
          <link rel="icon" href="https://t2.eventshock.ru/favicon.ico"/>
          <title> Azizbek Gulomov</title>

     </head>
      <Navik />
      
      <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/example" element={<RetroLoadingAnimation></RetroLoadingAnimation>} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/sonder" element = {<Sonder />}/>
            <Route path="/projects/tgbot" element = {<Tgbot/>}/>
            <Route path="/projects/vpn" element = {<Vpn/>}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
