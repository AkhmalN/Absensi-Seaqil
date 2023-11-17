import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/users/Login";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import StatusPengajuan from "./pages/users/StatusPengajuan";
import RekapPresensi from "./pages/users/RekapPresensi";
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";
import DataIzin from "./pages/admin/DataIzin";
import formmasukkerja from "./components/FormMasukKerja";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/data_pengajuan" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/data_izin" Component={DataIzin} />

      <Route path="/login" Component={Login} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="/status_pengajuan" Component={StatusPengajuan} />
      <Route path="/rekap_presensi" Component={RekapPresensi} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/DataIzin" Component={DataIzin} />
      <Route path="/dashboard/pengajuan" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/form_masuk_kerja" Component={formmasukkerja} />

      {/* <Route path="/dashboard/Laporan" Component={Laporan} /> */}
    </Routes>
  </BrowserRouter>
);
