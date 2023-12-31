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
import { Dropdown, DropdownToggle } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoutModal from "../../components/LogoutModal";
import ResetPasswordModal from "../../components/ResetPasswordModal";
import HandleModal from "./HandleModal";
import PopupAbsen from "../../components/PopupAbsen";
import ProfilModal from "./ProfilModal";

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
  const [showLogout, setShowLogout] = useState(null);
  const [showResetPassword, setShowResetPassword] = useState(null);
  const [succses, setSuccses] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [handleMessage, setHandleMessage] = useState(null);
  const [showHandleModal, setShowHandleModal] = useState(null);
  const [enterWorking, setEnterWorking] = useState(null);
  const [outWorking, setOutWorking] = useState(null);
  const [openProfilModal, setOpenProfilModal] = useState(null);

  // Data
  const [divisi, setDivisi] = useState(null);
  const [idMsib, setIdMsib] = useState(null);
  const [userId, setUserId] = useState(null);
  const [shift, setShift] = useState(null);
  const [username, setUsername] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [password, setPassword] = useState(null);
  const [role, setRole] = useState(null);
  const [useImage, setUserImage] = useState(null);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const formattedTime = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;

  const webcamRef = useRef(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setShowCamera(false);
    }
    return imageSrc;
  };

  const handleCancelButtonClick = () => {
    setCapturedImage(null);
    setShowCamera(false);
  };
  const closeHandleModal = () => {
    setShowHandleModal(false);
  };

  const handleUploadWorking = async () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    // Upload Masuk kerja
    if (enterWorking === true && outWorking === false) {
      // Masuk kerja  tepat waktu
      if (
        (currentHour >= 7 && currentHour <= 8) ||
        (currentHour >= 12 && currentHour <= 13)
      ) {
        // console.log("tepat waktu!");
        setShowFormMasukKerja(true);
        setShowFormTelatKerja(false);
      }
      // Masuk kerja telat
      else if (
        (currentHour > 8 && currentHour <= 12) ||
        (currentHour > 13 && currentHour <= 17)
      ) {
        // console.log("terlambat waktu!");
        setShowFormMasukKerja(false);
        setShowFormTelatKerja(true);
      }

      try {
        axios
          .post("http://localhost:8081/api/v1/presence", {
            id_msib: idMsib,
            username: username,
            shift: shift,
            divisi: divisi,
            imageSrc: imageSrc,
            latitude: latitude,
            longitude: longitude,
          })
          .then((response) => {
            setSuccses(response.data);
            setTimeout(() => {
              setSuccses(null);
            });
          });
        setEnterWorking(false);
      } catch (error) {
        console.log(error.message);
      }
      console.log(imageSrc);
    } else if (outWorking === true && enterWorking === false) {
      setShowFormSelesaiKerja(true);
      try {
        axios
          .post("http://localhost:8081/api/v1/presence_out", {
            id_msib: idMsib,
            username: username,
            shift: shift,
            divisi: divisi,
            imageSrc: imageSrc,
            latitude: latitude,
            longitude: longitude,
          })
          .then((response) => {
            setSuccses(response.data);
            setTimeout(() => {
              setSuccses(null);
            });
          });
        setEnterWorking(false);
        console.log(imageSrc);
      } catch (error) {
        console.log(error.message);
      }
    }
    setShowCamera(false);
    setCapturedImage(null);
  };
  const handleLocationClick = () => {
    const onlatitude = latitude;
    const onlongitude = longitude;

    // Open Google Maps in a new tab or window
    window.open(
      `https://www.google.com/maps?q=${onlatitude},${onlongitude}`,
      "_blank"
    );
  };
  const handleCloseLogout = () => {
    setShowLogout(false);
  };

  const handleShowLogout = () => {
    setShowLogout(true);
  };
  const handleCloseResetPassword = () => {
    setShowResetPassword(false);
  };

  const handleShowResetPassword = () => {
    setShowResetPassword(true);
  };

  const handleCaptureButtonClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
    capture();
  };

  const changeToCameraEnter = () => {
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    if (shift === "Pagi") {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      // Shift pagi tepat waktu
      if (currentHour >= 7 && currentHour < 8) {
        setEnterWorking(true);
        setOutWorking(false);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
        console.log("shift pagi");
      } else if (currentHour >= 8 && currentHour < 12) {
        setEnterWorking(true);
        setOutWorking(false);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
        console.log("shift pagi");
      } else {
        setShowHandleModal(true);
        setHandleMessage("Diluar Presensi Bekerja!");
      }
    } else if (shift === "Siang") {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      // Shift Siang Tepat waktu
      if (currentHour >= 12 && currentHour <= 13) {
        setEnterWorking(true);
        setOutWorking(false);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
        console.log("shift siang");
      } else if (currentHour > 13 && currentHour <= 17) {
        setEnterWorking(true);
        setOutWorking(false);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
        console.log("shift siang");
      } else {
        setShowHandleModal(true);
        setHandleMessage("Diluar Presensi Bekerja!");
      }
    }
  };

  const changeToCameraOut = () => {
    if (navigator.geolocation) {
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    if (shift === "Pagi") {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      if (currentHour >= 12 && currentHour < 13) {
        setEnterWorking(false);
        setOutWorking(true);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
      } else {
        setShowHandleModal(true);
        setHandleMessage("Rentang waktu kerja shift pagi 8.00 - 12.00");
      }
    } else if (shift === "Siang") {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      if (currentHour >= 17 && currentHour < 18) {
        setEnterWorking(false);
        setOutWorking(true);
        setShowCamera((prevShowCamera) => !prevShowCamera);
        setCapturedImage(null);
        setShowFormMasukKerja(false);
        setShowFormSelesaiKerja(false);
        setShowFormIzinKerja(false);
        setShowFormRekapPresensi(false);
        setShowFormTelatKerja(false);
      } else {
        setShowHandleModal(true);
        setHandleMessage("Rentang waktu kerja shift siang 13.00 - 17.00");
      }
    }
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

  useEffect(() => {
    const storedDivisi = localStorage.getItem("divisi");
    const storedIdMsib = localStorage.getItem("id_msib");
    const storedShift = localStorage.getItem("shift");
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedRole = localStorage.getItem("role");
    const storedID = localStorage.getItem("ID");
    const storedImage = localStorage.getItem("image");
    setDivisi(storedDivisi);
    setIdMsib(storedIdMsib);
    setShift(storedShift);
    setUsername(storedUsername);
    setPassword(storedPassword);
    setRole(storedRole);
    setUserId(storedID);
    setUserImage(storedImage);
  }, []);

  // popup absen
  const [showPopupAbsen, setShowPopupAbsen] = useState(false);
  const handleClosePopupAbsen = () => {
    setShowPopupAbsen(false);
  };

  const handleOpenProfile = () => {
    setOpenProfilModal(true);
  };
  const handleCloseProfile = () => {
    setOpenProfilModal(false);
  };

  return (
    <>
      <div className="uk-body">
        <div className="header-home">
          <div className="header-home-logo">
            <img src={logo} alt="logo" />
          </div>
          <Dropdown>
            <DropdownToggle>
              <img src={akun} alt="logo" />
            </DropdownToggle>
            <Dropdown.Menu className="dropdown-menu">
              <li>
                <Link className="text-link" onClick={handleOpenProfile}>
                  Lihat Profil
                </Link>
              </li>
              <li>
                <Link to="/status_pengajuan" className="text-link">
                  Pengajuan Izin
                </Link>
              </li>
              <li>
                <Link className="text-link" onClick={handleShowResetPassword}>
                  Reset Password
                </Link>
              </li>
              <li className="centered-text">
                <button className="btn-log" onClick={handleShowLogout}>
                  Keluar
                </button>
              </li>
            </Dropdown.Menu>

            <LogoutModal
              showLogout={showLogout}
              handleCloseLogout={handleCloseLogout}
            />
            <ResetPasswordModal
              showResetPassword={showResetPassword}
              handleCloseResetPassword={handleCloseResetPassword}
            />
            <HandleModal
              message={handleMessage}
              showHandleModal={showHandleModal}
              closeHandleModal={closeHandleModal}
            />
          </Dropdown>
          <ProfilModal
            isOpen={openProfilModal}
            onClose={handleCloseProfile}
            local_username={username}
            local_shift={shift}
            local_divisi={divisi}
            local_id_msib={idMsib}
            local_image={akun}
            local_password={password}
            local_role={role}
            user_id={userId}
          />
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
                    changeToCameraEnter();
                  }}
                >
                  Masuk Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={() => {
                    changeToCameraOut();
                  }}
                >
                  Selesai Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={changeToFormIzinKerja}
                >
                  Pengajuan Izin
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
                          onClick={handleUploadWorking}
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
                          onClick={changeToCameraEnter}
                        >
                          Batal
                        </button>
                        <button
                          className="capture-btn d-none"
                          onClick={handleCaptureButtonClick}
                        ></button>
                        <button
                          className="upload-cam-button"
                          onClick={handleUploadWorking}
                        >
                          Upload
                        </button>
                        <PopupAbsen
                          showPopupAbsen={showPopupAbsen}
                          handleClosePopupAbsen={handleClosePopupAbsen}
                        />
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
                                <label for="IDKegiatan" className="form-label">
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
                                  Lokasi
                                </label>
                                <div
                                  class="form-control"
                                  onClick={handleLocationClick}
                                >
                                  <p>
                                    {latitude}, {longitude}
                                  </p>
                                </div>
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
                                  value={idMsib}
                                  aria-describedby="emailHelp"
                                  readOnly
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
                                  value={formattedTime}
                                  readOnly
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
                                  readOnly
                                />
                              </div>
                            </div>

                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_pulang" class="form-label">
                                  Lokasi
                                </label>
                                <div
                                  class="form-control"
                                  onClick={handleLocationClick}
                                >
                                  <p>
                                    {latitude}, {longitude}
                                  </p>
                                </div>
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
                                  readOnly
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
                                  readOnly
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
                                  readOnly
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div class="mb-3">
                                <label for="pres_pulang" class="form-label">
                                  Lokasi
                                </label>
                                <div
                                  class="form-control"
                                  onClick={handleLocationClick}
                                >
                                  <p>
                                    {latitude}, {longitude}
                                  </p>
                                </div>
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

                {/* REKAP PRESENSI */}
                {showFormRekapPresensi && (
                  <div className="sub-content-3">
                    <div className="">
                      <div className="card shadow mb-4 rounded-2">
                        {/* Card Header - Dropdown */}
                        <div className="card-header-pengajuan py-2 d-flex flex-row align-items-center justify-content-center rounded-top-2">
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
                            tableStyle={{
                              minWidth: "31rem",
                              minHeight: "5rem",
                            }}
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
