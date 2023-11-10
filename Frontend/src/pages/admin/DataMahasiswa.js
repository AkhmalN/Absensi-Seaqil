import React from "react";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import "../../App.css";
import { Button } from "react-bootstrap";
function DataMahasiswa() {
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
            <div className="header tulisan">
              <div className="header">
                Daftar Mahasiswa Magang
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
          <div className="card-body ">
            <DataTable
              value={DATA}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ textAlign: "center" }}
              className="customDataTable" // Add a custom class for more styling options
              paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
              <Column 
              field="no" 
              header="No" 
              style={{ width: "2%", textAlign: "center" }}>
              </Column>
              <Column 
              field="IDk" 
              header="ID Kegiatan" 
              style={{ width: "10%", textAlign: "center" }}>
              </Column>
              <Column 
              field="nm" 
              header="Nama" 
              style={{ width: "13%", textAlign: "center" }}>
              </Column>
              <Column 
              field="div" 
              header="Divisi" 
              style={{ width: "12%", textAlign: "center" }}></Column>
              <Column 
              field="shift" 
              header="Shift" 
              style={{ width: "10%", textAlign: "center" }}></Column>
              <Column 
              field="pass" 
              header="Password" 
              style={{ width: "10%", textAlign: "center" }}></Column>
              <Column 
              field="aksi" 
              header="Aksi" 
              style={{ width: "10%", textAlign: "center" }}></Column>

            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataMahasiswa;