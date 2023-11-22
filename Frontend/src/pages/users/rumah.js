import React from "react";
import "../../App.css";
import akun from "../../assets/Users/akun.png";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import people from "../../assets/Users/front.png";

function rumah() {
  return (
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
              Selamat datang di Sistem Presensi MSIB SEAQIL. Selamat bekerja dan
              semoga pengalaman presensi Anda menjadi lebih praktis dan efektif.
            </p>
          </div>
          <div className="sub-content-rumah-2">
            <button
              className="btn btn-primary"
              style={{ borderWidth: 2, borderColor: "white" }}>
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
            {" "}
            <img src={people} alt="home" className="home" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default rumah;
