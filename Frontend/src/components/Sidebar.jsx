// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
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
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text ml-2 fs-2">SEAPIL.</div>
      </Link>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <Link to="/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Beranda</span>
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
          href="#"
          // data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog" />
          <span>Presensi Hari ini</span>
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
          <i className="fas fa-fw fa-wrench" />
          <span>Pengajuan Izin</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}
      <div className="sidebar-heading">Data Mahasiswa</div>
      {/* Nav Item - Pages Collapse Menu */}
      <li className="nav-item">
        <Link
          to="/dashboard/data_pengajuan"
          className="nav-link collapsed"
          href="#"
          // data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages">
          <i className="fas fa-fw fa-folder" />
          <span>Data Pengajuan</span>
        </Link>
      </li>
      {/* Nav Item - Charts */}

      {/* Nav Item - Tables */}
      <li className="nav-item">
        <Link
          to="/dashboard/data_mahasiswa"
          className="nav-link"
          href="tables.html">
          <i className="fas fa-fw fa-table" />
          <span>Data Mahasiswa</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="charts.html">
          <i className="fas fa-fw fa-chart-area" />
          <span>Laporan</span>
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
