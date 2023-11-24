import React from "react";
import "../../App.css";
import akun from "../../assets/Users/akun.png";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import people from "../../assets/Users/front.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Beranda() {
  return (
    <div className="beranda">
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
                <h4 className="">Win, Staf Magang SEAQIL !</h4>
                <p className="">
                  Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja
                  dan semoga pengalaman presensi Anda menjadi lebih praktis dan
                  efektif.
                </p>
              </div>
              <div className="sub-content-rumah-2">
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}
                  onClick={() => {
                    window.location.href = "/kerja_masuk"; // Navigasi ke laman masuk_kerja
                  }}>
                  Masuk Kerja
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}>
                  Pengajuan Izin
                </button>
                <button
                  className="btn btn-primary"
                  style={{ borderWidth: 2, borderColor: "white" }}>
                  Terlambat
                </button>
              </div>
            </div>
            <div className="image-content">
              <div className="sub-content-rumah-3-index">
                <img src={people} alt="home" className="home" />
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
            <div className="hp-1">
              <div className="row mb-2">
                <div className="col-6">
                  <button
                    className="btn btn-primary"
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
                      window.location.href = "/kerja_masuk"; // Navigasi ke laman masuk_kerja
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
            <div className="hp-2">
              <h4>Halo, Staf Magang SEAQIL !</h4>
              <p>
                Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja
                dan semoga pengalaman presensi Anda menjadi lebih praktis dan
                efektif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
