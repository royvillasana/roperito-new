import { Modal, Button } from "react-bootstrap";
import React from "react";
import "./CustomModal.css"; // Asegúrate de importar los estilos

export default function CustomModal({
  showConfirm,
  cancelDelete,
  confirmDelete,
}) {
  return (
    <Modal
      show={showConfirm}
      onHide={cancelDelete}
      centered
      contentClassName="custom-modal-content"
      backdropClassName="custom-modal-backdrop"
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title>Confirmar eliminación</Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-modal-body">
        ¿Estás seguro de que deseas eliminar este producto?
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <Button variant="light" className="btn-cancel" onClick={cancelDelete}>
          Cancelar
        </Button>
        <Button variant="danger" className="btn-delete" onClick={confirmDelete}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
