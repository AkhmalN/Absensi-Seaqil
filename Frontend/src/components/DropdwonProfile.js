import Dropdown from "react-bootstrap/Dropdown";
import akun from "../assets/Users/akun.png";
import "../App.css";
import { Link } from "react-router-dom";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function DropdownProfile() {
  const [showDelete, setShowDelete] = useState(false);
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
          <Link to="/rekap_presensi" className="text-link">
            Rekap Presensi
          </Link>
        </li>
        <li>
          <Link to="/status_pengajuan" className="text-link">
            Pengajuan Izin
          </Link>
        </li>
        <li>
          <Link to="/..." className="text-link">
            Reset Password
          </Link>
        </li>
        {/* <li className="centered-text">
          <button className="btn-pro">Rekap Absensi</button>
        </li>
        <li className="centered-text">
          <button className="btn-pro">Pengajuan Izin</button>
  </li>*/}

        {/* COBA MODAL */}
        <Modal
          show={showDelete}
          onHide={handleCloseDelete}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          size="sm">
          <Modal.Body>
            <div className="modal-header-decline text-center">PERINGATAN!</div>
            <div className="modal-body text-center">
              Anda yakin ingin keluar?
            </div>
            <div
              className="d-flex justify-content-center mt-2"
              style={{ border: "none" }}>
              <button className="batal-btn me-2" onClick={handleCloseDelete}>
                Batal
              </button>
              <Link to="/login" className="text-link-yakin">
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
