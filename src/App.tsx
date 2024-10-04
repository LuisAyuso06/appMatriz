import React, { useState } from 'react';
import { NotasProvider } from './NotasContexto';
import AppBar from './AppBar';
import PanelAgregarNota from './PanelAgregarNotas';
import PanelColeccionNotas from './PanelColeccionNotas';
import './App.css'; 

const App: React.FC = () => {
  const [mostrarPanelAgregar, setMostrarPanelAgregar] = useState(false);
  const [mostrarPanelColeccion, setMostrarPanelColeccion] = useState(false);

  return (
    <NotasProvider>
      <div className="app-container">
        <AppBar />
        <div className="button-container">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <button className="styled-button" onClick={() => setMostrarPanelAgregar(true)}>
          <span className="material-symbols-outlined">add_notes</span>
          </button>
          <button className="styled-button" onClick={() => setMostrarPanelColeccion(true)}>
          <span className="material-symbols-outlined">visibility</span>
          </button>
        </div>
        {mostrarPanelAgregar && <PanelAgregarNota onClose={() => setMostrarPanelAgregar(false)} />}
        {mostrarPanelColeccion && <PanelColeccionNotas onClose={() => setMostrarPanelColeccion(false)} />}
      </div>
    </NotasProvider>
  );
};

export default App;
