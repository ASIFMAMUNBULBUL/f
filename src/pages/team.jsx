import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
class Team extends React.Component {
     render() {
          return (
               <div>
                    <Header />
  <section className="hero py-5 py-lg-7">
    <div className="container position-relative">
      {/* Breadcrumbs */}
      <ol className="breadcrumb pl-0  justify-content-center">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item active">Team                       </li>
      </ol>
      <h1 className="hero-heading">Meet our team</h1>
      <div className="row">
        <div className="col-xl-8 mx-auto"><p className="text-muted">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections</p></div>
      </div>
    </div>
  </section>
  <section className="pt-6 pb-4">
    <div className="container">
      <h6 className="subtitle text-center text-primary mb-5">Our founders</h6>
      <div className="row mb-7">
        <div className="mb-3 mb-lg-0 col-sm-4">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-0.png"} alt />
              <div className="team-circle" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Meredith Goodwin</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CEO &amp; Founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-4">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-1.png"} alt />
              <div className="team-circle" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Weeks Garrett</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">Co-founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-4">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-2.png"} alt />
              <div className="team-circle" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Fisher Bauer</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CTO  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-5">
    <div className="container bg-gray-100 py-5 px-3 px-lg-5 rounded-lg shadow-sm">
      <div className="row">
        <div className="col-lg-5">
                      <div className="p-5"><img className="img-fluid rounded-circle shadow-sm" src={process.env.PUBLIC_URL + "assets/img/avatar/avatar-0.jpg"} alt /></div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <div>
            <blockquote className="blockquote-icon">
              <p className="text-lg text-gray-700 mb-4">Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. </p>
              <h6 className="text-lg text-uppercase text-primary">— Meredith Goodwin, Founder</h6>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-6">
    <div className="container">
      <h6 className="subtitle text-center mb-4">Sales</h6>
      <div className="row mb-7">
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-0.png"} alt />
              <div className="team-circle bg-secondary-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Meredith Goodwin</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CEO &amp; Founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-1.png"} alt />
              <div className="team-circle bg-secondary-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Weeks Garrett</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">Co-founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-2.png"} alt />
              <div className="team-circle bg-secondary-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Fisher Bauer</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CTO  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-3.png"} alt />
              <div className="team-circle bg-secondary-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Aguilar Webb</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">Community  </p>
            </div>
          </div>
        </div>
      </div>
      <h6 className="subtitle text-center mb-4">Marketing</h6>
      <div className="row">
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-0.png"} alt />
              <div className="team-circle bg-info-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Meredith Goodwin</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CEO &amp; Founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-1.png"} alt />
              <div className="team-circle bg-info-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Weeks Garrett</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">Co-founder  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-2.png"} alt />
              <div className="team-circle bg-info-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Fisher Bauer</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">CTO  </p>
            </div>
          </div>
        </div>
        <div className="mb-3 mb-lg-0 col-sm-6 col-lg-3">
                      <div className="card border-0 hover-animate bg-transparent"><a className="position-relative" href="#"><img className="card-img-top team-img" src={process.env.PUBLIC_URL + "assets/img/avatar/agent-3.png"} alt />
              <div className="team-circle bg-info-light" /></a>
            <div className="card-body team-body text-center">
              <h6 className="card-title">Aguilar Webb</h6>
              <p className="card-subtitle text-muted text-xs text-uppercase">Community  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </section>
                    <Footer />
</div>

          )
     }

}
export default Team