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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [succsesMsg, setSuccsesMsg] = useState("");

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8081/api/v1/auth", {
        email,
        password,
      });

      if (response.status === 200) {
        setSuccsesMsg("Berhasil Login");
        localStorage.setItem("divisi", response.data.user.divisi);
        localStorage.setItem("id_msib", response.data.user.id_msib);
        localStorage.setItem("shift", response.data.user.shift);
        localStorage.setItem("username", response.data.user.username);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else if (response.status === 404) {
        setErrorMsg("email atau password tidak ditemukan");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMsg("Terjadi kesalahan pada server");
    }
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
                    <p className="">Selamat Datang di Website Presensi Mahasiswa MSIB Magang SEAQIL</p>
                    <p>{succsesMsg}</p>
                    <p>{errorMsg}</p>
                    <div className="form-group">
                      <input type="text" id="email" name="email" placeholder=" email" value={email} autoComplete="off" onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                      <input type="password" id="password" name="password" placeholder=" Password" value={password} autoComplete="off" onChange={(event) => setPassword(event.target.value)} />
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
