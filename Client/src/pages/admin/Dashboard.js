import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import "../../utils/css/sb-admin-2.min.css";
import { useState } from "react";
import "../../App.css";
import profil from "../../assets/admin/profil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
import LocationModal from "../../components/LocationModal";
import PresensiMasuk from "./PresensiMasuk";
import ImageDetailComponents from "../../components/ImageDetailComponents";
import PresensiKeluar from "./PresensiKeluar";

const Dashboard = () => {
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
  const [showDelete, setShowDelete] = useState(false);
  const [showApproveMasuk, setshowApproveMasuk] = useState(false);
  const [showApproveKeluar, setshowApproveKeluar] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showAlertAdd, setShowAlertAdd] = useState(false);
  const [showAlertDelete, setShowAlertDelete] = useState(false);
  const [showAlertApprove, setShowAlertApprove] = useState(false);
  const [dataPresensiMasuk, setDataPresensiMasuk] = useState([]);
  const [dataPresensiKeluar, setDataPresensiKeluar] = useState([]);
  const [showLocation, setShowLocation] = useState(null);
  const [detailDataPresensi, setDetailDataPresensi] = useState([]);
  const [detailDataPresensiKeluar, setDetailDataPresensiKeluar] = useState([]);

  const getDataPresensiMasuk = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/v1/presence/"
      );
      setDataPresensiMasuk(response.data);
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.status);
        console.error("Response data:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  useEffect(() => {
    getDataPresensiMasuk();
  }, []);

  const getDataPresensiKeluar = async () => {
    try {
      const response = await axios.get(
        " http://localhost:8081/api/v1/presence_out/"
      );
      setDataPresensiKeluar(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    getDataPresensiKeluar();
  }, []);

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
  const handleShowAlertDelete = () => {
    setShowAlertDelete(true);
    setTimeout(() => {
      setShowAlertDelete(false);
    }, 2000);
  };

  const ButtonDelete = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseDelete();
    handleShowAlertDelete();
  };

  const handleCloseApproveMasuk = () => setshowApproveMasuk(false);
  const handleshowApproveMasuk = async (id_msib) => {
    setshowApproveMasuk(true);
    try {
      await axios
        .get(` http://localhost:8081/api/v1/presence/${id_msib}`)
        .then((response) => {
          if (response.status === 200) {
            setDetailDataPresensi(response.data.presence);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  const handleCloseAlertApprove = () => setShowAlertApprove(false);
  const handleShowAlertApprove = () => {
    setShowAlertApprove(true);
    setTimeout(() => {
      setShowAlertApprove(false);
    }, 2000);
  };

  const ButtonApprove = () => {
    // Memanggil kedua aksi secara bersamaan
    handleCloseApproveMasuk();
    handleShowAlertApprove();
  };

  const handleCloseApproveKeluar = () => setshowApproveKeluar(false);
  const handleShowApproveKeluar = async (id_msib) => {
    setshowApproveKeluar(true);
    try {
      await axios
        .get(` http://localhost:8081/api/v1/presence_out/${id_msib}`)
        .then((response) => {
          if (response.status === 200) {
            setDetailDataPresensiKeluar(response.data.presence);
          }
        });
    } catch (error) {
      alert(error);
    }
  };

  const handleCloseLocation = () => {
    setShowLocation(false);
  };
  const handleOnClickLocation = () => {
    setShowLocation(true);
  };

  const getStatusClass = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    const targetTimeMorningShift = new Date();
    const targetTimeAfternoonShift = new Date();
    targetTimeMorningShift.setHours(8, 0, 0, 0); // Adjust as needed
    targetTimeAfternoonShift.setHours(13, 0, 0, 0); // Adjust as needed

    // Calculate time differences in milliseconds
    const timeDifferenceOnMorning = createdAtDate - targetTimeMorningShift;
    const timeDifferenceOnAfternoon = createdAtDate - targetTimeAfternoonShift;

    // Determine status based on time differences
    let status;
    if (timeDifferenceOnMorning <= 0) {
      status = "Tepat Waktu Pagi";
    } else if (timeDifferenceOnAfternoon <= 0) {
      status = "Tepat Waktu Siang";
    } else {
      status = "Terlambat";
    }

    return status;
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
            <PresensiKeluar
              dataPresensi={dataPresensiKeluar}
              handleShowAdd={handleShowAdd}
              handleOnClickLocation={handleOnClickLocation}
              handleShowApproveKeluar={handleShowApproveKeluar}
              handleShowDelete={handleShowDelete}
            />

            {/* MODAL ADD PRESENSI */}
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
                              placeholder="ID MSIB"
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

            {/* SUCCSES ADD PRESENSI*/}
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

            {/* MODAL DELETE PRESENSI */}
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

            {/* MODAL SUCCSES DELETE PRESENSI */}
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

            {/* MODAL APPROVE PRESENSI MASUK*/}
            <Modal
              show={showApproveMasuk}
              onHide={handleCloseApproveMasuk}
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
                            <td>ID MSIB</td>
                            <td>{detailDataPresensi.id_msib}</td>
                          </tr>
                          <tr>
                            <td>Tanggal</td>
                            <td>
                              {new Date(
                                detailDataPresensi.createdAt
                              ).toLocaleDateString()}
                            </td>
                          </tr>
                          <tr>
                            <td>Shift</td>
                            <td>{detailDataPresensi.shift}</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td
                              className={getStatusClass(
                                detailDataPresensiKeluar.createdAt
                              )}>
                              {getStatusClass(
                                detailDataPresensiKeluar.createdAt
                              )}
                            </td>
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
                            <td>{detailDataPresensi.username}</td>
                          </tr>
                          <tr>
                            <td>Divisi</td>
                            <td>{detailDataPresensi.divisi}</td>
                          </tr>
                          <tr>
                            <td>Jam Masuk</td>
                            <td>
                              {new Date(
                                detailDataPresensi.createdAt
                              ).toLocaleTimeString()}
                            </td>
                          </tr>
                          <tr>
                            <td>Lokasi</td>
                            <td>
                              {detailDataPresensi.latitude},
                              {detailDataPresensi.longitude}
                            </td>
                          </tr>
                        </table>
                      </Col>
                      <Col
                        md="12"
                        sm="12"
                        lg="4"
                        className="d-flex justify-content-center">
                        <ImageDetailComponents
                          singleData={detailDataPresensi}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button
                      className="batal-btn me-2"
                      onClick={handleCloseApproveMasuk}>
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

            {/* MODAL SUCCSES APPROVE MASUK */}
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

            {/* MODAL APPROVE PRESENSI KELUAR*/}
            <Modal
              show={showApproveKeluar}
              onHide={handleCloseApproveKeluar}
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
                            <td>ID MSIB</td>
                            <td>{detailDataPresensiKeluar.id_msib}</td>
                          </tr>
                          <tr>
                            <td>Tanggal</td>
                            <td>
                              {new Date(
                                detailDataPresensiKeluar.createdAt
                              ).toLocaleDateString()}
                            </td>
                          </tr>
                          <tr>
                            <td>Shift</td>
                            <td>{detailDataPresensiKeluar.shift}</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td>
                              {getStatusClass(
                                detailDataPresensiKeluar.createdAt
                              )}
                            </td>
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
                            <td>{detailDataPresensiKeluar.username}</td>
                          </tr>
                          <tr>
                            <td>Divisi</td>
                            <td>{detailDataPresensiKeluar.divisi}</td>
                          </tr>
                          <tr>
                            <td>Jam Masuk</td>
                            <td>
                              {new Date(
                                detailDataPresensiKeluar.createdAt
                              ).toLocaleTimeString()}
                            </td>
                          </tr>
                          <tr>
                            <td>Lokasi</td>
                            <td>
                              {detailDataPresensiKeluar.latitude},
                              {detailDataPresensiKeluar.longitude}
                            </td>
                          </tr>
                        </table>
                      </Col>
                      <Col
                        md="12"
                        sm="12"
                        lg="4"
                        className="d-flex justify-content-center">
                        <ImageDetailComponents
                          singleData={detailDataPresensiKeluar}
                        />
                      </Col>
                    </Row>
                  </div>

                  <div
                    className="d-flex justify-content-center mt-4"
                    style={{ border: "none" }}>
                    <button
                      className="batal-btn me-2"
                      onClick={handleCloseApproveKeluar}>
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

            <PresensiMasuk
              dataPresensi={dataPresensiMasuk}
              handleShowAdd={handleShowAdd}
              handleOnClickLocation={handleOnClickLocation}
              handleshowApprove={handleshowApproveMasuk}
              handleShowDelete={handleShowDelete}
            />
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
