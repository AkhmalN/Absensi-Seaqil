import React from "react";
import ReactDOM from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/users/Dasboard";
import MasukKerja from "./pages/users/MasukKerja";
import Telat from "./pages/users/Telat";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS
import Dashboard from "./pages/admin/Dashboard";
import Presensi from "./pages/admin/Presensi";
import Pengajuan from "./pages/admin/Pengajuan";
import FormIzin from "./components/FormIzin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Dasboard} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={FormIzin} />
      <Route path="telat_kerja" Component={Telat} />
      <Route path="/dashboard" Component={Dashboard} />
      <Route path="/dashboard/presensi" Component={Presensi} />
      <Route path="/dashboard/pengajuan" Component={Pengajuan} />
    </Routes>
  </BrowserRouter>
);
