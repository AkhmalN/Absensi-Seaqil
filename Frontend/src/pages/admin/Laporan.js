import React from "react";
/* global DatePicker */
import datepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCaretDown,
  faCogs,
  faList,
  faMagnifyingGlass,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import profil from "../../assets/admin/profil.png";
function Laporan() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <div className="nav-item dropdown no-arrow">
                  <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
                    <Dropdown.Toggle variant="white">
                      <Row className="d-flex align-content-end">
                        <Col xs="3" className="">
                          <img
                            src={profil}
                            alt="logo"
                            className="icon_profile"
                          />
                        </Col>
                        <Col xs="7" className="mt-1">
                          <Row>
                            <span className="header_profile d-none d-lg-inline text-left ">
                              Asep Sutrisno
                            </span>
                          </Row>
                          <Row>
                            <span className="sub-header_profile d-none d-lg-inline text-left ">
                              Koordinator
                            </span>
                          </Row>
                        </Col>
                        <Col xs="1" className="mt-2 ps-3">
                          <FontAwesomeIcon
                            icon={faCaretDown}
                            className="sub-header_profile d-none d-lg-inline text-left "
                          />
                        </Col>
                      </Row>
                    </Dropdown.Toggle>
                    {/* Dropdown - User Information */}
                    <Dropdown.Menu className="dropdown-menu-right shadow animated--grow-in">
                      <Dropdown.Item href="#">
                        <FontAwesomeIcon icon={faUser} />
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <FontAwesomeIcon icon={faCogs} />
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <FontAwesomeIcon icon={faList} />
                        Activity Log
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <FontAwesomeIcon icon={faSignOut} />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid admin-bg w-100" id="beranda">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex justify-content-between bg-white">
                  <div className="header tulisan">
                    <div className="header">
                      Laporan
                      {/* <span className="sub-header ms-2">27/10/2023</span> */}
                      <span className="blue-tag ms-2">MSIB Batch 5</span>
                    </div>
                    <div className="sub-header">SEAMEO QITEP In Language</div>
                  </div>
                  {/* <div className="date-picker-container">
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleChange}
                      dateFormat="dd/MM/yyyy"
                      className="date-picker"
                    />
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="dropdown-icon"
                    /> */}
                  {/* </div> */}
                  <form className="d-flex align-items-center form-inline mr-0 mw-100 navbar-search">
                    <button
                      className="print-button"
                      type="button"
                      style={{ marginRight: "16px" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="#1C1D22"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6.6665 14.1667L9.99984 17.5M9.99984 17.5L13.3332 14.1667M9.99984 17.5V10M16.6665 13.9524C17.6844 13.1117 18.3332 11.8399 18.3332 10.4167C18.3332 7.88536 16.2811 5.83333 13.7498 5.83333C13.5677 5.83333 13.3974 5.73833 13.3049 5.58145C12.2182 3.73736 10.2119 2.5 7.9165 2.5C4.46472 2.5 1.6665 5.29822 1.6665 8.75C1.6665 10.4718 2.36271 12.0309 3.48896 13.1613" />
                      </svg>
                      Cetak
                    </button>
                    <div className="input-group">
                      <input
                        type="text"
                        className="search-button"
                        placeholder="Cari"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Card Body */}
                <div className="card-body ">
                  <DataTable
                    value={DATA}
                    paginator
                    rows={6}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ textAlign: "center" }}
                    className="customDataTable"
                    paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
                  >
                    <Column
                      field="no"
                      header="No"
                      style={{ width: "3%" }}
                      alignHeader={"center"}
                    ></Column>
                    <Column
                      field="tgl"
                      header="Tanggal"
                      style={{ width: "9%" }}
                      alignHeader={"center"}
                    ></Column>
                    <Column
                      field="IDk"
                      header="ID Kegiatan"
                      style={{ width: "9%" }}
                      alignHeader={"center"}
                    ></Column>
                    <Column
                      field="nm"
                      header="Nama"
                      style={{ width: "14%" }}
                      alignHeader={"center"}
                    ></Column>
                    <Column
                      field="div"
                      header="Divisi"
                      style={{ width: "11%" }}
                      alignHeader={"center"}
                    ></Column>
                    <Column
                      // field="stat_i"
                      header={
                        <>
                          Status
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: "5px", // Adjust the padding on top
                            }}
                          >
                            <div style={{ width: "17%", margin: "0 10px" }}>
                              Hadir
                            </div>
                            <div style={{ width: "16%", margin: "0 10px" }}>
                              Izin
                            </div>
                            <div style={{ width: "16%", margin: "0 10px" }}>
                              Sakit
                            </div>
                            <div
                              style={{
                                width: "47%",
                                paddingRight: "5px",
                                whiteSpace: "nowrap",
                                margin: "0 10px",
                              }}
                            >
                              Tanpa Keterangan
                            </div>
                          </div>
                        </>
                      }
                      style={{ width: "20%" }} // Adjust the width of the "Status" column
                      alignHeader={"center"}
                      rowSpan={2}
                    ></Column>
                  </DataTable>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © MSIB Batch 5 SEAQIL 2023</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
      </div>
      {/* End of Page Wrapper */}
    </>
  );
}

export default Laporan;
