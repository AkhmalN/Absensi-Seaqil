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
  faCheck,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import checkmark from "../../assets/admin/check mark.png";
import selfie from "../../assets/admin/selfie.jpg";
import Terlambat from "../../fragments/terlambat";
import MahasiswaMagang from "../../fragments/mahasiswa_magang";
import PengajuanIzin from "../../fragments/pengajuan_izin";
import PresensiHarian from "../../fragments/Presensi_hari_ini";
import { useMediaQuery } from "@react-hook/media-query";

const Dashboard = () => {
  const isLargeScreen = useMediaQuery("(min-width: 992px)");
  const isMediumScreen = useMediaQuery(
    "(max-width: 992px) and (min-width: 768px)"
  );
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
<<<<<<< HEAD

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
=======
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
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
  };
  const [showDelete, setShowDelete] = useState(false);
  const [showApprove, setshowApprove] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAlertAdd, setShowAlertAdd] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertApprove, setShowAlertApprove] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseAlertAdd = () => setShowAlertAdd(false);
  const handleShowAlertAdd = () => {
    setShowAlertAdd(true);
    setTimeout(() => {
      setShowAlertAdd(false);
    }, 2000);
  };

  const ButtonAdd = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseAdd();
    handleShowAlertAdd();
  };
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const handleCloseAlertDelete = () => setShowAlertDelete(false);
<<<<<<< HEAD
  const handleShowAlertDelete = () => setShowAlertDelete(true);
=======
  const handleShowAlertDelete = () => {
    setShowAlertDelete(true);
    setTimeout(() => {
      setShowAlertDelete(false);
    }, 2000);
  };
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51

  const ButtonDelete = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseDelete();
    handleShowAlertDelete();
  };

  const handleCloseApprove = () => setshowApprove(false);
  const handleshowApprove = () => setshowApprove(true);

  const handleCloseAlertApprove = () => setShowAlertApprove(false);
  const handleShowAlertApprove = () => {
    setShowAlertApprove(true);
    setTimeout(() => {
      setShowAlertApprove(false);
    }, 2000);
  };

  const ButtonApprove = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseApprove();
    handleShowAlertApprove();
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
<<<<<<< HEAD
            style={{ marginLeft: isSideBarOpen ? "150px" : "300px" }}>
=======
            style={{
              marginLeft,
              transition: "margin 0.3s ease", // Optional: Add a smooth transition effect
              padding: isSmallScreen ? "10px" : "0", // Optional: Add padding for small screens
            }}>
            {/* <Button onClick={toggleSidebar}>Click</Button> */}
            {/* Topbar */}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/* Sidebar Toggle (Topbar) */}
              <button
                id="sidebarToggleTop"
<<<<<<< HEAD
                className="btn btn-link d-md-none rounded-circle mr-3"
                onClick={toggleSidebar}>
