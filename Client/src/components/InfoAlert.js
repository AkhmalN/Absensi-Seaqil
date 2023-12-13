import { Modal } from "react-bootstrap";

function InfoAlert(props) {
  return (
    <Modal
      className="modalIzin text-center"
      show={props.show}
      onHide={props.handleClose}
      size="sm"
    >
      <Modal.Body>
        <svg
          width="70"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.icon}
        </svg>
        <p style={props.color}>{props.message}</p>
      </Modal.Body>
    </Modal>
  );
}

export default InfoAlert;
