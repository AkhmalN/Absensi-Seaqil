import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dasboard from "./pages/Dasboard";
import Navbar from "./components/Navbar";
import IzinKerja from "./pages/IzinKerja";
import MasukKerja from "./pages/MasukKerja";
import Telat from "./pages/Telat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" Component={Dasboard} />
      <Route path="/masuk_kerja" Component={MasukKerja} />
      <Route path="/izin_kerja" Component={IzinKerja} />
      <Route path="telat_kerja" Component={Telat} />
    </Routes>
  </BrowserRouter>
);
