import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import CardGrid from './components/CardGrid';
import ClickCounter from './components/ClickCounter';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/contact">Formulaire de contact</Link></li>
            <li><Link to="/cards">Grille de cartes</Link></li>
            <li><Link to="/counter">Compteur de clics</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contact" element={<ContactForm />} /> 
          <Route path="/cards" element={<CardGrid />} />
          <Route path="/counter" element={<ClickCounter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
