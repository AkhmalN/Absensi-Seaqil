import Dropdown from "react-bootstrap/Dropdown";
import akun from "../assets/Users/akun.png";
import "../App.css";

function DropdownProfile() {
  return (
    <Dropdown>
      <Dropdown.Toggle>
        <img className="profileakun" src={akun} alt="logo" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <li className="centered-text">Clarance Liew</li>
        <li className="centered-text">1234567</li>
        <li className="centered-text">Web Designer</li>
        <hr />
        <li className="centered-text">
          <button className="btn-pro">Rekap Absensi</button>
        </li>
        <li className="centered-text">
          <button className="btn-pro">Pengajuan Izin</button>
        </li>
        <li className="centered-text">
          <button className="btn-log">Keluar</button>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownProfile;
