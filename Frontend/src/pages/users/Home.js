import React, { Component } from "react";
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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: people, // Gambar default
      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormRekapPresensi: false,
      showFormTelatKerja: false,
      capturedImage: null,
      showCamera: false,
      currentAction: "",
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
      showCamera: false,
    });
  };

  handleUploadButtonClick = () => {
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
    this.setState({
      showCamera: false,
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
      showFormRekapPresensi: false,
      showFormTelatKerja: false,
    }));
  };

  handleDoneWorkButtonClick = () => {
    this.setState({
      showFormSelesaiKerja: true, // Tampilkan formulir masuk kerja
      showFormMasukKerja: false, //
      showFormTelatKerja: false, //
      showFormIzinKerja: false,
      showFormRekapPresensi: false,
      showCamera: false, // Sembunyikan kamera
      capturedImage: null,
    });
  };

  handleCloseWorkButtonClick = () => {
    this.setState({
      currentImage: people, // Gambar default
      showFormSelesaiKerja: false, // Tampilkan formulir masuk kerja
      showFormMasukKerja: false, //
      showFormTelatKerja: false, //
      showFormIzinKerja: false,
      showFormRekapPresensi: false,
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
      showFormRekapPresensi: false,
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
      showFormRekapPresensi: false,
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
      showFormRekapPresensi: false,
      showFormTelatKerja: false,
    }));
  };
  changeToRekapPresensi = () => {
    this.setState((prevState) => ({
      showCamera: false,
      capturedImage: null,

      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormRekapPresensi: !prevState.showFormRekapPresensi,
      showFormTelatKerja: false,
    }));
  };
  changeToFormTelatKerja = () => {
    this.setState((prevState) => ({
      showCamera: true,
      capturedImage: null,
      showFormMasukKerja: false,
      showFormSelesaiKerja: false,
      showFormIzinKerja: false,
      showFormRekapPresensi: false,
      showFormTelatKerja: false,
    }));
  };

  render() {
    return (
      <>
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
                    this.setState({ currentAction: "masuk" });
                    this.changeToCamera();
                  }}
                >
                  Masuk Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={this.changeToFormIzinKerja}
                >
                  Pengajuan Izin
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={this.changeToRekapPresensi}
                >
                  Rekap Presensi
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
                      <div className="camera-button d-flex justify-content-evenly">
                        <button
                          className="cancel-cam-btn"
                          onClick={this.handleCancelButtonClick}
                        >
                          Batal
                        </button>
                        <button
                          className="capture-btn"
                          onClick={this.handleCaptureButtonClick}
                        ></button>
                        <button
                          className="upload-cam-button"
                          onClick={this.handleUploadButtonClick}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.capturedImage && (
                  <div className="camera">
                    <div className="camera-title">
                      <img
                        src={this.state.capturedImage}
                        alt="Captured"
                        className="capture"
                      />
                      <p
                        style={{
                          position: "absolute",
                          bottom: "110px",
                          left: "67%",
                          transform: "translateX(-50%)",
                          fontSize: 10,
                          color: "white",
                          // textTransform: "uppercase",
                        }}
                      >
                        Tekan Cancel untuk ambil ulang
                      </p>
                      <div className="camera-button d-flex justify-content-evenly">
                        <button
                          className="cancel-cam-btn"
                          onClick={this.handleCancelButtonClick}
                        >
                          Batal
                        </button>
                        <button
                          className="capture-btn d-none"
                          onClick={this.handleCaptureButtonClick}
                        ></button>
                        <button
                          className="upload-cam-button"
                          onClick={this.handleUploadButtonClick}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* FORM MASUK KERJA */}
                {this.state.showFormMasukKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}
                    >
                      <div
                        className="row header-content"
                        style={{ backgroundColor: "#1c711b" }}
                      >
                        <h4>Presensi Hari Ini Sudah Berhasil!</h4>
                        <p>Selamat dan semangat bekerja ya!</p>
                      </div>
                      <div className="border-sub-content">
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
                          onClick={this.handleDoneWorkButtonClick}
                        >
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
                      style={{ backgroundColor: "white" }}
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
                          onClick={this.handleCloseWorkButtonClick}
                        >
                          Tutup
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* FORM IZIN KERJA */}
                {this.state.showFormIzinKerja && (
                  <div className="sub-content-3">
                    <div className="container">
                      <FormIzin />
                    </div>
                  </div>
                )}

                {/* FORM TERLAMBAT KERJA */}
                {this.state.showFormTelatKerja && (
                  <div className="sub-content-3">
                    <div
                      className="container"
                      style={{ backgroundColor: "white" }}
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
                          onClick={this.handleDoneWorkButtonClick}
                        >
                          Selesai Bekerja
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* REKAP PRESENSI */}
                {this.state.showFormRekapPresensi && (
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

                {!this.state.showCamera &&
                  !this.state.capturedImage &&
                  !this.state.showFormMasukKerja &&
                  !this.state.showFormSelesaiKerja &&
                  !this.state.showFormIzinKerja &&
                  !this.state.showFormRekapPresensi &&
                  !this.state.showFormTelatKerja && (
                    <div className="homepage">
                      <img src={this.state.currentImage} alt="Current Home" />
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
