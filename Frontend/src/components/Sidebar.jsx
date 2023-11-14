// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faCheckDouble,
  faDatabase,
  faEnvelopeOpenText,
  faFolder,
  faHouse,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  return (
    <ul
      className="navbar-nav admin-sidebar sidebar sidebar-dark accordion"
      id="accordionSidebar">
      {/* Sidebar - Brand */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i class="fa-solid fa-user-tie"></i>
        </div>
        <div className="sidebar-brand-text ml-2 fs-2">SEAMIN.</div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link to="/dashboard" className="nav-link">
          <FontAwesomeIcon icon={faHouse} />
          <span className="ms-2">Beranda</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Presensi Mahasiswa</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          to="/dashboard/presensi"
          className="nav-link collapsed"
          href="dashboard/#presensi_masuk"
          // data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <FontAwesomeIcon icon={faRightToBracket} />
          <span className="ms-2">Presensi Masuk</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/dashboard/presensi"
          className="nav-link collapsed"
          href="dashboard/#presensi_pulang"
          // data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <FontAwesomeIcon icon={faCheckDouble} />
          <span className="ms-2">Presensi Pulang</span>
        </Link>
      </li>
      {/* Nav Item - Utilities Collapse Menu */}
      <li className="nav-item">
        <Link
          to="/dashboard/pengajuan"
          className="nav-link collapsed"
          href="#"
          // data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities">
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
          <span className="ms-2">Pengajuan Izin</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Data Mahasiswa</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          to="/dashboard/DataIzin"
          className="nav-link collapsed"
          href="#"
          // data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages">
          <FontAwesomeIcon icon={faFolder} />
          <span className="ms-2">Data Izin</span>
        </Link>
      </li>
      {/* Nav Item - Charts */}

      {/* Nav Item - Tables */}
      <li className="nav-item">
        <Link
          to="/dashboard/data_mahasiswa"
          className="nav-link"
          href="tables.html">
          <FontAwesomeIcon icon={faChartBar} />
          <span className="ms-2">Data Mahasiswa</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="charts.html">
          <FontAwesomeIcon icon={faDatabase} />
          <span className="ms-2">Laporan</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  );
};

export default Sidebar;
