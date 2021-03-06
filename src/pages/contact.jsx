import React from 'react'

import Header from '../components/header/header'
import Footer from '../components/footer/footer'
class Contact extends React.Component{
     render(){
     return (
          <div>
               <Header />
         <section className="hero py-6 py-lg-7 text-white dark-overlay"><img className="bg-image" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1522143049013-2519756a52d4.jpg"} alt="How can we help you today?" />
    <div className="container overlay-content">
      {/* Breadcrumbs */}
      <ol className="breadcrumb text-white justify-content-center no-border mb-0">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active">Contact                       </li>
      </ol>
      <h1 className="hero-heading">How can we help you today?</h1>
    </div>
  </section>
  <section className="py-6">
    <div className="container">       
      <div className="row">
        <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
          <div className="icon-rounded mb-4 bg-primary-light">
            <svg className="svg-icon w-2rem h-2rem text-primary">
              <use xlinkHref="#map-location-1"> </use>
            </svg>
          </div>
          <h3 className="h5">Address</h3>
          <p className="text-muted">13/25 New Avenue<br />New Heaven, 45Y 73J<br />England, <strong>Great Britain</strong></p>
        </div>
        <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
          <div className="icon-rounded mb-4 bg-primary-light">
            <svg className="svg-icon w-2rem h-2rem text-primary">
              <use xlinkHref="#landline-1"> </use>
            </svg>
          </div>
          <h3 className="h5">Call center</h3>
          <p className="text-muted">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-muted"><strong>+33 555 444 333</strong></p>
        </div>
        <div className="col-md-4 text-center text-md-left mb-4 mb-md-0">
          <div className="icon-rounded mb-4 bg-primary-light">
            <svg className="svg-icon w-2rem h-2rem text-primary">
              <use xlinkHref="#mail-1"> </use>
            </svg>
          </div>
          <h3 className="h5">Electronic support</h3>
          <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
          <ul className="list-unstyled text-muted">
            <li>info@sell.com</li>
            <li>support@sell.com</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="py-6 bg-gray-100">
    <div className="container">
      <h2 className="h4 mb-5">Contact form</h2>
      <div className="row">
        <div className="col-md-7 mb-5 mb-md-0">
          <form className="form" id="contact-form" method="post" action="https://demo.bootstrapious.com/directory/1-5-1/contact.php">
            <div className="controls">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Your firstname *</label>
                    <input className="form-control" type="text" name="name" id="name" placeholder="Enter your firstname" required="required" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label className="form-label" htmlFor="surname">Your lastname *</label>
                    <input className="form-control" type="text" name="surname" id="surname" placeholder="Enter your  lastname" required="required" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Your email *</label>
                <input className="form-control" type="email" name="email" id="email" placeholder="Enter your  email" required="required" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Your message for us *</label>
                <textarea className="form-control" rows={4} name="message" id="message" placeholder="Enter your message" required="required" defaultValue={""} />
              </div>
              <button className="btn btn-outline-primary" type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <div className="pl-lg-4">
            <p className="text-muted">Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed. </p>
            <p className="text-muted">Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. </p>
            <div className="social">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-pinterest" /></a></li>
                <li className="list-inline-item"><a href="#" target="_blank"><i className="fab fa-vimeo" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="map-wrapper-300">
    <div className="h-100" id="detailMap" />
               </div>
               <Footer />
</div>

          )
     }

}
export default Contact