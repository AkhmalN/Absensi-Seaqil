import React from "react";
import { Container, Table } from "react-bootstrap";

// function StatusPengajuan() {
//   return <div></div>;
// }

function StripedRowExample() {
  return (
    <div className="titleTable">
      <div className="titleHeader">
        <h3>Status Pengajuan Izin</h3>
        <h6>Silahkan cek status pengajuan izin kamu dibawah ini.</h6>
      </div>
      <div className="tablePengajuanIzin">
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Tanggal</th>
              <th>Pengajuan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>2</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>3</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>4</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>5</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>6</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>7</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>8</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>9</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
            <tr>
              <td>10</td>
              <td>01/01/2023</td>
              <td>Sakit</td>
              <td>Diterima</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default StripedRowExample;

// export default StatusPengajuan;
