// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faChartBar,
  faDatabase,
  faEnvelopeOpenText,
  faHouse,
  faRightToBracket,
  faBars,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
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
        id="accordionSidebar">
        <li className="nav-item active">
          {" "}
          <Link
            id="sidebarToggleTop"
            onClick={handleSideBarToggle}
            className="nav-link sidebar-brand d-flex align-items-center justify-content-center">
            <div
              className="sidebar-brand-text fs-3"
              style={{ marginRight: "60px" }}>
              SEAMIN.{" "}
            </div>
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
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link
            to="/dashboard/pengajuan_izin"
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
        <hr className="sidebar-divider text-white" />
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item">
          <Link
            to="/dashboard/data_izin"
            className="nav-link collapsed"
            href="#"
            // data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages">
            <FontAwesomeIcon icon={faRightToBracket} />
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
          <Link to="/dashboard/laporan" className="nav-link" href="charts.html">
            <FontAwesomeIcon icon={faDatabase} />
            <span className="ms-2">Laporan</span>
          </Link>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block text-white" />
        <li className="nav-item">
          <Link to="/dashboard/laporan" className="nav-link" href="charts.html">
            <FontAwesomeIcon icon={faArrowRightToBracket} />
            <span className="ms-2">Keluar</span>
          </Link>
        </li>
        {/* Sidebar Toggler (Sidebar) */}
      </ul>
    </div>
  );
};

export default Sidebar;
