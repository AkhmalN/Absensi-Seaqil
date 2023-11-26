import React, { Component } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import home from "../../assets/Users/home0.png";
import home1 from "../../assets/Users/home1.png";
import home2 from "../../assets/Users/home2.png";
import home3 from "../../assets/Users/home3.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";
import { Row, Col, Button, Form } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: home, // Gambar default
      showFormMasukKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
    };
  }

  // Fungsi untuk mengubah gambar
  changeImage1 = (home1) => {
    this.setState({
      currentImage: home1,
    });
  };

  // Fungsi untuk mengubah gambar
  changeImage2 = (home2) => {
    this.setState({
      currentImage: home2,
    });
  };

  // Fungsi untuk mengubah gambar
  changeImage3 = (home3) => {
    this.setState({
      currentImage: home3,
    });
  };

  // Fungsi untuk mereset gambar ke gambar default
  resetImage = () => {
    this.setState({
      currentImage: home,
    });
  };

  changeToFormMasukKerja = () => {
    this.setState((prevState) => ({
      showFormMasukKerja: !prevState.showFormMasukKerja,
      showFormIzinKerja: false,
      showFormTelatKerja: false,
    }));
  };
  changeToFormIzinKerja = () => {
    this.setState((prevState) => ({
      showFormMasukKerja: false,
      showFormIzinKerja: !prevState.showFormMasukKerja,
      showFormTelatKerja: false,
    }));
  };
  changeToFormTelatKerja = () => {
    this.setState((prevState) => ({
      showFormMasukKerja: false,
      showFormIzinKerja: false,
      showFormTelatKerja: !prevState.showFormIzinKerja,
    }));
  };
  render() {
    return (
      <>
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
              <h4 className="">Halo, Staf Magang SEAQIL !</h4>
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
                onMouseOver={() => this.changeImage1(home1)}
                onMouseOut={this.resetImage}
                onClick={this.changeToFormMasukKerja}
              >
                Masuk Kerja
              </button>
              <button
                className="btn btn-primary"
                style={{ borderWidth: 2, borderColor: "white" }}
                onMouseOver={() => this.changeImage2(home2)}
                onMouseOut={this.resetImage}
                onClick={this.changeToFormIzinKerja}
              >
                Izin Kerja
              </button>
              <button
                className="btn btn-primary"
                style={{ borderWidth: 2, borderColor: "white" }}
                onMouseOver={() => this.changeImage3(home3)}
                onMouseOut={this.resetImage}
                onClick={this.changeToFormTelatKerja}
              >
                Telat Kerja
              </button>
            </div>
          </div>

          <div className="image-content">
            {/* FORM MASUK KERJA */}
            {this.state.showFormMasukKerja && (
              <div className="sub-content-3">
                <Col className="blur-bg">
                  <div className="header-data">
                    <div className="Teks2">Presensi Hari Ini Sudah Selesai</div>
                  </div>

                  <Form className="container">
                    <Row>
                      <Col>
                        <Form.Label className="custom-text">
                          Waktu Absen Masuk
                        </Form.Label>
                        <Form.Control placeholder="First name" />
                      </Col>
                      <Col sm={{ offset: 2 }}>
                        <Form.Label className="custom-text">
                          ID Kegiatan
                        </Form.Label>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>

                    <Row className="my-5">
                      <Col>
                        <Form.Label className="custom-text">
                          Waktu Absen Selesai
                        </Form.Label>
                        <Form.Control
                          className="kolomFirst"
                          placeholder="First name"
                        />
                      </Col>
                      <Col sm={{ offset: 2 }}>
                        <Form.Label className="custom-text">
                          ID Kegiatan
                        </Form.Label>
                        <Form.Control placeholder="Last name" />
                      </Col>
                    </Row>

                    <div className="button-keluar">
                      <Row>
                        <Col sm={{ offset: 3 }}>
                          <Button type="submit">Absen Keluar</Button>
                        </Col>
                      </Row>
                    </div>
                  </Form>
                </Col>
              </div>
            )}
            {/* FORM IZIN KERJA */}
            {this.state.showFormIzinKerja && (
              <div className="sub-content-3">
                <h2>Form Izin Kerja</h2>
              </div>
            )}
            {/* FORM TELAT KERJA */}
            {this.state.showFormTelatKerja && (
              <div className="sub-content-3">
                <h2>Form Telat Kerja</h2>
              </div>
            )}

            {!this.state.showFormMasukKerja &&
              !this.state.showFormIzinKerja &&
              !this.state.showFormTelatKerja && (
                <div className="sub-content-3">
                  <img src={this.state.currentImage} alt="Current Home Image" />
                </div>
              )}
          </div>
        </div>
      </>
    );
  }
}

export default Home;
