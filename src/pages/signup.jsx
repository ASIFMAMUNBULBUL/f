import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handlesubmit.bind(this);
    this.state = { err_confirmpassword: String, err_email: String };
  }

  handlesubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    if (data.get("password") != data.get("confirmpassword")) {
      this.setState({
        err_confirmpassword: "password and confirm password should match",
      });
      return false;
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
        phonenumber: data.get("phonenumber"),
        type: "user",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch("http://localhost:5000/signup", requestOptions)
        .then((response) => {
          if (response.status == 400) {
            this.setState({ err_email: "Email already exists" });
          } else {
            window.location.replace("/login");
          }
          return response.text();
        })
        .then((result) => {})
        .catch((error) => {
          console.log("error", error);
        });
    }
  };
  render() {
    return (
      <div>
        <div className="container-fluid px-3">
          <div className="row min-vh-100">
            <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
              <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
                <div className="mb-4">
                  <img
                    className="img-fluid mb-4"
                    src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/logo-square.svg"
                    alt="..."
                    style={{ maxWidth: "4rem" }}
                  />
                  <h2>Sign up</h2>
                </div>

                <button className="btn btn btn-outline-primary btn-block btn-social mb-3">
                  <i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>{" "}
                  <span className="d-none d-sm-inline">with Facebook</span>
                </button>
                <button className="btn btn btn-outline-muted btn-block btn-social mb-3">
                  <i className="fa-2x fa-google fab btn-social-icon"> </i>{" "}
                  <span className="d-none d-sm-inline">with Google</span>
                </button>

                <hr
                  className="my-3 hr-text letter-spacing-2"
                  data-content="OR"
                />
                <form className="form-validate" onSubmit={this.handlesubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="loginUsername">
                      {" "}
                      Full Name
                    </label>
                    <input
                      className="form-control"
                      name="name"
                      id="loginUsername"
                      type="text"
                      placeholder="Enter your Name"
                      autoComplete="off"
                      required
                      data-msg="Please enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="loginUsername">
                      {" "}
                      phone number
                    </label>
                    <input
                      className="form-control"
                      name="phonenumber"
                      id="loginUsername"
                      type="text"
                      placeholder="Enter your password"
                      autoComplete="off"
                      required
                      data-msg="Please enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="loginUsername">
                      {" "}
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      id="loginUsername"
                      type="email"
                      placeholder="name@address.com"
                      autoComplete="off"
                      required
                      data-msg="Please enter your email"
                    />
                    <p style={{ color: "red" }}>{this.state.err_email}</p>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="loginPassword">
                      {" "}
                      Password
                    </label>
                    <input
                      className="form-control"
                      name="password"
                      id="loginPassword"
                      placeholder="Password"
                      type="password"
                      required
                      data-msg="Please enter your password"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="form-label" htmlFor="loginPassword2">
                      {" "}
                      Confirm your password
                    </label>
                    <input
                      className="form-control"
                      name="confirmpassword"
                      id="loginPassword2"
                      placeholder="Password"
                      type="password"
                      required
                      data-msg="Please enter your password"
                    />
                    <p style={{ color: "red" }}>
                      {this.state.err_confirmpassword}
                    </p>
                  </div>
                  <button
                    className="btn btn-lg btn-block btn-primary"
                    type="submit"
                  >
                    Sign up
                  </button>

                  <hr className="my-4" />
                  <p className="text-sm text-muted">
                    By signing up you agree to{" "}
                    <a href="#">Terms and Conditions</a> and{" "}
                    <a href="#">Privacy Policy</a>.
                  </p>
                </form>
                <a className="close-absolute mr-md-5 mr-xl-6 pt-5" href="home">
                  <svg className="svg-icon w-3rem h-3rem">
                    <use xlinkHref="#close-1"> </use>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
              {/* Image*/}
              <div
                className="bg-cover h-100 mr-n3"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg)`,
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary btn-sm d-none d-lg-block"
          type="button"
          data-toggle="collapse"
          data-target="#style-switch"
          id="style-switch-button"
        >
          <svg className="svg-icon svg-icon-md">
            <use xlinkHref="#configuration-1"> </use>
          </svg>
        </button>
        <div className="collapse" id="style-switch">
          <div className="p-4">
            <h6 className="text-uppercase mb-4">Select theme colour</h6>
            <form className="mb-3">
              <select
                className="form-control style-switch-select"
                name="colour"
                id="colour"
              >
                <option value>select colour variant</option>
                <option value="css/style.default.e1630ae4.css">blue</option>
                <option value="css/style.pink.ad40e50b.css">pink</option>
                <option value="css/style.green.215fda4d.css">green</option>
                <option value="css/style.red.1b81f296.css">red</option>
                <option value="css/style.violet.2acee140.css">violet</option>
                <option value="css/style.sea.f33d3e98.css">sea</option>
              </select>
            </form>
            <p className="text-muted text-xs mb-0">
              Stylesheet switching in this demo is done with JavaScript and can
              cause a blink while page loads. This will not happen in your
              production code.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
