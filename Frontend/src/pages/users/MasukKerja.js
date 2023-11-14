import React, { Component } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import Webcam from "react-webcam";
import akun from "../../assets/Users/akun.png";
import "../../App.css";

class MasukKerja extends Component {
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
    // Clear the captured image when cancel button is clicked
    this.setState({
      capturedImage: null,
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
  };

  render() {
    return (
      <>
        <div className="header-masuk">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__title">
            <img src={akun} alt="logo" />
          </div>
        </div>
        <div className="content-1">
          <div className="form-content">
            <div className="first-row">
              <h3 className="">Halo, Staf Magang SEAQIL !</h3>
              <p className="">
                Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja
                dan semoga pengalaman presensi Anda menjadi lebih praktis dan
                efektif.
              </p>
            </div>
            <div className="second-row">
              <button
                className="btn btn-primary"
                style={{ borderWidth: 2, borderColor: "white" }}
              >
                Masuk Kerja
              </button>
              <button
                className="btn btn-primary"
                style={{ borderWidth: 2, borderColor: "white" }}
              >
                Izin Kerja
              </button>
              <button
                className="btn btn-primary"
                style={{ borderWidth: 2, borderColor: "white" }}
              >
                Telat Kerja
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
                      }}
                    >
                      Tekan Cancel untuk ambil ulang
                    </p>
                  </div>
                )}
              </div>
              <div className="camera-button">
                <button
                  className="btn btn-danger"
                  onClick={this.handleCancelButtonClick}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-light"
                  onClick={this.handleCaptureButtonClick}
                ></button>
                <button
                  className="btn btn-primary"
                  onClick={this.handleUploadButtonClick}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MasukKerja;
