import React from "react";
// import Table from "react-bootstrap/Table";
import logo from "../../assets/Users/Logo SEAQIL 1 1.png";
import akun from "../../assets/Users/akun.png";
import "../../App.css";

// import { Table } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import PengajuanIzin from "../../PengajuanIzin";

function StatusPengajuan() {
  return (
    <div>
      <div className="header-masuk">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__title">
          <img src={akun} alt="logo" />
        </div>
      </div>
      <div className="tablePengajuanIzin">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header card-header-pengajuan py-3 d-flex flex-row align-items-center justify-content-center">
            <div className="header">
              <div className="header-1">Status Pengajuan Izin</div>
              <div className="header-2">Silahkan cek status pengajuan izin kamu dibawah ini.</div>
            </div>
            {/* <h3 className="m-0 font-weight-bold">Status Pengajuan Izin</h3>
            <div className="sub-header">Silahkan cek status pengajuan izin kamu dibawah ini</div> */}
          </div>
          {/* Card Body  */}
          <div className="card-body field-pengajuan">
            <DataTable
              value={PengajuanIzin}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 30]}
              tableStyle={{ minWidth: "50rem" }}
              className="customDataTable" //Add a custom class for more styling options
              paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
            >
              <Column field="No" header="No" style={{ width: "10%" }} alignHeader={"center"}></Column>
              <Column field="Tanggal" header="Tanggal" style={{ width: "25%" }} alignHeader={"center"}></Column>
              <Column className="pengajuan-text" field="Pengajuan" header="Pengajuan" style={{ width: "25%" }} alignHeader={"center"}></Column>
              <Column field="Status" header="Status" style={{ width: "25%" }} alignHeader={"center"}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
}

// function StripedRowExample() {
//   return (
//     <div className="tablePengajuanIzin w-70">
//       <div className="card shadow mb-4">
//         {/* Card Header - Dropdown */}
//         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
//           <h3 className="m-0 font-weight-bold">Status Pengajuan Izin</h3>
//           {/* <h6>Silahkan cek status pengajuan izin kamu dibawah ini.</h6> */}
//         </div>
//         {/* Card Body */}
//         <div className="card-body">
//           <DataTable
//             value={DATA}
//             paginator
//             rows={10}
//             rowsPerPageOptions={[5, 10, 25, 50]}
//             tableStyle={{ minWidth: "50rem" }}
//             className="customDataTable" // Add a custom class for more styling options
//             paginatorTemplate={`CurrentPageReport PrevPageLink PageLinks NextPageLink `}
//           >
//             <Column field="No" header="No" style={{ width: "10%" }}></Column>
//             <Column field="Tanggal" header="Tanggal" style={{ width: "25%" }}></Column>
//             <Column field="Pengajuan" header="Pengajuan" style={{ width: "30%" }}></Column>
//             <Column field="Status" header="Status" style={{ width: "35%" }}></Column>
//           </DataTable>
//         </div>
//       </div>
//     </div>
//     // <div className="titleTable">
//     //   <div className="titleHeader">
//     //     <h3>Status Pengajuan Izin</h3>
//     //     <h6>Silahkan cek status pengajuan izin kamu dibawah ini.</h6>
//     //   </div>
//     //   <div className="tablePengajuanIzin">
//     //     <Table>
//     //       <thead>
//     //         <tr>
//     //           <th>No</th>
//     //           <th>Tanggal</th>
//     //           <th>Pengajuan</th>
//     //           <th>Status</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         <tr>
//     //           <td>1</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>2</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>3</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>4</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>5</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>6</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>7</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>8</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>9</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //         <tr>
//     //           <td>10</td>
//     //           <td>01/01/2023</td>
//     //           <td>Sakit</td>
//     //           <td>Diterima</td>
//     //         </tr>
//     //       </tbody>
//     //     </Table>
//     //   </div>
//     // </div>
//   );
// }

// export default StripedRowExample;

export default StatusPengajuan;
