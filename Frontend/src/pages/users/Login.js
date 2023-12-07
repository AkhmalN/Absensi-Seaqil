import React, { useState } from "react";
import LogoSEAQIL from "../../assets/Users/LogoSEAQILhd.png";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [succsesMsg, setSuccsesMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setErrorMsg("");
      setSuccsesMsg("");
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

        navigate("/home");
      } else if (response.status === 404) {
        setErrorMsg("Email atau password tidak ditemukan");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMsg("Terjadi kesalahan pada server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container-bg">
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
                      <p>{errorMsg}</p>
                      <div className="form-group">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder=" email"
                          value={email}
                          autoComplete="off"
                          onChange={(event) => setEmail(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder=" Password"
                          value={password}
                          autoComplete="off"
                          onChange={(event) => setPassword(event.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn-login">
                          {loading ? "Tunggu ..." : "Masuk"}
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
      </div>
    </>
  );
};

export default Login;
