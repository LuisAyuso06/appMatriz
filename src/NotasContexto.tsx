import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Nota } from '../src/tipos';

// Estado inicial
const estadoInicial: Nota[] = [];
const NotasContext = createContext<any>(null);

// Reducir para manejar acciones de notas
const notasReducer = (estado: Nota[], accion: any) => {
  switch (accion.type) {
    case 'AGREGAR_NOTA':
      return [...estado, accion.payload];
    case 'ELIMINAR_NOTA':
      return estado.filter(nota => nota.id !== accion.payload);
    case 'EDITAR_NOTA':
      return estado.map(nota =>
        nota.id === accion.payload.id ? { ...nota, ...accion.payload } : nota
      );
    default:
      return estado;
  }
};

// Proveedor del contexto
export const NotasProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [estado, despachar] = useReducer(notasReducer, estadoInicial);

  return (
    <NotasContext.Provider value={{ estado, despachar }}>
      {children}
    </NotasContext.Provider>
  );
};

// Hook para usar el contexto
export const useNotas = () => useContext(NotasContext);