import React from "react";
// import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import "../../App.css";
// import DropdownProfile from "../../components/DropdwonProfile";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import DATA from "../../DATA";
import Navbar from "../../components/Navbar";

function StatusPengajuan() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-blur">
        <div className="tablePengajuanIzin">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header-pengajuan py-3 d-flex flex-row align-items-center justify-content-center">
              <div className="header">
                <div className="header-1">Status Pengajuan Izin</div>
                <div className="header-2">Silahkan cek status pengajuan izin kamu dibawah ini.</div>
              </div>
            </div>
            {/* Card Body  */}
            <div className="card-body field-pengajuan">
              <DataTable
                value={DATA}
                paginator
                rows={5}
                rowsPerPageOptions={[5, 10, 25, 30]}
                tableStyle={{ minWidth: "50rem" }}
                className="customDataTable" //Add a custom class for more styling options
                paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
              >
                <Column field="no" header="No" style={{ width: "10%" }} alignHeader={"center"}></Column>
                <Column field="tgl" header="Tanggal" style={{ width: "25%" }} alignHeader={"center"}></Column>
                <Column field="stat_i" header="Pengajuan" style={{ width: "25%" }} alignHeader={"center"}></Column>
                <Column field="ket" header="Status" style={{ width: "25%" }} alignHeader={"center"}></Column>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusPengajuan;
