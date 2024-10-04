import React from 'react';
import { useNotas } from '../src/NotasContexto';
import Nota from '../src/Nota';
import Swal from 'sweetalert2';
import './PanelColeccionNotas.css'; // Asegúrate de importar el CSS

const PanelColeccionNotas: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { estado, despachar } = useNotas();

  // Función para eliminar una nota con confirmación
  const handleEliminarNota = (id: string) => {
    const swalWithStyledButtons = Swal.mixin({
      customClass: {
        confirmButton: 'styled-button swal2-confirm-button',  // Aplica tus clases personalizadas
        cancelButton: 'styled-button swal2-cancel-button'     // Aplica tus clases personalizadas
      },
      buttonsStyling: false // Desactiva los estilos por defecto de SweetAlert2
    });

    swalWithStyledButtons.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esta acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText:'Si, continuar' ,
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        despachar({ type: 'ELIMINAR_NOTA', payload: id }); // Elimina la nota
        swalWithStyledButtons.fire(
          '¡Eliminada!',
          'Tu nota ha sido eliminada.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithStyledButtons.fire(
          'Cancelado',
          'Tu nota está a salvo :)',
          'error'
        );
      }
    });
  };

  // Función para editar una nota (ejemplo básico)
  const handleEditarNota = (nota: any) => {
    const nuevoTitulo = prompt("Edita el título", nota.titulo); // Un ejemplo simple de edición
    if (nuevoTitulo) {
      despachar({
        type: 'EDITAR_NOTA',
        payload: { ...nota, titulo: nuevoTitulo }
      });
    }
  };

  return (
    <>
      <h3>Colección de Notas</h3>

      <div style={{
      }}>
        {estado.map(nota => (
          <Nota 
            key={nota.id}
            nota={nota}
            onEliminar={() => handleEliminarNota(nota.id)}
            onEditar={() => handleEditarNota(nota)} 
          />
        ))}
      </div>
      <div>
        <button onClick={onClose} className="styled-button">Cerrar</button>
      </div>
    </>
  );
};

export default PanelColeccionNotas;