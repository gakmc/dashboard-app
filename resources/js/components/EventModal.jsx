import React, { useState, useEffect } from "react";
import M from "materialize-css";

const EventModal = ({ eventId, title, desde, hasta, description }) => {
  const [modalInstance, setModalInstance] = useState(null);

  useEffect(() => {
    // Inicializar el modal cuando el componente se monta
    const modal = document.getElementById(`modal-${eventId}`);
    const instance = M.Modal.init(modal);
    setModalInstance(instance);

    // Limpiar la instancia del modal cuando el componente se desmonta
    return () => {
      instance && instance.destroy();
    };
  }, [eventId]);

  const openModal = () => {
    modalInstance && modalInstance.open();
  };

  return (
    <div id={`modal-${eventId}`} className="modal center">
      
      <div className="modal-content rounded">
        <h4>
          Detalles del Evento <i className="material-icons">event</i>
        </h4>
        <h4>{title}: </h4>
        <br />
        {/* Agrega aquí el contenido del modal según tus necesidades */}
        <p>
          <i className="material-icons">query_builder</i>Desde: {desde}
        </p>
        <p>
          <i className="material-icons">circle_notifications</i>Hasta: {hasta}

        </p>
        <br />
        <h5>Descripcion:</h5>
        <span>
          {description}
        </span>
      </div>

    </div>




  );
};

export default EventModal;
