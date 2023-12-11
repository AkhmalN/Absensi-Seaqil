import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const HandleModal = ({ message, showHandleModal, closeHandleModal }) => {
  return (
    <Modal
      show={showHandleModal}
      onHide={closeHandleModal}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
    >
      <Modal.Body>
        <div className="modal-header-decline text-center">PERINGATAN!</div>
        <div className="modal-body text-center">{message}</div>
        <div
          className="d-flex justify-content-center mt-2"
          style={{ border: "none" }}
        >
          <Link to="/home" className="text-link-yakin">
            <button className="decline ms-2" onClick={closeHandleModal}>
              Tutup
            </button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default HandleModal;
