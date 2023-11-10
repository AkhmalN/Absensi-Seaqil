import React from "react";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import "../../App.css";
import { Button } from "react-bootstrap";
function Pengajuan() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <div id="wrapper">
      <Sidebar />
      <div className="admin-bg container-fluid p-5 w-100">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex justify-content-between bg-white">
            <div className="">
              <div className="header">
                Daftar Pengajuan Izin
                <span className="blue-tag ms-2">MSIB Batch 5</span>
              </div>
              <div className="sub-header">SEAMEO QITEP In Language</div>
            </div>
            <form className="d-sm-inline-block form-inline mr-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border border-secondary small"
                  placeholder="kamoeh cari apa eah?"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Card Body */}
          <div className="card-body">
            <DataTable
              value={DATA}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ minWidth: "50rem" }}
              className="customDataTable centered-header" // Add a custom class for more styling options
              paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
              <Column field="no" header="No" style={{ width: "3%" }}></Column>
              <Column
                field="IDa"
                header="ID Absen"
                style={{ width: "10%" }}></Column>

              <Column
                field="IDk"
                header="ID Kegiatan"
                style={{ width: "10%" }}></Column>
              <Column
                field="tgl"
                header="Tanggal"
                style={{ width: "10%" }}></Column>
              <Column
                field="nm"
                header="Nama"
                style={{ width: "13%" }}></Column>
              <Column
                field="div"
                header="Divisi"
                style={{ width: "10%" }}></Column>
              <Column
                field="file"
                header="File"
                style={{ width: "12%" }}></Column>
              <Column
                field="stat"
                header="Status"
                style={{ width: "10%" }}></Column>
              <Column
                field="alasan"
                header="Alasan"
                style={{ width: "13%" }}></Column>
              <Column
                field="aksi"
                header="Aksi"
                style={{ width: "10%" }}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengajuan;
