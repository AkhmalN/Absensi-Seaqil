import React from "react";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../d_pengajuan-izin";
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
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              Data Mahasiswa
            </h6>
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
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
              rows={6}
              rowsPerPageOptions={[5, 10, 25, 50]}
              tableStyle={{ textAlign: "center" }}
              className="customDataTable" // Add a custom class for more styling options
              paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}>
              <Column field="ID" header="ID" style={{ width: "10%" }}></Column>
              <Column
                field="Nama"
                header="Nama"
                style={{ width: "25%" }}></Column>
              <Column
                field="Divisi"
                header="Divisi"
                style={{ width: "25%" }}></Column>
              <Column
                field="Asal Kampus"
                header="Asal Kampus"
                style={{ width: "30%" }}></Column>
              <Column field="Status" header="status" style={{ width: "10%" }}>
                <div>
                  <Button variant="dark" />
                </div>
              </Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataMahasiswa;
