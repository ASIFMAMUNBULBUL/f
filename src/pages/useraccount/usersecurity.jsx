import React from 'react'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
class Usersecurity extends React.Component{
     render() {
          return (
               <div>
                    <Header/>
  <section classname="py-5">
    <div classname="container">
                              {/* Breadcrumbs */}
      <ol classname="breadcrumb pl-0  justify-content-start">
        <li classname="breadcrumb-item"><a href="index.html">Home</a></li>
        <li classname="breadcrumb-item"><a href="user-account.html">Account</a></li>
        <li classname="breadcrumb-item active">Login &amp; security </li>
      </ol>
      <h1 classname="hero-heading mb-0">Login &amp; security</h1>
      <p classname="text-muted mb-5">Manage your Login &amp; security and settings here.</p>
      <div classname="row">
        <div classname="col-lg-7">
          <div classname="text-block"> 
            <h3 classname="mb-4">Login</h3>
            <div classname="row">
              <div classname="col-sm-8">
                <h6>Password</h6>
                <p classname="text-sm text-muted">Last updated 3 years ago</p>
              </div>
              <div classname="col text-right">
                <button classname="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#updatePassword" aria-expanded="false" aria-controls="updatePassword">Update</button>
              </div>
            </div>
            <div classname="collapse" id="updatePassword">
              <div classname="row mt-4">
                <div classname="form-group col-12">
                  <label classname="form-label" htmlfor="password-current">Current Password</label>
                  <input classname="form-control" type="password" name="password-current" id="password-current" />
                </div>
                <div classname="form-group col-md-6">
                  <label classname="form-label" htmlfor="password-new">New Password</label>
                  <input classname="form-control" type="password" name="password-new" id="password-new" />
                </div>
                <div classname="form-group col-md-6">
                  <label classname="form-label" htmlfor="password-confirm">Confirm Password</label>
                  <input classname="form-control" type="password" name="password-confirm" id="password-confirm" />
                </div>
              </div>
              <button classname="btn btn-outline-primary">Update Password</button>
            </div>
          </div>
          <div classname="text-block"> 
            <h3 classname="mb-4">Social accounts</h3>
            <div classname="row">
              <div classname="col-sm-8">
                <h6>Facebook</h6>
                <p classname="text-sm text-muted">Not connected</p>
              </div>
              <div classname="col text-right"><a classname="btn btn-text text-primary pl-0" href="#">Connect</a></div>
            </div>
            <div classname="row">
              <div classname="col-sm-8">
                <h6>Google</h6>
                <p classname="text-sm">Connected</p>
              </div>
              <div classname="col text-right"><a classname="btn btn-text text-primary pl-0" href="#">Disconnect</a></div>
            </div>
          </div>
          <div classname="text-block mb-5 mb-lg-0"> 
            <h3 classname="mb-4">Device history</h3>
            <div classname="media">
              <div classname="icon-rounded bg-secondary-light">
                <svg classname="svg-icon text-secondary w-2rem h-2rem">
                  <use xlinkhref="#imac-screen-1"> </use>
                </svg>
              </div>
              <div classname="media-body pt-2 ml-3"><strong>Windows 10.0 </strong>· Chrome
                <div classname="badge badge-secondary-light text-uppercase">Current  Session</div>
                <p classname="text-sm text-muted">Ostrava, Moravskoslezsky kraj · April 6, 2020 at 01:51pm</p><a classname="btn btn-text text-primary pl-0" href="#">Log out device</a>
              </div>
            </div>
          </div>
        </div>
        <div classname="col-md-6 col-lg-4 ml-lg-auto">
          <div classname="card border-0 shadow">
            <div classname="card-header bg-primary-light py-4 border-0">
              <div classname="media align-items-center">
                <div classname="media-body">
                  <h4 classname="h6 subtitle text-sm text-primary">Let's make your account more secure</h4>
                </div>
                <svg classname="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                  <use xlinkhref="#shield-security-1"> </use>
                </svg>
              </div>
            </div>
            <div classname="card-body p-4">
              <h6 classname="card-text">Your account security: </h6>
              <p classname="card-text mb-4"><span classname="badge badge-info-light">Medium</span></p>
              <p classname="text-muted card-text">We’re always working on ways to increase safety in our community. </p>
              <p classname="text-muted card-text">That’s why we look at every account to make sure it’s as secure as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </div>


          )
     }
}

export default Usersecurity