import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/users/Dasboard";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import StatusPengajuan from "./pages/users/StatusPengajuan";
import RekapPresensi from "./pages/users/RekapPresensi";
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";

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
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="telat_kerja" Component={Telat} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/presensi" Component={Presensi} />
      <Route path="/dashboard/pengajuan" Component={Pengajuan} />
    </Routes>
  </BrowserRouter>
);
