import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import AboutusPage from './pages/Aboutus.js';
import ServiciosPage from './pages/Servicios.js';
import ContactoPage from './pages/Contacto.js';
import UnderconstructionPage from './pages/Underconstruction.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/aboutus" element={<AboutusPage />} />
         
      <Route path="/servicios" element={<ServiciosPage />} />
         
      <Route path="/contacto" element={<ContactoPage />} />
         
      <Route path="/underconstruction" element={<UnderconstructionPage />} />
    </Routes>
  );
}

export default App;
