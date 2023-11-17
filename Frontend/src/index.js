import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import Dashboard from "./pages/admin/Dashboard";
import Presensi from "./pages/admin/Presensi";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/dashboard" Component={Dashboard} />
    <Route path="/dashboard/data_pengajuan" Component={Pengajuan} />
    <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
    <Route path="/dashboard/data_izin" Component={DataIzin} />

      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/presensi" Component={Presensi} />
      <Route path="/dashboard/pengajuan" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/form_masuk_kerja" Component={formmasukkerja} />

      <Route path="/dashboard/Laporan" Component={Laporan} />
    </Routes>
  </BrowserRouter>  
);
