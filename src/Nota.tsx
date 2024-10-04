import React from 'react';
import { Nota as NotaTipo } from '../src/tipos';
import Draggable from 'react-draggable'; // Importa Draggable
import './Nota.css'; 

const Nota: React.FC<{ nota: NotaTipo; onEliminar: () => void; onEditar: () => void; }> = ({ nota, onEliminar, onEditar }) => {
  return (
    <Draggable>
      <div className="nota" style={{
        backgroundColor: nota.color,
        borderRadius: '8px',
        width: '225px',
        padding: '35px',
        margin: '5px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        position: 'absolute', // Posiciona de manera absoluta para mover libremente
      }}>
        <div className="botones">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
          <button onClick={onEditar} className="styled-button1"><span className="material-symbols-outlined">
edit_note
</span></button>

          <button onClick={onEliminar} className="styled-button1"><span className="material-symbols-outlined">
delete
</span></button>
        </div>
        <h3 style={{ fontWeight: 500 }}>{nota.titulo}</h3>
        <p>{nota.contenido}</p>
        {nota.categoria && <p>Categoría: {nota.categoria}</p>}
        {nota.etiquetas && <p>Etiquetas: {nota.etiquetas.join(', ')}</p>}
      </div>
      
    </Draggable>
  );
};

export default Nota;
