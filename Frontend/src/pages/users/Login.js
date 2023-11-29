import React, { Component } from "react";
import LogoSEAQIL from "../../assets/Users/LogoSEAQILhd.png";
import "../../App.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // handleLoginSubmit = (event) => {
  //   event.preventDefault();

  //   console.log("Logging in with username:", this.state.username);
  // };

  render() {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
            <div class=" col-10 col-sm-8 col-md-6 col-lg-4 col-xl-4">
              <div className="content">
                <div className="form-content">
                  <form onSubmit={this.handleLoginSubmit}>
                    <div className="row-login">
                      <div className="header_logo">
                        <img src={LogoSEAQIL} alt="logo" />
                      </div>
                      <h4 className="">Masuk</h4>
                      <p className="">Selamat Datang di Website Presensi Mahasiswa MSIB Magang SEAQIL</p>
                      <div className="form-group">
                        <input type="text" id="username" name="username" placeholder=" Username" value={this.state.username} onChange={this.handleInputChange} />
                      </div>
                      <div className="form-group">
                        <input type="password" id="password" name="password" placeholder=" Password" value={this.state.password} onChange={this.handleInputChange} />
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
            <div class="col-1 col-sm-2 col-md-3 col-lg-4 col-xl-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
