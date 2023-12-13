import { Modal } from "react-bootstrap";
import Checklist from "../../src/assets/Users/checlist.png"

function PopupAbsen(props) {
  return (
    <Modal
      className="modalAbsen text-center"
      show={props.showPopupAbsen}
      onHide={props.handleClose}
      size="sm"
    >
      <Modal.Body>
   <div className="modal-body text-center">
   <img src={Checklist} alt="check" />

     <p>Absen berhasil! Anda masuk pada jam {new Date().getHours()} :{new Date().getMinutes()}</p>
   </div>
   <div
     className="d-flex justify-content-center mt-2"
     style={{ border: "none"}}>
     <button
       className="decline ms-2"
       style={{position: "absolute",
       bottom: "10px",
       left: "50%",
       transform: "translateX(-50%)",
       fontSize: 14,
       color: "white", }}
       onClick={props.handleClosePopupAbsen}>
       Lanjutkan
     </button>
   </div>
          {props.icon}
        <p style={props.color}>{props.message}</p>
      </Modal.Body>
    </Modal>
  );
}

export default PopupAbsen;
