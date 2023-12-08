import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function LogoutModal({ showLogout, handleCloseLogout }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState(null);
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername);
  }, []);

  const handleOnLogout = () => {
    localStorage.removeItem("divisi");
    localStorage.removeItem("id_msib");
    localStorage.removeItem("shift");
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <Modal
      show={showLogout}
      onHide={handleCloseLogout}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      size="sm"
    >
      <Modal.Body>
        <div className="modal-header-decline text-center">PERINGATAN!</div>
        <div className="modal-body text-center">
          Anda yakin ingin keluar dari akun {username}?
        </div>
        <div
          className="d-flex justify-content-center mt-2"
          style={{ border: "none" }}
        >
          <button className="batal-btn me-2" onClick={handleCloseLogout}>
            Batal
          </button>
          <Link to="/" className="text-link-yakin">
            <button className="decline ms-2" onClick={handleOnLogout}>
              Yakin
            </button>
          </Link>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LogoutModal;
