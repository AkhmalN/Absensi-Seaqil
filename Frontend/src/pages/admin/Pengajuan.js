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
import { faBars, faCheck, faFilePdf, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import checkmark from "../../assets/admin/check mark.png";
import { useMediaQuery } from "@react-hook/media-query";

const Pengajuan = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const isMediumScreen = useMediaQuery("(max-width: 992px) and (min-width: 768px)");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const marginLeft = isLargeScreen ? (isSideBarOpen ? "130px" : "250px") : isMediumScreen ? (isSideBarOpen ? "130px" : "170") : "0";
  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  const [showDelete, setShowDelete] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertApprove, setShowAlertApprove] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => {
    setShowDelete(true);
  };

  const handleCloseAlertDelete = () => setShowAlertDelete(false);
  const handleShowAlertDelete = () => {
    setShowAlertDelete(true);
    setTimeout(() => {
      setShowAlertDelete(false);
    }, 2000);
  };

  const handleCloseAlertApprove = () => setShowAlertApprove(false);
  const handleShowAlertApprove = () => {
    setShowAlertApprove(true);
    setTimeout(() => {
      setShowAlertApprove(false);
    }, 2000);
  };

  const ButtonYakin = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseDelete();
    handleShowAlertDelete();
  };
  return (
    <>
      <div id="wrapper">
        {/* Sidebar */}
        <Sidebar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
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
            }}
          >
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
                }}
              >
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
                        <span className="header_profile d-none d-lg-inline text-left ">Asep Sutrisno</span>
                      </Row>
                      <Row>
                        <span className="sub-header_profile d-none d-lg-inline text-left ">Koordinator</span>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </ul>
            </nav>
            {/* BUTTON DELETE */}
            <Modal show={showDelete} onHide={handleCloseDelete} aria-labelledby="contained-modal-title-vcenter" centered size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">PERINGATAN!</div>
                <div className="modal-body text-center">Anda yakin untuk menolak data ini?</div>
                <div className="d-flex justify-content-center mt-2" style={{ border: "none" }}>
                  <button className="batal-btn me-2" onClick={handleCloseDelete}>
                    Batal
                  </button>
                  <button className="decline ms-2" onClick={ButtonYakin}>
                    Yakin
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON DELETE */}
            {/* BERHASIL HAPUS */}
            <Modal show={showAlertDelete} onHide={handleCloseAlertDelete} aria-labelledby="contained-modal-title-vcenter" centered size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">Berhasil Ditolak!</div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL HAPUS */}
            <Modal show={showAlertApprove} onHide={handleCloseAlertApprove} aria-labelledby="contained-modal-title-vcenter" centered size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">Berhasil di Approve!</div>
              </Modal.Body>
            </Modal>
            <div className="container-fluid" id="pengajuan izin">
              <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between bg-white">
                  <div className="header tulisan">
                    <div className="header">
                      Daftar Pengajuan Izin
                      <span className="blue-tag ms-2">MSIB Batch 5</span>
                    </div>
                    <div className="sub-header">SEAMEO QITEP In Language</div>
                  </div>
                  <form className="d-sm-inline-block form-inline mr-0 mw-100 navbar-search">
                    <div className="input-group">
                      <input type="text" className="form-control border border-secondary small" placeholder="Cari..." aria-label="Search" aria-describedby="basic-addon2" />
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
                    tableStyle={{ textAlign: "center", minWidth: "50rem" }}
                    className="customDataTable" // Add a custom class for more styling options
                    paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
                  >
                    <Column field="no" header="No" style={{ width: "3%" }}></Column>
                    <Column field="IDk" header="ID Kegiatan" style={{ width: "14%" }} alignHeader={"center"}></Column>
                    <Column field="tgl" header="Tanggal" style={{ width: "12%" }} alignHeader={"center"}></Column>
                    <Column field="nm" header="Nama" style={{ width: "20%" }} alignHeader={"center"}></Column>
                    <Column field="div" header="Divisi" style={{ width: "15%" }} alignHeader={"center"}></Column>
                    <Column
                      field="file"
                      header="File"
                      style={{ width: "9%" }}
                      alignHeader={"center"}
                      body={(rowData) => (
                        <div>
                          <FontAwesomeIcon icon={faFilePdf} size="lg" type="button" />
                        </div>
                      )}
                    ></Column>
                    <Column field="stat_i" header="Status" style={{ width: "10%" }} alignHeader={"center"}></Column>
                    <Column
                      field="aksi"
                      header="Aksi"
                      style={{ width: "16%" }}
                      alignHeader={"center"}
                      body={(rowData) => (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button className="check me-2 " type="button" onClick={handleShowAlertApprove}>
                              <FontAwesomeIcon icon={faCheck} size="lg" />
                            </button>
                            <button className="decline " type="button" onClick={handleShowDelete}>
                              <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                          </div>
                        </div>
                      )}
                    ></Column>
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

export default Pengajuan;
