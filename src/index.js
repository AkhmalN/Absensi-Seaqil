import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
