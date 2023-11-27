import React, { Component } from "react";
import "../../App.css";
import akun from "../../assets/Users/akun.png";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import Webcam from "react-webcam";

class kerja_masuk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capturedImage: null,
      displayCamera: true,
    };
    this.webcamRef = React.createRef();
  }

  capture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();
    // Set the captured image in the state
    this.setState({
      capturedImage: imageSrc,
      displayCamera: false, // Hide the camera and show the captured image
    });
  };

  handleCancelButtonClick = () => {
    console.log("Cancel button clicked");
    // Clear the captured image and show the camera again
    this.setState({
      capturedImage: null,
      displayCamera: true,
    });
  };

  handleCaptureButtonClick = () => {
    console.log("Capture button clicked");
    this.capture();
  };

  handleUploadButtonClick = () => {
    console.log("Upload button clicked");
    window.location.href = "/presensi_masuk";
  };

  render() {
    return (
      <>
        <div className="windows d-none d-md-block">
          <div style={{ marginRight: "100px", marginLeft: "100px" }}>
            <div className="header-rumah">
              <div className="header-rumah-logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="">
                <img src={akun} alt="logo" />
              </div>
            </div>
            {/* ---------------------------------------- */}
            <div className="content-rumah">
              <div className="form-content-rumah">
                <div className="sub-content-rumah-1">
                  <h4 className="">Halo, Staf Magang SEAQIL !</h4>
                  <p className="">
                    Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat
                    bekerja dan semoga pengalaman presensi Anda menjadi lebih
                    praktis dan efektif.
                  </p>
                </div>
                <div className="sub-content-rumah-2">
                  <button
                    className="btn btn-primary active"
                    style={{ borderWidth: 2, borderColor: "white" }}>
                    Masuk Kerja
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ borderWidth: 2, borderColor: "white" }}
                    onClick={() => {
                      window.location.href = "/pengajuan_izin";
                    }}>
                    Pengajuan Izin
                  </button>
                  <button
                    className="btn btn-primary"
                    style={{ borderWidth: 2, borderColor: "white" }}>
                    Terlambat
                  </button>
                </div>
              </div>
              <div className="camera">
                <div className="camera-title">
                  <div className="">
                    {this.state.displayCamera && (
                      <Webcam
                        className="webcam"
                        audio={false}
                        ref={this.webcamRef}
                        screenshotFormat="image/jpeg"
                        mirrored={true}
                      />
                    )}
                    {this.state.capturedImage && (
                      <div
                        style={{ position: "relative", textAlign: "center" }}>
                        <img
                          src={this.state.capturedImage}
                          alt="Captured"
                          className="webcam"
                        />
                        <p
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: 10,
                            color: "white",
                            // textTransform: "uppercase",
                          }}>
                          Tekan Cancel untuk ambil ulang
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="camera-button">
                    <button
                      className="cancel-cam-btn"
                      onClick={this.handleCancelButtonClick}>
                      Batal
                    </button>
                    <button
                      className="btn btn-light"
                      onClick={this.handleCaptureButtonClick}></button>
                    <button
                      className="upload-cam-button"
                      onClick={this.handleUploadButtonClick}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ----------------------------------------------------- */}
        <div className="handphone d-sm-none">
          <div className="header-rumah">
            <div className="header-rumah-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="">
              <img src={akun} alt="logo" />
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div style={{ marginRight: "20px", marginLeft: "20px" }}>
            <div className="hp">
              {/* <div className="hp-1">
                <h4>Halo, Staf Magang SEAQIL !</h4>
                <p>
                  Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja
                  dan semoga pengalaman presensi Anda menjadi lebih praktis dan
                  efektif.
                </p>
              </div> */}
              <div className="hp-1">
                <div className="row mb-2">
                  <div className="col-6">
                    <button
                      className="btn btn-primary active"
                      style={{ borderWidth: 2, borderColor: "white" }}
                      onClick={() => {
                        window.location.href = "/kerja_masuk"; // Navigasi ke laman masuk_kerja
                      }}>
                      Masuk Kerja
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      style={{ borderWidth: 2, borderColor: "white" }}>
                      Terlambat
                    </button>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      style={{ borderWidth: 2, borderColor: "white" }}
                      onClick={() => {
                        window.location.href = "/pengajuan_izin";
                      }}>
                      Pengajuan
                    </button>
                  </div>
                  <div className="col-6">
                    <button
                      className="btn btn-primary"
                      style={{ borderWidth: 2, borderColor: "white" }}>
                      Profil
                    </button>
                  </div>
                </div>
              </div>
              <div className="hp-camera">
                <div className="hp-camera-title">
                  <div className="">
                    {this.state.displayCamera && (
                      <Webcam
                        className="webcam"
                        audio={false}
                        ref={this.webcamRef}
                        screenshotFormat="image/jpeg"
                        mirrored={true}
                      />
                    )}
                    {this.state.capturedImage && (
                      <div
                        style={{ position: "relative", textAlign: "center" }}>
                        <img
                          src={this.state.capturedImage}
                          alt="Captured"
                          className="webcam"
                        />
                        <p
                          style={{
                            position: "absolute",
                            bottom: "10px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            fontSize: 10,
                            color: "white",
                            // textTransform: "uppercase",
                          }}>
                          Tekan batal untuk ambil ulang
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="camera-button">
                    <button
                      className="cancel-cam-btn"
                      onClick={this.handleCancelButtonClick}>
                      Batal
                    </button>
                    <button
                      className="btn btn-light"
                      onClick={this.handleCaptureButtonClick}></button>
                    <button
                      className="upload-cam-button"
                      onClick={this.handleUploadButtonClick}>
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default kerja_masuk;
