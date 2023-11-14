import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/users/Dasboard";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import Telat from "./pages/users/Telat";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import Dashboard from "./pages/admin/Dashboard";
import Pengajuan from "./pages/admin/Pengajuan";
import DataMahasiswa from "./pages/admin/DataMahasiswa";
import FormMasukKerja from "./components/FormMasukKerja";
import DataIzin from "./pages/admin/DataIzin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Dasboard} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="telat_kerja" Component={Telat} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/DataIzin" Component={DataIzin} />
      <Route path="/dashboard/pengajuan" Component={Pengajuan} />
      <Route path="/dashboard/data_mahasiswa" Component={DataMahasiswa} />
      <Route path="/dashboard/form_masuk_kerja" Component={FormMasukKerja} />
    </Routes>
  </BrowserRouter>
);
