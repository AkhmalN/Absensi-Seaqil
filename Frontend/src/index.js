import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MasukKerja from "./pages/users/MasukKerja";
import StatusPengajuan from "./pages/users/StatusPengajuan";
import RekapPresensi from "./pages/users/RekapPresensi";
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";
import DataIzin from "./pages/admin/DataIzin";
import formmasukkerja from "./components/FormMasukKerja";
import Laporan from "./pages/admin/Laporan";
import presensi_masuk from "./pages/users/presensi_masuk";
import selesai_bekerja from "./pages/users/selesai_bekerja";
import FormTelatKerja from "./components/FormTelatKerja";
import kerja_masuk from "./pages/users/kerja_masuk";
import Beranda from "./pages/users/beranda";
import Login from "./pages/users/Login";
import Home from "./pages/users/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/pengajuan_izin" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/data_izin" Component={DataIzin} />
      <Route path="/dashboard/laporan" Component={Laporan} />

      <Route path="/login" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/status_pengajuan" Component={StatusPengajuan} />
      <Route path="/rekap_presensi" Component={RekapPresensi} />
      <Route path="/beranda" Component={Beranda} />
      <Route path="/presensi_masuk" Component={presensi_masuk} />
      <Route path="/selesai_bekerja" Component={selesai_bekerja} />
      <Route path="/kerja_masuk" Component={kerja_masuk} />
      <Route path="/dashboard/form_masuk_kerja" Component={formmasukkerja} />
      <Route path="/dashboard/form_telat_kerja" Component={FormTelatKerja} />
      {/* <Route path="/dashboard/Laporan" Component={Laporan} /> */}
    </Routes>
  </BrowserRouter>
);
