// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faChartBar,
  faCheckDouble,
  faDatabase,
  faEnvelopeOpenText,
  faFolder,
  faHouse,
  faRightToBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import "../App.css";

const Sidebar = ({ isSideBarOpen, setIsSideBarOpen }) => {
  const handleSideBarToggle = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <div>
      <ul
        className={`navbar-nav admin-sidebar sidebar sidebar-dark accordion ${
          isSideBarOpen ? "toggled fixed" : ""
        }`}
        id="accordionSidebar"
      >
        <Link className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-text ml-2 fs-2">SEAMIN.</div>
        </Link>
        <li className="nav-item">
          <Link
            id="sidebarToggleTop"
            onClick={handleSideBarToggle}
            className="nav-link"
          >
            <FontAwesomeIcon icon={isSideBarOpen ? faBars : faAngleLeft} />
          </Link>
        </li>
        <li className="nav-item active">
          <Link to="/dashboard" className="nav-link">
            <FontAwesomeIcon icon={faHouse} />
            <span className="ms-2">Beranda</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider text-white" />
        {/* Heading */}
        <div className="sidebar-heading">Presensi Mahasiswa</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            to="/dashboard/presensi_masuk"
            className="nav-link collapsed"
            href="dashboard/#presensi_masuk"
            // data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <FontAwesomeIcon icon={faRightToBracket} />
            <span className="ms-2">Presensi Masuk</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/dashboard/presensi_pulang"
            className="nav-link collapsed"
            href="dashboard/#presensi_pulang"
            // data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <FontAwesomeIcon icon={faCheckDouble} />
            <span className="ms-2">Presensi Pulang</span>
          </Link>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link
            to="/dashboard/data_pengajuan"
            className="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} />
            <span className="ms-2">Pengajuan Izin</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider text-white" />
        {/* Heading */}
        <div className="sidebar-heading">Data Mahasiswa</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            to="/dashboard/data_izin"
            className="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
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
            href="tables.html"
          >
            <FontAwesomeIcon icon={faChartBar} />
            <span className="ms-2">Data Mahasiswa</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard/laporan" className="nav-link" href="charts.html">
            <FontAwesomeIcon icon={faDatabase} />
            <span className="ms-2">Laporan</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block text-white" />
        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <Button
            className="rounded-circle border-0"
            id="accordionSidebar "
            onClick={handleSideBarToggle}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
