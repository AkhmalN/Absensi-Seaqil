import React, { Component } from "react";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import home from "../../assets/Users/home0.png";
import home1 from "../../assets/Users/home1.png";
import home2 from "../../assets/Users/home2.png";
import home3 from "../../assets/Users/home3.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: home, // Gambar default
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
              <p className="">Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja dan semoga pengalaman presensi Anda menjadi lebih praktis dan efektif.</p>
            </div>
            <div className="sub-content-2">
              <button className="btn btn-primary" style={{ borderWidth: 2, borderColor: "white" }} onMouseOver={() => this.changeImage1(home1)} onMouseOut={this.resetImage}>
                Masuk Kerja
              </button>
              <button className="btn btn-primary" style={{ borderWidth: 2, borderColor: "white" }} onMouseOver={() => this.changeImage2(home2)} onMouseOut={this.resetImage}>
                Izin Kerja
              </button>
              <button className="btn btn-primary" style={{ borderWidth: 2, borderColor: "white" }} onMouseOver={() => this.changeImage3(home3)} onMouseOut={this.resetImage}>
                Telat Kerja
              </button>
            </div>
          </div>
          <div className="image-content">
            <div className="sub-content-3">
              <img src={this.state.currentImage} alt="Current Home Image" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