=======
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
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
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
<<<<<<< HEAD
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
                        data-target="#logoutModal">
                        <FontAwesomeIcon icon={faSignOut} />
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
=======
                      <Row>
                        <span className="sub-header_profile d-none d-lg-inline text-left ">
                          Koordinator
                        </span>
                      </Row>
                    </Col>
                  </Row>
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                </div>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid" id="beranda">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
              </div>
              {/* Content Row */}
              <div className="row">
                <PresensiHarian />
                <Terlambat />
                <MahasiswaMagang />
                <PengajuanIzin />
              </div>
              {/* Content Row */}
            </div>
            {/* Area Chart PRESENSI PULANG HARI INI*/}
            <div className="container-fluid" id="presensi_pulang">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex justify-content-between bg-white">
                  <div className="header tulisan">
                    <div className="header">
                      Presensi Pulang Hari Ini
                      <span className="blue-tag ms-2">MSIB Batch 5</span>
                    </div>
                    <div className="sub-header">SEAMEO QITEP In Language</div>
                  </div>
                  <form className="d-flex align-items-center form-inline mr-0 mw-100 navbar-search">
                    <button
                      className="check me-2"
                      type="button"
                      onClick={handleShowAdd}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path
                          d="M19 7.5H18V6.5C18 6.23478 17.8946 5.98043 17.7071 5.79289C17.5196 5.60536 17.2652 5.5 17 5.5C16.7348 5.5 16.4804 5.60536 16.2929 5.79289C16.1054 5.98043 16 6.23478 16 6.5V7.5H15C14.7348 7.5 14.4804 7.60536 14.2929 7.79289C14.1054 7.98043 14 8.23478 14 8.5C14 8.76522 14.1054 9.01957 14.2929 9.20711C14.4804 9.39464 14.7348 9.5 15 9.5H16V10.5C16 10.7652 16.1054 11.0196 16.2929 11.2071C16.4804 11.3946 16.7348 11.5 17 11.5C17.2652 11.5 17.5196 11.3946 17.7071 11.2071C17.8946 11.0196 18 10.7652 18 10.5V9.5H19C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5C20 8.23478 19.8946 7.98043 19.7071 7.79289C19.5196 7.60536 19.2652 7.5 19 7.5ZM11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5Z"
                          fill="#1C711B"
                        />
                      </svg>
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
<<<<<<< HEAD
                    tableStyle={{ textAlign: "center" }}
                    className="customDataTable" // Add a custom class for more styling options
=======
                    tableStyle={{ textAlign: "center", minWidth: "50rem" }}
                    className="customDataTable"
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                    paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
                    <Column
                      field="no"
                      header="No"
                      style={{ width: "3%" }}></Column>
                    <Column
                      field="IDk"
                      header="ID Kegiatan"
<<<<<<< HEAD
                      style={{ width: "15%" }}
