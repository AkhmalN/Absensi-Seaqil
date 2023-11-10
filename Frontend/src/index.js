import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/users/Dasboard";
import IzinKerja from "./pages/users/IzinKerja";
import MasukKerja from "./pages/users/MasukKerja";
import Telat from "./pages/users/Telat";
import DB_Admin from "./pages/admin/DB_Admin";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Dasboard} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="telat_kerja" Component={Telat} />
      <Route path="/db_admin" Component={DB_Admin} />
    </Routes>
  </BrowserRouter>
);
