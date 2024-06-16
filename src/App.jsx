import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Habilidades from "./pages/Habilidades";
import Experiencia from "./pages/Experiencia";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";

function App () {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/sobre" element={ <Sobre /> }/>
                <Route path="/habilidades" element={ <Habilidades /> }/>
                <Route path="/experiencia" element={ <Experiencia /> }/>
                <Route path="/projetos" element={ <Projetos /> }/>
                <Route path="/contato" element={ <Contato /> }/>
            </Routes>
        </Router>
    );
};

export default App;