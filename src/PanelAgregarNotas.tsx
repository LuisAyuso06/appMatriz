import React, { useState } from 'react';
import { useNotas } from './NotasContexto';
import { Nota } from './tipos';
import './PanelAgregarNota.css'; // Importa el archivo CSS para los estilos

const PanelAgregarNota: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { despachar } = useNotas();
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [categoria, setCategoria] = useState('');
  const [etiquetas, setEtiquetas] = useState('');

  const generarColorPastel = (): string => {
    const r = Math.floor(Math.random() * 127) + 127;
    const g = Math.floor(Math.random() * 127) + 127;
    const b = Math.floor(Math.random() * 127) + 127;
    return `rgb(${r}, ${g}, ${b})`;
  };

  const agregarNota = () => {
    const nuevaNota: Nota = {
      id: Date.now().toString(),
      titulo,
      contenido,
      categoria,
      etiquetas: etiquetas.split(','),
      color: generarColorPastel(),
    };
    despachar({ type: 'AGREGAR_NOTA', payload: nuevaNota });
    onClose();
  };

  return (
    <div className="panel-agregar-nota">
      <h3>Agregar Nota</h3>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        className="styled-input"
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={e => setContenido(e.target.value)}
        className="styled-input"
      />
      <input
        type="text"
        placeholder="Categoría (opcional)"
        value={categoria}
        onChange={e => setCategoria(e.target.value)}
        className="styled-input"
      />
      <input
        type="text"
        placeholder="Etiquetas (opcional)"
        value={etiquetas}
        onChange={e => setEtiquetas(e.target.value)}
        className="styled-input"
      />
      <div className="button-container">
        <button onClick={agregarNota} className="styled-button">Guardar</button>
        <button onClick={onClose} className="styled-button cancel-button">Cancelar</button>
      </div>
    </div>
  );
};

export default PanelAgregarNota;

