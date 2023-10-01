import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import Home from './pages/Home/Home.jsx';
import FicheLogement from './pages/FicheLogement/FicheLogement.jsx';
import APropos from './pages/A-Propos/A-Propos.jsx';
import PageIntrouvable from './pages/Page-Introuvable/Page-Introuvable.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche-Logement/:id" element={<FicheLogement />} />
        <Route path="/A-Propos" element={<APropos />} />
        <Route path="*" element={<PageIntrouvable />} />
      </Routes>
    </Router>
  </React.StrictMode>
);