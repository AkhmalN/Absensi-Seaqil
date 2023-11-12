import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/users/Dasboard";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import Telat from "./pages/users/Telat";
import StatusPengajuan from "./pages/users/StatusPengajuan";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Dasboard} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="telat_kerja" Component={Telat} />
      <Route path="/status_pengajuan" Component={StatusPengajuan} />
    </Routes>
  </BrowserRouter>
);
