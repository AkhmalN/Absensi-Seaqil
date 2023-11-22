import React from "react";
import "../../App.css";
import akun from "../../assets/Users/akun.png";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
function presensi_masuk() {
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
              className="btn btn-primary active"
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
          <div className="sub-content-rumah-3">
            <div className="container" style={{ backgroundColor: "white" }}>
              <div className="row header-content">
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
              <div className="footer-sub-content">
                <button
                  className="btn-done-working me-2 "
                  type="button"
                  onClick={() => {
                    window.location.href = "/selesai_bekerja"; // Navigasi ke laman masuk_kerja
                  }}>
                  Selesai Bekerja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default presensi_masuk;
