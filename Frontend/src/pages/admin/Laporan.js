import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../utils/css/sb-admin-2.min.css";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Laporan = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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
                <i className="fa fa-bars" />
              </button>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <div className="nav-item dropdown no-arrow">
                  <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
                    <Dropdown.Toggle variant="white">
                      <span className="mr-2 d-none d-lg-inline text-black">
                        IC
                      </span>
                      <img
                        alt=""
                        className="img-profile rounded-circle"
                        src="../../admin/profil.png"
                      />
                    </Dropdown.Toggle>
                    {/* Dropdown - User Information */}
                    <Dropdown.Menu className="dropdown-menu-right shadow animated--grow-in">
                      <Dropdown.Item href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid" id="beranda">
              {/* Area Chart PRESENSI PULANG HARI INI*/}
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between bg-white">
                  <div className="header tulisan">
                    <div className="header">
                      Laporan
                      <span className="blue-tag ms-2">MSIB Batch 5</span>
                    </div>
                    <div className="sub-header">SEAMEO QITEP In Language</div>
                  </div>
                  <div className="header-buttons">
                    <form className="d-sm-inline-block form-inline mr-0 mw-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border border-secondary small"
                          placeholder="Cari..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-primary search-button"
                            type="button"
                          >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                          </button>
                        </div>
                      </div>
                    </form>
                    <button
                      className="btn btn-secondary custom-print-button"
                      type="button"
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
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body ">
                  <DataTable
                    value={DATA}
                    paginator
                    rows={6}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    tableStyle={{ textAlign: "center" }}
                    className="customDataTable" // Add a custom class for more styling options
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
                            <div style={{ width: "17%" }}>Hadir</div>
                            <div style={{ width: "16%" }}>Izin</div>
                            <div style={{ width: "16%" }}>Sakit</div>
                            <div
                              style={{
                                width: "47%",
                                paddingRight: "5px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Tanpa Keterangan
                            </div>
                          </div>
                        </>
                      }
                      style={{ width: "35%" }} // Adjust the width of the "Status" column
                      alignHeader={"center"}
                      rowSpan={2}
                    ></Column>
                  </DataTable>
                </div>
              </div>
              {/* Content Row */}
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
};

export default Laporan;
