import React from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
const ResetPasswordModal = ({
  showResetPassword,
  handleCloseResetPassword,
}) => {
  return (
    <Modal
      show={showResetPassword}
      onHide={handleCloseResetPassword}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
    >
      <Modal.Body className="modal-body">
        <Modal.Body>
          <div className="modal-header-reset mb-3">
            Reset Password
            <div className="form-reset">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password Lama</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password Baru</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div
            className="d-flex justify-content-center mt-4"
            style={{ border: "none" }}
          >
            <button
              className="batal-btn me-2"
              onClick={handleCloseResetPassword}
            >
              Batal
            </button>
            <button className="edit-btn ms-2">Simpan</button>
          </div>
        </Modal.Body>
      </Modal.Body>
    </Modal>
  );
};

export default ResetPasswordModal;
