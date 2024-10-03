import React from 'react';

const AppBar: React.FC = () => {
  return (
    <header style={{
      backgroundColor: '#F9C2C4', // Color pastel
      borderRadius: '8px',
      margin: '0px',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1 style={{ fontWeight: 'bold', color: '#f1948a' }}>I LOVE NOTES</h1>
      <h2 style={{ fontWeight: 400, color: '#f1948a' }}>BIENVENIDO A TU ESPACIO DE NOTAS</h2>
    </header>
  );
};

export default AppBar;