import React from 'react';
import { Nota as NotaTipo } from '../src/tipos';
import Draggable from 'react-draggable'; // Importa Draggable
import './Nota.css'; // Asegúrate de importar el archivo CSS que contiene los estilos

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
          <button onClick={onEditar} className="styled-button1">Editar</button>
          <button onClick={onEliminar} className="styled-button1">Eliminar</button>
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
