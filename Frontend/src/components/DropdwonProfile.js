import Dropdown from "react-bootstrap/Dropdown";
import akun from "../assets/Users/akun.png";
import "../App.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function DropdownProfile() {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showAlertEdit, setShowAlertEdit] = useState(false);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseAlertEdit = () => setShowAlertEdit(false);
  const handleShowAlertEdit = () => {
    setShowAlertEdit(true);
    setTimeout(() => {
      setShowAlertEdit(false);
    }, 2000);
  };

  const ButtonEdit = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseEdit();
    handleShowAlertEdit();
  };

  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowAlertDelete = () => {
    setShowAlertDelete(true);
    setTimeout(() => {
      setShowAlertDelete(false);
    }, 2000);
  };
  const ButtonYakin = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseDelete();
    handleShowAlertDelete();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle>
        <img className="" src={akun} alt="logo" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu">
        <li className="name-centered-text">Clarance Liew</li>
        <li className="centered-text">ID 1234567</li>
        <li className="centered-text" style={{ paddingBottom: "15px" }}>
          Web Designer
        </li>
        <li>
          <Link to="/status_pengajuan" className="text-link">
            Pengajuan Izin
          </Link>
        </li>
        <li>
          <Link className="text-link" onClick={handleShowEdit}>
            Reset Password
          </Link>
        </li>

        {/* BUTTON EDIT */}
        <Modal show={showEdit} onHide={handleCloseEdit} aria-labelledby="contained-modal-title-vcenter" centered size="sm">
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

              <div className="d-flex justify-content-center mt-4" style={{ border: "none" }}>
                <button className="batal-btn me-2" onClick={handleCloseEdit}>
                  Batal
                </button>
                <button className="edit-btn ms-2" onClick={ButtonEdit}>
                  Simpan
                </button>
              </div>
            </Modal.Body>
          </Modal.Body>
        </Modal>
        {/* END OF BUTTON EDIT */}

        {/* COBA MODAL */}
        <Modal show={showDelete} onHide={handleCloseDelete} aria-labelledby="contained-modal-title-vcenter" centered size="sm">
          <Modal.Body>
            <div className="modal-header-decline text-center">PERINGATAN!</div>
            <div className="modal-body text-center">Anda yakin ingin keluar?</div>
            <div className="d-flex justify-content-center mt-2" style={{ border: "none" }}>
              <button className="batal-btn me-2" onClick={handleCloseDelete}>
                Batal
              </button>
              <Link to="/" className="text-link-yakin">
                <button className="decline ms-2" onClick={ButtonYakin}>
                  Yakin
                </button>
              </Link>
            </div>
          </Modal.Body>
        </Modal>
        {/* BATAS */}

        <li className="centered-text">
          <button className="btn-log" onClick={handleShowDelete}>
            Keluar
          </button>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownProfile;
