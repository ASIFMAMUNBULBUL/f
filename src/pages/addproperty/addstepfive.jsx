import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
class AddStepFive extends React.Component {
  render() {
    return (
         <div>
              <Header/>
  <div className="progress rounded-0 sticky-top" style={{height: 8, top: 71}}>
    <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
  </div>
  <section className="py-5 py-lg-6">
    <div className="container text-center">
      <p className="subtitle text-primary">Add new listing</p>
      <h1 className="h2 mb-5"> Listing uploaded</h1>
      <p className="mb-5"><img className="img-fluid" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/illustration/undraw_celebration_0jvk.svg" alt style={{width: 400}} /></p>
      <p className="text-muted mb-5">Thank you, Ondrej. Your listing has been saved and will be reviewed shortly.</p>
      <p className="mb-5"><a className="btn btn-primary mr-2 mb-2" href="#">Do something</a><a className="btn btn-outline-muted mb-2" href="#">Or something else</a></p>
    </div>
              </section>
              <Footer/>
</div>


    );
  }
}

export default AddStepFive;
