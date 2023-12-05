import React, { useState, useRef, useEffect } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import people from "../../assets/Users/front.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";
import Webcam from "react-webcam";
import FormIzin from "../../components/FormIzin";
import "../../responsive.css";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(people);
  const [showFormMasukKerja, setShowFormMasukKerja] = useState(false);
  const [showFormSelesaiKerja, setShowFormSelesaiKerja] = useState(false);
  const [showFormIzinKerja, setShowFormIzinKerja] = useState(false);
  const [showFormRekapPresensi, setShowFormRekapPresensi] = useState(false);
  const [showFormTelatKerja, setShowFormTelatKerja] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [currentAction, setCurrentAction] = useState("");
  const webcamRef = useRef(null);
  const [userStorage, setUserStorage] = useState("");

  useEffect(() => {
    // Membaca nilai username dari localStorage saat komponen Home dimuat
    const storedUsername = localStorage.getItem("username");

    if (storedUsername) {
      setUserStorage(storedUsername);
      console.log(userStorage);
    }
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  };

  const handleCancelButtonClick = () => {
    setCapturedImage(null);
    setShowCamera(true);
  };

  const handleUploadButtonClick = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 8) {
      this.setState({
        showFormMasukKerja: true,
        showFormTelatKerja: false,
      });
    } else if (currentHour >= 8) {
      this.setState({
        showFormMasukKerja: false,
        showFormTelatKerja: true,
      });
    }

    setShowCamera(false);
    setCapturedImage(null);
  };

  // const handleLateButtonClick = () => {
  //   setShowFormTelatKerja(true);
  //   setShowCamera(false);
  //   setCapturedImage(null);
  // };

  const handleCaptureButtonClick = () => {
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

  // const handleDoneWorkButtonClick = () => {
  //   setShowFormSelesaiKerja(true);
  //   setShowFormMasukKerja(false);
  //   setShowFormTelatKerja(false);
  //   setShowFormIzinKerja(false);
  //   setShowFormRekapPresensi(false);
  //   setShowCamera(false);
  //   setCapturedImage(null);
  // };

  // const handleCloseWorkButtonClick = () => {
  //   setCurrentImage(people);
  //   setShowFormSelesaiKerja(false);
  //   setShowFormMasukKerja(false);
  //   setShowFormTelatKerja(false);
  //   setShowFormIzinKerja(false);
  //   setShowFormRekapPresensi(false);
  //   setShowCamera(false);
  //   setCapturedImage(null);
  // };

  // const changeToFormMasukKerja = () => {
  //   setShowCamera(false);
  //   setCapturedImage(null);
  //   setShowFormMasukKerja((prevShowFormMasukKerja) => !prevShowFormMasukKerja);
  //   setShowFormSelesaiKerja(false);
  //   setShowFormIzinKerja(false);
  //   setShowFormRekapPresensi(false);
  //   setShowFormTelatKerja(false);
  // };

  // const changeToFormSelesaiKerja = () => {
  //   setShowCamera(false);
  //   setCapturedImage(null);
  //   setShowFormMasukKerja(false);
  //   setShowFormSelesaiKerja(
  //     (prevShowFormSelesaiKerja) => !prevShowFormSelesaiKerja
  //   );
  //   setShowFormIzinKerja(false);
  //   setShowFormRekapPresensi(false);
  //   setShowFormTelatKerja(false);
  // };

  const changeToFormIzinKerja = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja((prevShowFormIzinKerja) => !prevShowFormIzinKerja);
    setShowFormRekapPresensi(false);
    setShowFormTelatKerja(false);
  };

  const changeToRekapPresensi = () => {
    setShowCamera(false);
    setCapturedImage(null);
    setShowFormMasukKerja(false);
    setShowFormSelesaiKerja(false);
    setShowFormIzinKerja(false);
    setShowFormRekapPresensi(
      (prevShowFormRekapPresensi) => !prevShowFormRekapPresensi
    );
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

  return (
    <div className="uk-body">
      <div className="header-home">
        <div className="header-home-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="logo-profile">
          <img src={akun} alt="logo" />
        </div>
      </div>
      <div className="content-home">
        <div className="form-content-home">
          <div className="sub-content-1">
            <h4 className="">Halo {userStorage}, Staf Magang SEAQIL!</h4>
            <p className="">
              Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja dan
              semoga pengalaman presensi Anda menjadi lebih praktis dan efektif.
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
                  <img src={capturedImage} alt="Captured" className="capture" />
                  <p
                    style={{
                      position: "absolute",
                      bottom: "110px",
                      left: "67%",
                      transform: "translateX(-50%)",
                      fontSize: 10,
                      color: "white",
                    }}
                  >
                    Tekan Cancel untuk ambil ulang
                  </p>
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
            {showFormMasukKerja && (
              <div className="sub-content-3">
                {/* ... (Isi formulir masuk kerja) */}
              </div>
            )}
            {showFormSelesaiKerja && (
              <div className="sub-content-3">
                {/* ... (Isi formulir selesai kerja) */}
              </div>
            )}
            {showFormIzinKerja && (
              <div className="sub-content-3">
                <div className="container">
                  <FormIzin />
                </div>
              </div>
            )}
            {showFormTelatKerja && (
              <div className="sub-content-3">
                {/* ... (Isi formulir terlambat kerja) */}
              </div>
            )}
            {showFormRekapPresensi && (
              <div className="sub-content-3">
                {/* ... (Isi formulir rekap presensi) */}
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
    </div>
  );
};

export default Home;
