import React from 'react'

class Signin extends React.Component {
     render() {
          return (
<div>
  <div className="container-fluid px-3">
    <div className="row min-vh-100">
      <div className="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
        <div className="w-100 py-5 px-md-5 px-xl-6 position-relative">
          <div className="mb-5"><img className="img-fluid mb-3" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/logo-square.svg" alt="..." style={{maxWidth: '4rem'}} />
            <h2>Welcome back</h2>
          </div>
          <form className="form-validate">
            <div className="form-group">
              <label className="form-label" htmlFor="loginUsername"> Email Address</label>
              <input className="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="name@address.com" autoComplete="off" required data-msg="Please enter your email" />
            </div>
            <div className="form-group mb-4">
              <div className="row">
                <div className="col">
                  <label className="form-label" htmlFor="loginPassword"> Password</label>
                </div>
                <div className="col-auto"><a className="form-text small" href="#">Forgot password?</a></div>
              </div>
              <input className="form-control" name="loginPassword" id="loginPassword" placeholder="Password" type="password" required data-msg="Please enter your password" />
            </div>
            <div className="form-group mb-4">
              <div className="custom-control custom-checkbox">
                <input className="custom-control-input" id="loginRemember" type="checkbox" />
                <label className="custom-control-label text-muted" htmlFor="loginRemember"> <span className="text-sm">Remember me for 30 days</span></label>
              </div>
            </div>
            {/* Submit*/}
            <button className="btn btn-lg btn-block btn-primary">Sign in</button>
            <hr className="my-3 hr-text letter-spacing-2" data-content="OR" />
            <button className="btn btn btn-outline-primary btn-block btn-social mb-3"><i className="fa-2x fa-facebook-f fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Facebook</span></button>
            <button className="btn btn btn-outline-muted btn-block btn-social mb-3"><i className="fa-2x fa-google fab btn-social-icon"> </i>Connect <span className="d-none d-sm-inline">with Google</span></button>
            <hr className="my-4" />
            <p className="text-center"><small className="text-muted text-center">Don't have an account yet? <a href="signup">Sign Up              </a></small></p>
          </form><a className="close-absolute mr-md-5 mr-xl-6 pt-5" href="index.html"> 
            <svg className="svg-icon w-3rem h-3rem">
              <use xlinkHref="#close-1"> </use>
            </svg></a>
        </div>
      </div>
      <div className="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
        {/* Image*/}
        <div className="bg-cover h-100 mr-n3" style={{backgroundImage: `url(${process.env.PUBLIC_URL}assets/img/photo/photo-1497436072909-60f360e1d4b1.jpg)`}} />
      </div>
    </div>
  </div>
  <button className="btn btn-primary btn-sm d-none d-lg-block" type="button" data-toggle="collapse" data-target="#style-switch" id="style-switch-button">
    <svg className="svg-icon svg-icon-md">
      <use xlinkHref="#configuration-1"> </use>
    </svg>
  </button>
  <div className="collapse" id="style-switch">
    <div className="p-4">
      <h6 className="text-uppercase mb-4">Select theme colour</h6>
      <form className="mb-3">
        <select className="form-control style-switch-select" name="colour" id="colour">
          <option value>select colour variant</option>
          <option value="css/style.default.e1630ae4.css">blue</option>
          <option value="css/style.pink.ad40e50b.css">pink</option>
          <option value="css/style.green.215fda4d.css">green</option>
          <option value="css/style.red.1b81f296.css">red</option>
          <option value="css/style.violet.2acee140.css">violet</option>
          <option value="css/style.sea.f33d3e98.css">sea</option>
        </select>
      </form>
      <p className="text-muted text-xs mb-0">Stylesheet switching in this demo is done with JavaScript and can cause a blink while page loads. This will not happen in your production code.</p>
    </div>
  </div>
</div>

          )
     }

}
export default Signin