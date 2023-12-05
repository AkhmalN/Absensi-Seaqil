import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import people from "../../assets/Users/front.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";
import Webcam from "react-webcam";
import FormIzin from "../../components/FormIzin";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DataPresensiUser from "../../DataPresensiUser";
import "../../responsive.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  // State
  const [currentImage, setCurrentImage] = useState(people);
  const [showFormMasukKerja, setShowFormMasukKerja] = useState(false);
  const [showFormSelesaiKerja, setShowFormSelesaiKerja] = useState(false);
  const [showFormIzinKerja, setShowFormIzinKerja] = useState(false);
  const [showFormRekapPresensi, setShowFormRekapPresensi] = useState(false);
  const [showFormTelatKerja, setShowFormTelatKerja] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [currentAction, setCurrentAction] = useState("");

  // Data
  const [divisi, setDivisi] = useState(null);
  const [idMsib, setIdMsib] = useState(null);
  const [shift, setShift] = useState(null);
  const [username, setUsername] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);

    setShowCamera(false);
  };

  const handleCancelButtonClick = () => {
    setCapturedImage(null);
    setShowCamera(false);
  };

  const handleUploadButtonClick = async () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 8) {
      setShowFormMasukKerja(true);
      setShowFormTelatKerja(false);
    } else if (currentHour >= 8) {
      setShowFormMasukKerja(false);
      setShowFormTelatKerja(true);
    }

    setShowCamera(false);
    setCapturedImage(null);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/presence",
        {
          id_msib: idMsib,
          username: username,
          shift: shift,
          divisi: divisi,
          image: imageSrc,
        }
      );

      // Check for a successful response
      if (response.status === 201) {
        console.log("Upload successful:", response.data);
      } else {
        console.log("Upload failed:", response.status);
      }
    } catch (error) {
      // Handle errors
      console.error("Error uploading:", error);
    }
  };

  const handleLateButtonClick = () => {
    setShowFormTelatKerja(true);
    setShowCamera(false);
    setCapturedImage(null);
  };

  const handleCaptureButtonClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    capture();
  };

  const changeToCamera = () => {
    setShowCamera((prevShowCamera) => !prevShowCamera);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  const handleDoneWorkButtonClick = () => {
    setShowFormSelesaiKerja(true);
    setShowFormMasukKerja(false);
    setShowFormTelatKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowCamera(false);
    setCapturedImage(null);
  };

  const handleCloseWorkButtonClick = () => {
    setCurrentImage(people);
    setShowFormSelesaiKerja(false);
    setShowFormMasukKerja(false);
    setShowFormTelatKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowCamera(false);
    setCapturedImage(null);
  };

  const changeToFormMasukKerja = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja((prevShowForm) => !prevShowForm);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  const changeToFormSelesaiKerja = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja((prevShowForm) => !prevShowForm);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  const changeToFormIzinKerja = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja((prevShowForm) => !prevShowForm);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  const changeToRekapPresensi = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi((prevShowForm) => !prevShowForm);
    setShowFormTelatKerja(false);
  };

  const changeToFormTelatKerja = () => {
    setShowCamera(true);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  useEffect(() => {
    const storedDivisi = localStorage.getItem("divisi");
    const storedIdMsib = localStorage.getItem("id_msib");
    const storedShift = localStorage.getItem("shift");
    const storedUsername = localStorage.getItem("username");
    setDivisi(storedDivisi);
    setIdMsib(storedIdMsib);
    setShift(storedShift);
    setUsername(storedUsername);
  }, []);

  return (
    <>
      <div className="uk-body">
        <div className="header-home">
          <div className="header-home-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="logo-profile">
            <Dropdown>
              <DropdownToggle>
                <img src={akun} alt="logo" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem disabled>{username}</DropdownItem>
                <DropdownItem href="#/action-2">Lupa Password</DropdownItem>
                <DropdownItem href="#/action-3">Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {idMsib && divisi && shift && username ? (
          <div className="content-home">
            <div className="form-content-home">
              <div className="sub-content-1">
                <h4 className="">Halo, Staf Magang SEAQIL!</h4>
                <p className="">
                  Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja
                  dan semoga pengalaman presensi Anda menjadi lebih praktis dan
                  efektif.
                </p>
              </div>
              <div className="sub-content-2">
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={() => {
                    setCurrentAction("masuk");
                    changeToCamera();
                  }}
                >
                  Masuk Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={changeToFormIzinKerja}
                >
                  Pengajuan Izin
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={changeToRekapPresensi}
                >
                  Rekap Presensi
                </button>
              </div>
            </div>

            <div className="image-content">
              <div className="homepage">
                {/* CAMERA PRESENSI MASUK */}
                {showCamera && (
                  <div className="camera">
                    <div className="camera-title">
                      <Webcam
                        className="webcam"
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        mirrored={true}
                      />
                      <div className="camera-button d-flex justify-content-evenly">
                        <button
                          className="cancel-cam-btn"
                          onClick={handleCancelButtonClick}
                        >
                          Batal
                        </button>
                        <button
                          className="capture-btn"
                          onClick={handleCaptureButtonClick}
                        ></button>
                        <button
                          className="upload-cam-button"
                          onClick={handleUploadButtonClick}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {capturedImage && (
                  <div className="camera">
                    <div className="camera-title">
                      <img
                        src={capturedImage}
                        alt="Captured"
                        className="capture"
                      />

                      <div className="camera-button d-flex justify-content-evenly">
                        <button
                          className="cancel-cam-btn"
                          onClick={handleCancelButtonClick}
                        >
                          Batal
                        </button>
                        <button
                          className="capture-btn d-none"
                          onClick={handleCaptureButtonClick}
                        ></button>
                        <button
                          className="upload-cam-button"
                          onClick={handleUploadButtonClick}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* FORM MASUK KERJA */}
                {showFormMasukKerja && (
                  <div className="sub-content-3">
                    <div className="border-sub-content">
                      <div
                        className="container-lg"
                        style={{ backgroundColor: "white", borderRadius: 20 }}
                      >
                        <div
                          className="row header-content"
                          style={{ backgroundColor: "#1c711b" }}
                        >
                          <h4>Presensi Hari Ini Sudah Berhasil!</h4>
                          <p>Selamat dan semangat bekerja ya!</p>
                        </div>
                        <div className="container p-4">
                          <div className="row py-1 d-flex justify-content-center ">
                            <div className="col ">
                              <div class="mb-3">
                                <label for="IDKegiatan" class="form-label">
                                  ID Kegiatan
                                </label>
                                <input
                                  readOnly
                                  type="text"
                                  class="form-control"
                                  id="IDK"
                                  aria-describedby="emailHelp"
                                  value={idMsib}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_masuk" class="form-label">
                                  Presensi Masuk
                                </label>
                                <input
                                  readOnly
                                  type="text"
                                  class="form-control"
                                  id="pres_masuk"
                                  aria-describedby="emailHelp"
                                  value={formattedTime}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row py-2">
                            <div className="col">
                              <div class="mb-3">
                                <label for="div" class="form-label">
                                  Divisi
                                </label>
                                <input
                                  readOnly
                                  type="text"
                                  class="form-control"
                                  id="div"
                                  aria-describedby="emailHelp"
                                  value={divisi}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_pulang" class="form-label">
                                  Presensi Pulang
                                </label>
                                <input
                                  readOnly
                                  type="text"
                                  class="form-control"
                                  id="pres_pulang"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hp-button">
                        <button
                          className="btn-done-working me-2 "
                          type="button"
                          onClick={handleDoneWorkButtonClick}
                        >
                          Selesai Bekerja
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* FORM SELESAI KERJA */}
                {showFormSelesaiKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container-lg"
                      style={{ backgroundColor: "white", borderRadius: 20 }}
                    >
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#1c711b" }}
                      >
                        <h4>Presensi Pulang Sudah Berhasil!</h4>
                        <p>Hati-hati di jalan dan selamat beristirahat!</p>
                      </div>
                      <div className="border-sub-content">
                        <div className="container p-4">
                          <div className="row py-1">
                            <div className="col">
                              <div class="mb-3">
                                <label for="IDKegiatan" class="form-label">
                                  ID Kegiatan
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="IDK"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_masuk" class="form-label">
                                  Presensi Masuk
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pres_masuk"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row py-2">
                            <div className="col">
                              <div class="mb-3">
                                <label for="div" class="form-label">
                                  Divisi
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="div"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_pulang" class="form-label">
                                  Presensi Pulang
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pres_pulang"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hp-button">
                        <button
                          className="btn-done-working me-2 "
                          type="button"
                          onClick={handleCloseWorkButtonClick}
                        >
                          Tutup
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* FORM IZIN KERJA */}
                {showFormIzinKerja && (
                  <div className="sub-content-3">
                    <div className="container">
                      <FormIzin />
                    </div>
                  </div>
                )}

                {/* FORM TERLAMBAT KERJA */}
                {showFormTelatKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container-lg "
                      style={{ backgroundColor: "white", borderRadius: 20 }}
                    >
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#AC1616" }}
                      >
                        <h4>ANDA TERLAMBAT!</h4>
                        <p>Walaupun terlambat, tetap semangat bekerja</p>
                      </div>
                      <div className="border-sub-content">
                        <div className="container p-4">
                          <div className="row py-1">
                            <div className="col">
                              <div class="mb-3">
                                <label for="IDKegiatan" class="form-label">
                                  ID Kegiatan
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="IDK"
                                  aria-describedby="emailHelp"
                                  value={idMsib}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_masuk" class="form-label">
                                  Presensi Masuk
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pres_masuk"
                                  aria-describedby="emailHelp"
                                  value={formattedTime}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row py-2">
                            <div className="col">
                              <div class="mb-3">
                                <label for="div" class="form-label">
                                  Divisi
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="div"
                                  aria-describedby="emailHelp"
                                  value={divisi}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_pulang" class="form-label">
                                  Presensi Pulang
                                </label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="pres_pulang"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hp-button">
                        <button
                          className="btn-done-working me-2 "
                          type="button"
                          onClick={handleDoneWorkButtonClick}
                        >
                          Selesai Bekerja
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* REKAP PRESENSI */}
                {showFormRekapPresensi && (
                  <div className="sub-content-3">
                    <div className="">
                      <div className="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div className="card-header-pengajuan py-3 d-flex flex-row align-items-center justify-content-center">
                          <div className="header">
                            <div className="header-1">Data Presensi</div>
                            <div className="header-2">
                              Berikut ini data presensi kamu yaa.
                            </div>
                          </div>
                        </div>
                        {/* Card Body  */}
                        <div className="card-body">
                          <DataTable
                            value={DataPresensiUser}
                            paginator
                            rows={4}
                            rowsPerPageOptions={[5, 10, 25, 30]}
                            tableStyle={{ minWidth: "31rem" }}
                            className="customDataTable" //Add a custom class for more styling options
                            paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
                          >
                            <Column
                              field="No"
                              header="No"
                              style={{ width: "10%" }}
                              alignHeader={"center"}
                            ></Column>
                            <Column
                              field="Tanggal"
                              header="Tanggal"
                              style={{ width: "20%" }}
                              alignHeader={"center"}
                            ></Column>
                            <Column
                              field="Shift"
                              header="Shift"
                              style={{ width: "25%" }}
                              alignHeader={"center"}
                            ></Column>
                            <Column
                              field="Keterangan"
                              header="Keterangan"
                              style={{ width: "25%" }}
                              alignHeader={"center"}
                            ></Column>
                          </DataTable>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {!showCamera &&
                  !capturedImage &&
                  !showFormMasukKerja &&
                  !showFormSelesaiKerja &&
                  !showFormIzinKerja &&
                  !showFormRekapPresensi &&
                  !showFormTelatKerja && (
                    <div className="homepage">
                      <img src={currentImage} alt="Current Home" />
                    </div>
                  )}
              </div>
            </div>
          </div>
        ) : (
          <p>ID MSIB tidak ditemukan. Pastikan Anda telah login.</p>
        )}
      </div>
    </>
  );
};

export default Home;
