import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StatusPengajuan from "./pages/users/StatusPengajuan";
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";
import DataIzin from "./pages/admin/DataIzin";
import Laporan from "./pages/admin/Laporan";
import Login from "./pages/users/Login";
import Home from "./pages/users/Home";
import RekapPresensi from "./pages/admin/RekapPresensi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/pengajuan_izin" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/data_izin" Component={DataIzin} />
      <Route path="/dashboard/laporan" Component={Laporan} />
      <Route path="/dashboard/rekap_presensi" Component={RekapPresensi} />

      <Route path="/login" Component={Login} />
      <Route path="/home" Component={Home} />
      <Route path="/status_pengajuan" Component={StatusPengajuan} />
    </Routes>
  </BrowserRouter>
);
