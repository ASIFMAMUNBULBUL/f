import React from 'react'

class Footer extends React.Component{
     render() {
          return (
<div>
  <footer className="position-relative z-index-10 d-print-none">
    {/* Main block - menus, subscribe form*/}
    <div className="py-6 bg-gray-200 text-muted">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="font-weight-bold text-uppercase text-dark mb-3">Directory</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-muted text-hover-primary" href="#" target="_blank" title="twitter"><i className="fab fa-twitter" /></a></li>
              <li className="list-inline-item"><a className="text-muted text-hover-primary" href="#" target="_blank" title="facebook"><i className="fab fa-facebook" /></a></li>
              <li className="list-inline-item"><a className="text-muted text-hover-primary" href="#" target="_blank" title="instagram"><i className="fab fa-instagram" /></a></li>
              <li className="list-inline-item"><a className="text-muted text-hover-primary" href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest" /></a></li>
              <li className="list-inline-item"><a className="text-muted text-hover-primary" href="#" target="_blank" title="vimeo"><i className="fab fa-vimeo" /></a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 className="text-uppercase text-dark mb-3">Rentals</h6>
            <ul className="list-unstyled">
              <li><a className="text-muted" href="index.html">Rooms </a></li>
              <li><a className="text-muted" href="category-rooms.html">Map on top </a></li>
              <li><a className="text-muted" href="category-2-rooms.html">Side map </a></li>
              <li><a className="text-muted" href="category-3-rooms.html">No map </a></li>
              <li><a className="text-muted" href="detail-rooms.html">Room detail </a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
            <h6 className="text-uppercase text-dark mb-3">Pages</h6>
            <ul className="list-unstyled">
              <li><a className="text-muted" href="compare.html">Comparison <span className="badge badge-info-light ml-1">New</span> </a></li>
              <li><a className="text-muted" href="team.html">Team <span className="badge badge-info-light ml-1">New</span> </a></li>
              <li><a className="text-muted" href="contact.html">Contact </a></li>
              <li><a className="text-muted" href="pricing.html">Pricing </a></li>
              <li><a className="text-muted" href="text.html">Text page </a></li>
              <li><a className="text-muted" href="faq.html">F.A.Q.s </a></li>
              <li><a className="text-muted" href="coming-soon.html">Coming soon </a></li>
              <li><a className="text-muted" href="404.html">404 page <span className="badge badge-info-light ml-1">New</span> </a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="text-uppercase text-dark mb-3">Daily Offers &amp; Discounts</h6>
            <p className="mb-3"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
            <form action="#" id="newsletter-form">
              <div className="input-group mb-3">
                <input className="form-control bg-transparent border-dark border-right-0" type="email" placeholder="Your Email Address" aria-label="Your Email Address" />
                <div className="input-group-append">
                  <button className="btn btn-outline-dark border-left-0" type="submit"> <i className="fa fa-paper-plane text-lg" /></button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Copyright section of the footer*/}
    <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-left">
            <p className="text-sm mb-md-0">© 2020, Your company. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
              <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/visa.svg" alt="..." /></li>
              <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/mastercard.svg" alt="..." /></li>
              <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/paypal.svg" alt="..." /></li>
              <li className="list-inline-item"><img className="w-2rem" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/western-union.svg" alt="..." /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
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

export default Footer