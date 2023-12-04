import React, { useState } from "react";
import LogoSEAQIL from "../../assets/Users/LogoSEAQILhd.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

const Login = () => {
  // const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [succsesMsg, setSuccsesMsg] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    try {
      if (username === "admin" && password === "admin123") {
        setSuccsesMsg("Login Berhasil!");
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
          <div className=" col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4">
            <div className="content">
              <div className="form-content">
                <form onSubmit={handleLoginSubmit}>
                  <div className="row-login">
                    <div className="header_logo">
                      <img src={LogoSEAQIL} alt="logo" />
                    </div>
                    <h4 className="">Masuk</h4>
                    <p className="">
                      Selamat Datang di Website Presensi Mahasiswa MSIB Magang
                      SEAQIL
                    </p>
                    <p>{succsesMsg}</p>
                    <div className="form-group">
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder=" Username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder=" Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn-login">
                        Masuk
                      </button>
                    </div>
                    <div>
                      <p className="" style={{ color: "black" }}>
                        Lupa Password?
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
