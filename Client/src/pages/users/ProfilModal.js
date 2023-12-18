import { useState } from "react";
import { Form, FormLabel, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { faEye, faEyeSlash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function ProfilModal({
  isOpen,
  onClose,
  local_username,
  local_shift,
  local_divisi,
  local_id_msib,
  local_image,
  local_password,
  local_role,
  user_id,
}) {
  const [showPassword, setShowPassword] = useState(null);
  const [akunImage, setAkunImage] = useState(local_image);
  const [username, setUsername] = useState(local_username);
  const [shift, setShift] = useState(local_shift);
  const [divisi, setDivisi] = useState(local_divisi);
  const [idMsib, setIdMsib] = useState(local_id_msib);
  const [password, setPassword] = useState(local_password);
  const [role, setRole] = useState(local_role);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setAkunImage(event.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleOnUpdate = async () => {
    const data = {
      username: username,
      shift: shift,
      divisi: divisi,
      id_msib: idMsib,
      image: akunImage,
      password: password,
    };

    try {
      await axios
        .patch(`http://localhost:8081/api/v1/users/${user_id}`, data)
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log("Error during update:", error);
    }
  };
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title> {local_username}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center w-25 border border-secondary rounded-circle p-2 mx-auto d-block ">
          <img
            src={akunImage}
            alt="Akun"
            className="rounded-circle"
            style={{ width: "80px", height: "80px" }}
          />
          <div className="overlay">
            <label htmlFor="upload-image" className="overlay-content">
              <FontAwesomeIcon icon={faPen} />
            </label>
            <input
              type="file"
              id="upload-image"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>ID Kegiatan : </Form.Label>
            <Form.Control
              value={local_id_msib}
              type="text"
              onChange={(e) => setIdMsib(e.target.value)}
            />
            <Form.Label>Nama : </Form.Label>
            <Form.Control
              value={local_username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Label>Divisi : </Form.Label>
            <Form.Control
              value={local_divisi}
              type="text"
              onChange={(e) => setDivisi(e.target.value)}
            />
            <Form.Label>Shift : </Form.Label>
            <Form.Control
              value={local_shift}
              type="text"
              onChange={(e) => setShift(e.target.value)}
            />
            <Form.Label>Password : </Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={local_password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputGroup.Text onClick={togglePasswordVisibility}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleOnUpdate(user_id)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProfilModal;
