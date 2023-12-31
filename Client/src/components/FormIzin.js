import { Button, Form, Modal, ProgressBar } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import InfoAlert from "./InfoAlert";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function FormIzin() {
  const [file, setFile] = useState(null);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [message, setMessage] = useState(null);
  const [succses, setSuccses] = useState(null);

  const [idMsib, setIdMsib] = useState(null);
  const [username, setUsername] = useState(null);
  const [divisi, setDivisi] = useState(null);
  const [statusPengajuan, setStatusPengajuan] = useState(null);
  const [tanggalPengajuan, setTanggalPengajuan] = useState(null);
  const [dokumen, setDokumen] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedDivisi = localStorage.getItem("divisi");
    const ID_MSIB = localStorage.getItem("id_msib");

    setUsername(storedUsername);
    setDivisi(storedDivisi);
    setIdMsib(ID_MSIB);
  });

  const handleClose = () => setShow(false);
  const handleUploadFile = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Tidak ada file yang dipilih!");
      setSuccses(false);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
      return;
    }

    const fd = new FormData();
    fd.append("file", file);

    setMessage("Mengunggah...");

    setProgress((prevState) => {
      return { ...prevState, started: true };
    });

    axios
      .post("http://httpbin.org/post", fd, {
        onUploadProgress: (progressEvent) => {
          setProgress((prevState) => {
            return { ...prevState, pc: progressEvent.progress * 100 };
          });
        },
        headers: {
          "Custom-Header": "value",
        },
      })
      .then((res) => {
        setMessage("Berhasil Mengunggah");
        setSuccses(true);
        setDokumen(res.data.files.file);
        // Reset state values after successful upload
        setProgress({ started: false, pc: 0 });
        setMessage(null);
        setFile(null);
      })
      .catch((err) => {
        setMessage("Gagal Mengunggah");
        setSuccses(false);
        console.log(err);
      });
    setMessage(null);
  };

  const handleToUploadForm = async () => {
    if (dokumen === null) {
      setMessage("Setujui file terlebih dahulu!");
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    }
    const formData = new FormData();
    formData.append("id_msib", idMsib);
    formData.append("username", username);
    formData.append("divisi", divisi);
    formData.append("status", statusPengajuan);
    formData.append("files", dokumen);
    formData.append("tanggal_pengajuan", tanggalPengajuan);
    try {
      await axios
        .post("http://localhost:8081/api/v1/work_permit/", formData)
        .then((response) => {
          if (response.status === 200) {
            setMessage(response.data.message);
            setTimeout(() => {
              setMessage(null);
            }, 2000);
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Form className="formIzin d-grid px-5 py-2">
        <Form.Group className="mb-1">
          <Form.Label>Tipe Pengajuan :</Form.Label>
          <Form.Select
            aria-label="Default select example"
            required
            value={statusPengajuan}
            onChange={(e) => setStatusPengajuan(e.target.value)}
          >
            <option>Pilih Status Pengajuan</option>
            <option value="Izin">Izin</option>
            <option value="Sakit">Sakit</option>
            <option value="Perjalanan Dinas">Perjalanan Dinas</option>
            <option value="LAinnya">Lainnya</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
          <Form.Label>Tanggal :</Form.Label>
          <Form.Control
            type="date"
            placeholder="Pilih Tanggal"
            required
            onChange={(e) => setTanggalPengajuan(e.target.value)}
          />
        </Form.Group>
        <Form.Label>File :</Form.Label>
        <Form.Group
          className="d-flex flex-md-row  mb-1"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="file"
            accept=".pdf"
            placeholder="Upload File"
            required
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <button
            className="mx-1 btn btn-outline-secondary "
            onClick={handleUploadFile}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </Form.Group>
        <Modal show={progress.started || message} onHide={handleClose}>
          <Modal.Body>
            {progress.started && (
              <div className="mb-3">
                <label>Processing:</label>
                <ProgressBar
                  now={progress.pc}
                  label={`${progress.pc.toFixed(0)}%`}
                  variant="success"
                  striped
                />
              </div>
            )}

            {message && (
              <div
                className={`alert ${
                  succses ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
          </Modal.Body>
        </Modal>
        <Modal show={message} onHide={handleClose}>
          <Modal.Body>
            {message && (
              <div
                className={`alert ${
                  succses ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {message}
              </div>
            )}
          </Modal.Body>
        </Modal>

        <Button
          className="mt-4"
          variant="primary"
          size="lg"
          onClick={handleToUploadForm}
          dismissible
        >
          SUBMIT
        </Button>
      </Form>

      <InfoAlert
        show={show}
        handleClose={handleClose}
        icon={
          <path
            d="M14.72 8.79L10.43 13.09L8.78 11.44C8.69036 11.3353 8.58004 11.2503 8.45597 11.1903C8.33191 11.1303 8.19678 11.0965 8.05906 11.0912C7.92134 11.0859 7.78401 11.1091 7.65568 11.1594C7.52736 11.2096 7.41081 11.2859 7.31335 11.3833C7.2159 11.4808 7.13964 11.5974 7.08937 11.7257C7.03909 11.854 7.01589 11.9913 7.02121 12.1291C7.02653 12.2668 7.06026 12.4019 7.12028 12.526C7.1803 12.65 7.26532 12.7604 7.37 12.85L9.72 15.21C9.81344 15.3027 9.92426 15.376 10.0461 15.4258C10.1679 15.4755 10.2984 15.5008 10.43 15.5C10.6923 15.4989 10.9437 15.3947 11.13 15.21L16.13 10.21C16.2237 10.117 16.2981 10.0064 16.3489 9.88458C16.3997 9.76272 16.4258 9.63201 16.4258 9.5C16.4258 9.36799 16.3997 9.23728 16.3489 9.11542C16.2981 8.99356 16.2237 8.88296 16.13 8.79C15.9426 8.60375 15.6892 8.49921 15.425 8.49921C15.1608 8.49921 14.9074 8.60375 14.72 8.79ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
            fill="#1C711B"
          />
        }
        color={{ color: "#1C711B" }}
        message="Pengajuan Berhasil!"
      />
    </>
  );
}

export default FormIzin;