=======
                      style={{ width: "14%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="shift"
                      header="Shift"
<<<<<<< HEAD
                      style={{ width: "11%" }}
=======
                      style={{ width: "10%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="nm"
                      header="Nama"
<<<<<<< HEAD
                      style={{ width: "17%" }}
=======
                      style={{ width: "20%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="div"
                      header="Divisi"
<<<<<<< HEAD
                      style={{ width: "16%" }}
=======
                      style={{ width: "12%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="jk"
                      header="Jam Keluar"
<<<<<<< HEAD
                      style={{ width: "11%" }}
=======
                      style={{ width: "12%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="stat_p"
                      header="Status"
<<<<<<< HEAD
                      style={{ width: "11%" }}
=======
                      style={{ width: "13%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
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
                          }}>
                          <button
                            className="check me-2 "
                            type="button"
<<<<<<< HEAD
                            onClick={handleShowEdit}>
=======
                            onClick={handleshowApprove}>
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                            <FontAwesomeIcon icon={faCheck} size="lg" />
                          </button>
                          <button
                            className="decline "
                            type="button"
                            onClick={handleShowDelete}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                          </button>
                        </div>
                      )}></Column>
                  </DataTable>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            {/* BUTTON DELETE */}
            <Modal
              show={showDelete}
              onHide={handleCloseDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  PERINGATAN!
                </div>
                <div className="modal-body text-center">
                  Anda yakin menghapus data ini?
                </div>
                <div
                  className="d-flex justify-content-center mt-2"
                  style={{ border: "none" }}>
                  <button
                    className="batal-btn me-2"
                    onClick={handleCloseDelete}>
                    Batal
                  </button>
                  <button
                    className="decline ms-2"
                    onClick={handleShowAlertDelete}>
                    Yakin
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON DELETE */}
            {/* BERHASIL HAPUS */}
            <Modal
              show={showAlertDelete}
              onHide={handleCloseAlertDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Data Berhasil Dihapus!
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL HAPUS */}

            {/* BUTTON EDIT */}
            <Modal
              show={showEdit}
              onHide={handleCloseEdit}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body className="modal-body">
                <Modal.Body>
                  <div className="modal-header-edit text-center mb-3">
                    Edit Data
                    <div className="mt-3">
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="IdK"
                          placeholder="ID Kegiatan"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="nm"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="div"
                          placeholder="Divisi"
                        />
                      </div>
                      <div class="mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Shift</option>
                          <option value="Pagi">Pagi</option>
                          <option value="Siang">Siang</option>
                        </select>
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="pass"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button
                      className="batal-btn me-2"
                      onClick={handleCloseEdit}>
                      Batal
                    </button>
                    <button
                      className="edit-btn ms-2"
                      onClick={handleShowAlertEdit}>
                      Simpan
                    </button>
                  </div>
                </Modal.Body>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON EDIT */}

            {/* BERHASIL EDIT */}
            <Modal
              show={showAlertEdit}
              onHide={handleCloseAlertEdit}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Data Berhasil Diedit!
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL EDIT */}

            {/* BUTTON ADD PERSON */}
=======
            {/* BUTTON ADD PRESENSI */}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
            <Modal
              show={showAdd}
              onHide={handleCloseAdd}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="md">
              <Modal.Body className="modal-body">
                <Modal.Body>
                  <div className="modal-header-edit text-center mb-3">
                    Tambah Presensi
                    <Row className="mt-3">
                      <div className="col-6 modal-header-edit">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Cari..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-primary btn-sm"
                              type="button"
                              style={{
                                backgroundColor: "#266cb2",
                                borderBottomRightRadius: "10px",
                                borderTopRightRadius: "10px",
                              }}>
                              <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <Col>
                        <div className="mt-3">
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="IdK"
                              placeholder="ID Kegiatan"
                            />
                          </div>
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="nm"
                              placeholder="Nama Lengkap"
                            />
                          </div>
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="div"
                              placeholder="Divisi"
                            />
                          </div>
                          <div class="mb-2">
                            <select
                              class="form-select"
                              aria-label="Default select example">
                              <option selected>Shift</option>
                              <option value="Pagi">Pagi</option>
                              <option value="Siang">Siang</option>
                            </select>
                          </div>
                          <div class="mb-2">
                            <input
                              type="date"
                              className="form-control"
                              id="tgl"
                              placeholder="Tanggal"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div className="mt-3">
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="jm"
                              placeholder="Jam Masuk"
                            />
                          </div>
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="jk"
                              placeholder="Jam Keluar"
                            />
                          </div>
                          <div class="mb-2">
                            <select
                              class="form-select"
                              aria-label="Default select example">
                              <option selected>Shift</option>
                              <option value="Pagi">Tepat Waktu</option>
                              <option value="Siang">Terlambat</option>
                            </select>
                          </div>
                          <div class="mb-2">
                            <input
                              type="text"
                              className="form-control"
                              id="Alasan"
                              placeholder="Alasan"
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button className="batal-btn me-2" onClick={handleCloseAdd}>
                      Batal
                    </button>
                    <button className="edit-btn ms-2" onClick={ButtonAdd}>
                      Simpan
                    </button>
                  </div>
                </Modal.Body>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON ADD PRESENSI */}
            {/* BERHASIL ADD PRESENSI*/}
            <Modal
              show={showAlertAdd}
              onHide={handleCloseAlertAdd}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Data Berhasil Ditambahkan!
                </div>
              </Modal.Body>
            </Modal>
<<<<<<< HEAD
            {/* END OF BERHASIL ADD */}

            {/* Card Header - PRESENSI HARI INI*/}
            <div className="container-fluid" id="presensi_masuk">
              <div className="card shadow mb-4">
                <div className="card shadow mb-4">
                  {/* Card Header - Dropdown */}
                  <div className="card-header py-3 d-flex justify-content-between bg-white">
                    <div className="header tulisan">
                      <div className="header">
                        Presensi Masuk Hari Ini
                        <span className="sub-header ms-2">27/10/2023</span>
                        <span className="blue-tag ms-2">MSIB Batch 5</span>
                      </div>
                      <div className="sub-header">SEAMEO QITEP In Language</div>
                    </div>
                    <form className="d-flex align-items-center form-inline mr-0 mw-100 navbar-search">
                      <button
                        className="check me-2 "
                        type="button"
                        onClick={handleShowAdd}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none">
                          <path
                            d="M19 7.5H18V6.5C18 6.23478 17.8946 5.98043 17.7071 5.79289C17.5196 5.60536 17.2652 5.5 17 5.5C16.7348 5.5 16.4804 5.60536 16.2929 5.79289C16.1054 5.98043 16 6.23478 16 6.5V7.5H15C14.7348 7.5 14.4804 7.60536 14.2929 7.79289C14.1054 7.98043 14 8.23478 14 8.5C14 8.76522 14.1054 9.01957 14.2929 9.20711C14.4804 9.39464 14.7348 9.5 15 9.5H16V10.5C16 10.7652 16.1054 11.0196 16.2929 11.2071C16.4804 11.3946 16.7348 11.5 17 11.5C17.2652 11.5 17.5196 11.3946 17.7071 11.2071C17.8946 11.0196 18 10.7652 18 10.5V9.5H19C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5C20 8.23478 19.8946 7.98043 19.7071 7.79289C19.5196 7.60536 19.2652 7.5 19 7.5ZM11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5Z"
                            fill="#1C711B"
                          />
                        </svg>
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
                      className="customDataTable" // Add a custom class for more styling options
                      paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
                      <Column
                        field="no"
                        header="No"
                        style={{ width: "3%" }}></Column>
                      <Column
                        field="IDk"
                        header="ID Kegiatan"
                        style={{ width: "15%" }}
                        alignHeader={"center"}></Column>
                      <Column
                        field="shift"
                        header="Shift"
                        style={{ width: "11%" }}
                        alignHeader={"center"}></Column>
                      <Column
                        field="nm"
                        header="Nama"
                        style={{ width: "17%" }}
                        alignHeader={"center"}></Column>
                      <Column
                        field="div"
                        header="Divisi"
                        style={{ width: "16%" }}
                        alignHeader={"center"}></Column>
                      <Column
                        field="jm"
                        header="Jam Masuk"
                        style={{ width: "11%" }}
                        alignHeader={"center"}></Column>
                      <Column
                        field="stat_p"
                        header="Status"
                        style={{ width: "11%" }}
                        alignHeader={"center"}></Column>
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
                            }}>
                            <button
                              className="check me-2 "
                              type="button"
                              onClick={handleShowEdit}>
                              <FontAwesomeIcon icon={faCheck} size="lg" />
                            </button>
                            <button
                              className="decline "
                              type="button"
                              onClick={handleShowDelete}>
                              <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                          </div>
                        )}></Column>
                    </DataTable>
                  </div>
                </div>
              </div>
            </div>
=======
            {/* END OF BERHASIL ADD PRESENSI*/}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
            {/* BUTTON DELETE */}
            <Modal
              show={showDelete}
              onHide={handleCloseDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  PERINGATAN!
                </div>
                <div className="modal-body text-center">
                  Anda yakin untuk menolak data ini?
                </div>
                <div
                  className="d-flex justify-content-center mt-2"
                  style={{ border: "none" }}>
                  <button
                    className="batal-btn me-2"
                    onClick={handleCloseDelete}>
                    Batal
                  </button>
                  <button className="decline ms-2" onClick={ButtonDelete}>
                    Yakin
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON DELETE */}
            {/* BERHASIL HAPUS */}
            <Modal
              show={showAlertDelete}
              onHide={handleCloseAlertDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">Berhasil Ditolak!</div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL HAPUS */}
            {/* BUTTON Approve */}
            <Modal
              show={showApprove}
              onHide={handleCloseApprove}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="lg">
              <Modal.Body className="modal-body">
                <Modal.Body>
                  <div className="modal-header-edit text-center mb-3">
                    Approve Presensi
                  </div>
                  <div className="approve-presensi">
                    <Row>
                      <Col
                        md="12"
                        sm="12"
                        lg="4"
                        className="d-flex justify-content-left">
                        <table border="0" cellpadding="8">
                          <tr>
                            <td>ID Absen</td>
                            <td>00001</td>
                          </tr>
                          <tr>
                            <td>ID Kegiatan</td>
                            <td>656768</td>
                          </tr>
                          <tr>
                            <td>Tanggal</td>
                            <td>23/10/2023</td>
                          </tr>
                          <tr>
                            <td>Shift</td>
                            <td>Pagi</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td classclassName="green-tag">Tepat Waktu</td>
                          </tr>
                        </table>
                      </Col>
                      <Col
                        md="12"
                        sm="12"
                        lg="4"
                        className="d-flex justify-content-left">
                        <table border="0" cellpadding="8">
                          <tr>
                            <td>Nama</td>
                            <td>Kartika Satu</td>
                          </tr>
                          <tr>
                            <td>Divisi</td>
                            <td>Web Designer</td>
                          </tr>
                          <tr>
                            <td>Jam Masuk</td>
                            <td>07.30</td>
                          </tr>
                          <tr>
                            <td>Jam Keluar</td>
                            <td>--.--</td>
                          </tr>
                        </table>
                      </Col>
                      <Col
                        md="12"
                        sm="12"
                        lg="4"
                        className="d-flex justify-content-center">
                        <img src={selfie} alt="selfie" className="selfie" />
                      </Col>
                    </Row>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button
                      className="batal-btn me-2"
                      onClick={handleCloseApprove}>
                      Batal
                    </button>
                    <button
                      className="approve-btn ms-2"
                      onClick={ButtonApprove}>
                      Simpan
                    </button>
                  </div>
                </Modal.Body>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON Approve */}

            {/* BERHASIL Approve */}
            <Modal
              show={showAlertApprove}
              onHide={handleCloseAlertApprove}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Berhasil di Approve!
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL Approve */}

            <div className="container-fluid" id="presensi_masuk">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex justify-content-between bg-white">
                  <div className="header tulisan">
                    <div className="header">
                      Presensi Masuk Hari Ini
                      <span className="blue-tag ms-2">MSIB Batch 5</span>
                    </div>
                    <div className="sub-header">SEAMEO QITEP In Language</div>
                  </div>
                  <form className="d-flex align-items-center form-inline mr-0 mw-100 navbar-search">
                    <button
                      className="check me-2 "
                      type="button"
                      onClick={handleShowAdd}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none">
                        <path
                          d="M19 7.5H18V6.5C18 6.23478 17.8946 5.98043 17.7071 5.79289C17.5196 5.60536 17.2652 5.5 17 5.5C16.7348 5.5 16.4804 5.60536 16.2929 5.79289C16.1054 5.98043 16 6.23478 16 6.5V7.5H15C14.7348 7.5 14.4804 7.60536 14.2929 7.79289C14.1054 7.98043 14 8.23478 14 8.5C14 8.76522 14.1054 9.01957 14.2929 9.20711C14.4804 9.39464 14.7348 9.5 15 9.5H16V10.5C16 10.7652 16.1054 11.0196 16.2929 11.2071C16.4804 11.3946 16.7348 11.5 17 11.5C17.2652 11.5 17.5196 11.3946 17.7071 11.2071C17.8946 11.0196 18 10.7652 18 10.5V9.5H19C19.2652 9.5 19.5196 9.39464 19.7071 9.20711C19.8946 9.01957 20 8.76522 20 8.5C20 8.23478 19.8946 7.98043 19.7071 7.79289C19.5196 7.60536 19.2652 7.5 19 7.5ZM11.3 9.22C11.8336 8.75813 12.2616 8.18688 12.5549 7.54502C12.8482 6.90316 13 6.20571 13 5.5C13 4.17392 12.4732 2.90215 11.5355 1.96447C10.5979 1.02678 9.32608 0.5 8 0.5C6.67392 0.5 5.40215 1.02678 4.46447 1.96447C3.52678 2.90215 3 4.17392 3 5.5C2.99999 6.20571 3.1518 6.90316 3.44513 7.54502C3.73845 8.18688 4.16642 8.75813 4.7 9.22C3.30014 9.85388 2.11247 10.8775 1.27898 12.1685C0.445495 13.4596 0.00147185 14.9633 0 16.5C0 16.7652 0.105357 17.0196 0.292893 17.2071C0.48043 17.3946 0.734784 17.5 1 17.5C1.26522 17.5 1.51957 17.3946 1.70711 17.2071C1.89464 17.0196 2 16.7652 2 16.5C2 14.9087 2.63214 13.3826 3.75736 12.2574C4.88258 11.1321 6.4087 10.5 8 10.5C9.5913 10.5 11.1174 11.1321 12.2426 12.2574C13.3679 13.3826 14 14.9087 14 16.5C14 16.7652 14.1054 17.0196 14.2929 17.2071C14.4804 17.3946 14.7348 17.5 15 17.5C15.2652 17.5 15.5196 17.3946 15.7071 17.2071C15.8946 17.0196 16 16.7652 16 16.5C15.9985 14.9633 15.5545 13.4596 14.721 12.1685C13.8875 10.8775 12.6999 9.85388 11.3 9.22ZM8 8.5C7.40666 8.5 6.82664 8.32405 6.33329 7.99441C5.83994 7.66476 5.45542 7.19623 5.22836 6.64805C5.0013 6.09987 4.94189 5.49667 5.05764 4.91473C5.1734 4.33279 5.45912 3.79824 5.87868 3.37868C6.29824 2.95912 6.83279 2.6734 7.41473 2.55764C7.99667 2.44189 8.59987 2.5013 9.14805 2.72836C9.69623 2.95542 10.1648 3.33994 10.4944 3.83329C10.8241 4.32664 11 4.90666 11 5.5C11 6.29565 10.6839 7.05871 10.1213 7.62132C9.55871 8.18393 8.79565 8.5 8 8.5Z"
                          fill="#1C711B"
                        />
                      </svg>
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
<<<<<<< HEAD
                    tableStyle={{ textAlign: "center" }}
                    className="customDataTable" // Add a custom class for more styling options
