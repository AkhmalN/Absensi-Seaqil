import React, { Component } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import people from "../../assets/Users/front.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";
import Webcam from "react-webcam";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: people, // Gambar default
      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
      capturedImage: null,
      showCamera: false,
    };
    this.webcamRef = React.createRef();
  }

  capture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();
    // Set the captured image in the state
    this.setState({
      capturedImage: imageSrc,
      showCamera: false, // Hide the camera and show the captured image
    });
  };
  handleCancelButtonClick = () => {
    console.log("Cancel button clicked");
    // Clear the captured image and show the camera again
    this.setState({
      capturedImage: null,
      showCamera: true,
    });
  };

  handleUploadButtonClick = () => {
    this.setState({
      showFormMasukKerja: true, // Tampilkan formulir masuk kerja
      showCamera: false, // Sembunyikan kamera
      capturedImage: null,
    });
  };

  handleLateButtonClick = () => {
    this.setState({
      showFormTelatKerja: true, // Tampilkan formulir masuk kerja
      showCamera: false, // Sembunyikan kamera
      capturedImage: null,
    });
  };
  handleCaptureButtonClick = () => {
    this.capture();
  };

  changeToCamera = () => {
    // Set the captured image in the state
    this.setState((prevState) => ({
      showCamera: !prevState.showCamera,
      capturedImage: null,

      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
    }));
  };

  handleDoneWorkButtonClick = () => {
    this.setState({
      showFormSelesaiKerja: true, // Tampilkan formulir masuk kerja
      showFormMasukKerja: false, //
      showFormTelatKerja: false, //
      showCamera: false, // Sembunyikan kamera
      capturedImage: null,
    });
  };

  changeToFormMasukKerja = () => {
    this.setState((prevState) => ({
      showCamera: false,
      capturedImage: null,
      showFormMasukKerja: !prevState.showFormMasukKerja,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
    }));
  };
  changeToFormSelesaiKerja = () => {
    this.setState((prevState) => ({
      showCamera: false,
      capturedImage: null,
      showFormMasukKerja: false,
      showFormSelesaiKerja: !prevState.showFormSelesaiKerja,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
    }));
  };
  changeToFormIzinKerja = () => {
    this.setState((prevState) => ({
      showCamera: false,
      capturedImage: null,

      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: !prevState.showFormIzinKerja,
      showFormTelatKerja: false,
    }));
  };
  changeToFormTelatKerja = () => {
    this.setState((prevState) => ({
      showCamera: false,
      capturedImage: null,

      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: !prevState.showFormTelatKerja,
    }));
  };

  render() {
    return (
      <>
        <div style={{ marginRight: "100px", marginLeft: "100px" }}>
          <div className="header-home">
            <div className="header-home-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="">
              <img src={akun} alt="logo" />
            </div>
          </div>
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
                  onClick={this.changeToCamera}>
                  Masuk Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={this.changeToFormIzinKerja}>
                  Pengajuan Izin
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={this.changeToFormTelatKerja}>
                  Terlambat
                </button>
              </div>
            </div>

            <div className="image-content">
              <div className="homepage">
                {/* CAMERA PRESENSI MASUK */}
                {this.state.showCamera && (
                  <div className="camera">
                    <div className="camera-title">
                      <Webcam
                        className="webcam"
                        audio={false}
                        ref={this.webcamRef}
                        screenshotFormat="image/jpeg"
                        mirrored={true}
                      />
                      <div className="camera-button d-flex justify-content-between">
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
                )}
                {this.state.capturedImage && (
                  <div style={{ position: "relative", textAlign: "center" }}>
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
                )}
                {/* FORM MASUK KERJA */}
                {this.state.showFormMasukKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}>
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#1c711b" }}>
                        <h4>Presensi Hari Ini Sudah Berhasil!</h4>
                        <p>Selamat dan semangat bekerja ya!</p>
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
                          onClick={this.handleDoneWorkButtonClick}>
                          Selesai Bekerja
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* FORM SELESAI KERJA */}
                {this.state.showFormSelesaiKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}>
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#1c711b" }}>
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
                          onClick={this.handleDoneWorkButtonClick}>
                          Tutup
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* FORM IZIN KERJA */}
                {this.state.showFormIzinKerja && (
                  <div className="sub-content-3">
                    <h2>Form Izin Kerja</h2>
                  </div>
                )}

                {/* FORM TERLAMBAT KERJA */}
                {this.state.showFormTelatKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}>
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#AC1616" }}>
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
                          onClick={this.handleDoneWorkButtonClick}>
                          Selesai Bekerja
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {!this.state.showCamera &&
                  !this.state.capturedImage &&
                  !this.state.showFormMasukKerja &&
                  !this.state.showFormSelesaiKerja &&
                  !this.state.showFormIzinKerja &&
                  !this.state.showFormTelatKerja && (
                    <div className="homepage">
                      <img
                        src={this.state.currentImage}
                        alt="Current Home Image"
                      />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
