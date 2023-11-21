import React from "react";
import Sidebar from "../../components/Sidebar";
import "../../utils/css/sb-admin-2.min.css";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import "../../App.css";
import profil from "../../assets/admin/profil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "@react-hook/media-query";

const Laporan = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const isMediumScreen = useMediaQuery(
    "(max-width: 992px) and (min-width: 768px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const marginLeft = isLargeScreen
    ? isSideBarOpen
      ? "130px"
      : "250px"
    : isMediumScreen
    ? isSideBarOpen
      ? "130px"
      : "170"
    : "0";
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar
          isSideBarOpen={isSideBarOpen}
          setIsSideBarOpen={setIsSideBarOpen}
        />
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* Main Content */}
          <div
            id="content"
            style={{
              marginLeft,
              transition: "margin 0.3s ease", // Optional: Add a smooth transition effect
              padding: isSmallScreen ? "10px" : "0", // Optional: Add padding for small screens
            }}>
            {/* <Button onClick={toggleSidebar}>Click</Button> */}
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button
                id="sidebarToggleTop"
                onClick={toggleSidebar}
                className="mx-2 d-block d-lg-none"
                style={{
                  display: "flex",
                  JustifyContent: "center",
                  alignItems: "center",
                  border: "none",
                  backgroundColor: "#fff",
                  color: "#266CB2",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "600",
                }}>
                <FontAwesomeIcon icon={faBars} />
              </button>
              {/* Topbar Navbar */}
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}

                <div className="nav-item ">
                  <Row className="d-flex align-content-end">
                    <Col xs="3" className="d-flex align-content-right">
                      <img src={profil} alt="logo" className="icon_profile" />
                    </Col>
                    <Col xs="8" className="mt-1 ms-1">
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
                  </Row>
                </div>
              </ul>
            </nav>
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
                      className="print-button "
                      type="button"
                      style={{ marginRight: "16px" }}>
                      <FontAwesomeIcon icon={faPrint} />
                      <span className="d-none d-lg-inline">Cetak</span>
                    </button>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control border border-secondary small"
                        placeholder="Cari..."
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
                    paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
                    <Column
                      field="no"
                      header="No"
                      style={{ width: "3%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="tgl"
                      header="Tanggal"
                      style={{ width: "9%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="IDk"
                      header="ID Kegiatan"
                      style={{ width: "9%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="nm"
                      header="Nama"
                      style={{ width: "14%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="div"
                      header="Divisi"
                      style={{ width: "11%" }}
                      alignHeader={"center"}></Column>
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
                            }}>
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
                              }}>
                              Tanpa Keterangan
                            </div>
                          </div>
                        </>
                      }
                      style={{ width: "20%" }} // Adjust the width of the "Status" column
                      alignHeader={"center"}
                      rowSpan={2}></Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © MSIB Batch 5 SEAQIL 2023</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Laporan;
