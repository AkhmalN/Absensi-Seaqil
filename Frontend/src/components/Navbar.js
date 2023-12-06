import React from "react";
import "../App.css";
import logo from "../assets/Users/Logo SEAQIL 1 1.png";
import DropdownProfile from "./DropdwonProfile";

function Navbar() {
  return (
    <div className="uk-body">
      <div className="header-home">
        <div className="header-home-logo">
          <img src={logo} alt="logo" />
        </div>
        <DropdownProfile></DropdownProfile>
      </div>
    </div>

    // <div style={{ marginRight: "100px", marginLeft: "100px" }}>
    //   <div className="header-home">
    //     <div className="header-home-logo">
    //       <img src={logo} alt="logo" />
    //     </div>
    //     <DropdownProfile></DropdownProfile>
    //   </div>
    // </div>
  );
}

export default Navbar;
