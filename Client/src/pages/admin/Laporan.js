import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from "../../components/Sidebar";
import "../../utils/css/sb-admin-2.min.css";
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
  const DateRangePicker = () => {};
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
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
                    <div className="DateRangePicker text-center mt-3">
                      <div className="d-flex align-items-center">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          selectsStart
                          startDate={startDate}
                          endDate={endDate}
                          placeholderText="Start Date"
                          dateFormat="dd/MM/yyyy"
                          className="form-control"
                        />
                        <span className="mx-2">-</span>
                        <DatePicker
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          selectsEnd
                          startDate={startDate}
                          endDate={endDate}
                          placeholderText="End Date"
                          dateFormat="dd/MM/yyyy"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>
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
                    tableStyle={{ textAlign: "center", minWidth: "40rem" }}
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
                      header="ID MSIB"
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
                      header="Status"
                      style={{ width: "20%" }}
                      alignHeader={"center"}
                      rowSpan={2}>
                      <Column
                        field="hdr"
                        header="Hadir"
                        style={{ width: "17%" }}
                        alignHeader={"center"}
                      />
                      <Column
                        field="izin"
                        header="Izin"
                        style={{ width: "16%" }}
                        alignHeader={"center"}
                      />
                      <Column
                        field="skt"
                        header="Sakit"
                        style={{ width: "16%" }}
                        alignHeader={"center"}
                      />
                      <Column
                        field="tnp_ket"
                        header="Tanpa Keterangan"
                        style={{ width: "47%" }}
                        alignHeader={"center"}
                      />
                    </Column>
                  </DataTable>
                </div>
              </div>
            </div>
          </div>

          <footer className="sticky-footer bg-white">
            <div className="container">
              <div className="copyright text-center">
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
