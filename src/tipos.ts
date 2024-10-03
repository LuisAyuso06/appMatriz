export interface Nota {
    id: string;
    titulo: string;
    contenido: string;
    categoria?: string;
    etiquetas?: string[];
    color?: string;
  }