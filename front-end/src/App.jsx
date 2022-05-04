import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/form';
import Detalhes from './pages/detalhes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </div>
  );
}

export default App;