=======
                    tableStyle={{ textAlign: "center", minWidth: "50rem" }}
                    className="customDataTable"
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                    paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
                    <Column
                      field="no"
                      header="No"
                      style={{ width: "3%" }}></Column>
                    <Column
                      field="IDk"
                      header="ID Kegiatan"
<<<<<<< HEAD
                      style={{ width: "11%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="tgl"
                      header="Tanggal"
                      style={{ width: "11%" }}
=======
                      style={{ width: "14%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="shift"
                      header="Shift"
                      style={{ width: "10%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="nm"
                      header="Nama"
<<<<<<< HEAD
                      style={{ width: "15%" }}
=======
                      style={{ width: "20%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
                    <Column
                      field="div"
                      header="Divisi"
<<<<<<< HEAD
                      style={{ width: "11%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="file"
                      header="File"
                      style={{ width: "9%" }}
                      alignHeader={"center"}
                      body={(rowData) => (
                        <div>
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            size="lg"
                            type="button"
                          />
                        </div>
                      )}></Column>
=======
                      style={{ width: "12%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="jm"
                      header="Jam Masuk"
                      style={{ width: "12%" }}
                      alignHeader={"center"}></Column>
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                    <Column
                      field="stat_p"
                      header="Status"
<<<<<<< HEAD
                      style={{ width: "10%" }}
                      alignHeader={"center"}></Column>
                    <Column
                      field="alasan"
                      header="Alasan"
                      style={{ width: "15%" }}
=======
                      style={{ width: "13%" }}
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                      alignHeader={"center"}></Column>
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
                          }}>
<<<<<<< HEAD
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}>
                            <button
                              className="check me-2"
                              type="button"
                              onClick={handleShowEdit}>
                              <FontAwesomeIcon icon={faCheck} size="lg" />
                            </button>
                            <button
                              className="decline"
                              type="button"
                              onClick={handleShowDelete}>
                              <FontAwesomeIcon icon={faXmark} size="lg" />
                            </button>
                          </div>
=======
                          <button
                            className="check me-2 "
                            type="button"
                            onClick={handleshowApprove}>
                            <FontAwesomeIcon icon={faCheck} size="lg" />
                          </button>
                          <button
                            className="decline "
                            type="button"
                            onClick={handleShowDelete}>
                            <FontAwesomeIcon icon={faXmark} size="lg" />
                          </button>
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
                        </div>
                      )}></Column>
                  </DataTable>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            {/* BUTTON DELETE */}
            <Modal
              show={showDelete}
              onHide={handleCloseDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  PERINGATAN!
                </div>
                <div className="modal-body text-center">
                  Anda yakin menghapus data ini?
                </div>
                <div
                  className="d-flex justify-content-center mt-2"
                  style={{ border: "none" }}>
                  <button
                    className="batal-btn me-2"
                    onClick={handleCloseDelete}>
                    Batal
                  </button>
                  <button
                    className="decline ms-2"
                    onClick={handleShowAlertDelete}>
                    Yakin
                  </button>
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON DELETE */}
            {/* BERHASIL HAPUS */}
            <Modal
              show={showAlertDelete}
              onHide={handleCloseAlertDelete}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Data Berhasil Dihapus!
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL HAPUS */}

            {/* BUTTON EDIT */}
            <Modal
              show={showEdit}
              onHide={handleCloseEdit}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body className="modal-body">
                <Modal.Body>
                  <div className="modal-header-edit text-center mb-3">
                    Edit Data
                    <div className="mt-3">
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="IdK"
                          placeholder="ID Kegiatan"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="nm"
                          placeholder="Nama Lengkap"
                        />
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="div"
                          placeholder="Divisi"
                        />
                      </div>
                      <div class="mb-2">
                        <select
                          class="form-select"
                          aria-label="Default select example">
                          <option selected>Shift</option>
                          <option value="Pagi">Pagi</option>
                          <option value="Siang">Siang</option>
                        </select>
                      </div>
                      <div class="mb-2">
                        <input
                          type="text"
                          className="form-control"
                          id="pass"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button
                      className="batal-btn me-2"
                      onClick={handleCloseEdit}>
                      Batal
                    </button>
                    <button
                      className="edit-btn ms-2"
                      onClick={handleShowAlertEdit}>
                      Simpan
                    </button>
                  </div>
                </Modal.Body>
              </Modal.Body>
            </Modal>
            {/* END OF BUTTON EDIT */}

            {/* BERHASIL EDIT */}
            <Modal
              show={showAlertEdit}
              onHide={handleCloseAlertEdit}
              aria-labelledby="contained-modal-title-vcenter"
              centered
              size="sm">
              <Modal.Body>
                <div className="modal-header-decline text-center">
                  <img src={checkmark} alt="checkmark" className="icon_check" />
                </div>
                <div className="modal-body text-center">
                  Data Berhasil Diedit!
                </div>
              </Modal.Body>
            </Modal>
            {/* END OF BERHASIL EDIT */}

            {/* Content Row */}

            {/* /.container-fluid */}
=======
>>>>>>> 3d01702fcea233fae84c6c9a73345237d1a22a51
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

export default Dashboard;
