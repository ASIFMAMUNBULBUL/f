import React from 'react'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
class Home extends React.Component{

     render() {
         
          return (
                
               <div>
                    <Header />

  <section className="d-flex align-items-center dark-overlay bg-cover" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'}}>
    <div className="container py-6 py-lg-7 text-white overlay-content">
      <div className="row">
        <div className="col-xl-8">
          <h1 className="display-3 font-weight-bold text-shadow">Let us guide you home</h1>
          <p className="text-lg text-shadow mb-6">Uncover the best offers on the real estate market.</p>
        </div>
      </div>
    </div>
  </section>
  <div className="container position-relative mt-n6 z-index-20">
    <ul className="nav nav-tabs search-bar-nav-tabs" role="tablist">
      <li className="nav-item mr-2"><a className="nav-link active" href="#buy" data-toggle="tab" role="tab">Buy</a></li>
      <li className="nav-item mr-2"><a className="nav-link" href="#rent" data-toggle="tab" role="tab">Rent</a></li>
      <li className="nav-item"><a className="nav-link" href="#sell" data-toggle="tab" role="tab">Sell</a></li>
    </ul>
    <div className="search-bar search-bar-with-tabs p-3 p-lg-4">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="buy" role="tabpanel">
          <form action="#">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="city_0">San Francisco</option>
                  <option value="city_1">Los Angeles</option>
                  <option value="city_2">Santa Monica</option>
                  <option value="city_3">San Diego</option>
                  <option value="city_4">Fresno</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="type_0">Duplex</option>
                  <option value="type_1">Appartment</option>
                  <option value="type_2">House</option>
                  <option value="type_3">Land</option>
                  <option value="type_4">Other</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Max price" data-style="btn-form-control">
                  <option value="price_0">$5,000</option>
                  <option value="price_1">$10,000</option>
                  <option value="price_2">$25,000</option>
                  <option value="price_3">$50,000</option>
                </select>
              </div>
              <div className="col-lg-2 form-group mb-0">
                <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
              </div>
            </div>
          </form>
        </div>
        <div className="tab-pane fade" id="rent" role="tabpanel">
          <form action="#">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="city_0">San Francisco</option>
                  <option value="city_1">Los Angeles</option>
                  <option value="city_2">Santa Monica</option>
                  <option value="city_3">San Diego</option>
                  <option value="city_4">Fresno</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="type_0">Duplex</option>
                  <option value="type_1">Appartment</option>
                  <option value="type_2">House</option>
                  <option value="type_3">Land</option>
                  <option value="type_4">Other</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Max price" data-style="btn-form-control">
                  <option value="price_0">$5,000</option>
                  <option value="price_1">$10,000</option>
                  <option value="price_2">$25,000</option>
                  <option value="price_3">$50,000</option>
                </select>
              </div>
              <div className="col-lg-2 form-group mb-0">
                <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
              </div>
            </div>
          </form>
        </div>
        <div className="tab-pane fade" id="sell" role="tabpanel">
          <form action="#">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center form-group no-divider">
                <select className="selectpicker form-control" title="Location" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="city_0">San Francisco</option>
                  <option value="city_1">Los Angeles</option>
                  <option value="city_2">Santa Monica</option>
                  <option value="city_3">San Diego</option>
                  <option value="city_4">Fresno</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Type" data-style="btn-form-control" multiple data-selected-text-format="count > 2">
                  <option value="type_0">Duplex</option>
                  <option value="type_1">Appartment</option>
                  <option value="type_2">House</option>
                  <option value="type_3">Land</option>
                  <option value="type_4">Other</option>
                </select>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-center form-group no-divider">
                <select className="selectpicker" title="Max price" data-style="btn-form-control">
                  <option value="price_0">$5,000</option>
                  <option value="price_1">$10,000</option>
                  <option value="price_2">$25,000</option>
                  <option value="price_3">$50,000</option>
                </select>
              </div>
              <div className="col-lg-2 form-group mb-0">
                <button className="btn btn-primary btn-block h-100" type="submit">Search </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <section className="py-6">
    <div className="container">
      <div className="row mb-lg-6">
        <div className="col-md-8">
          <p className="subtitle text-secondary">Find your home today</p>
          <h2 className="mb-md-0">Featured listings around you</h2>
        </div>
        <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="category-rooms.html">
            See all featured listings<i className="fas fa-angle-double-right ml-2" /></a></div>
      </div>
    </div>
    <div className="container-fluid">
      {/* Slider main container*/}
      <div className="swiper-container swiper-container-mx-negative items-slider-full px-lg-5 pt-3">
        {/* Additional required wrapper*/}
        <div className="swiper-wrapper pb-5">
          {/* Slides*/}
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/photo/photo-1484154218962-a197022b5858.jpg'} alt="Modern, Well-Appointed Room" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Modern, Well-Appointed Room</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/photo/photo-1426122402199-be02db90eb90.jpg'} alt="Cute Quirky Garden apt, NYC adjacent" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Cute Quirky Garden apt, NYC adjacent</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/photo/photo-1512917774080-9991f1c4c750.jpg'} alt="Modern Apt - Vibrant Neighborhood!" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Modern Apt - Vibrant Neighborhood!</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + 'assets/img/photo/photo-1494526585095-c41746248156.jpg'} alt="Sunny Private Studio-Apartment" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Sunny Private Studio-Apartment</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"} alt="Mid-Century Modern Garden Paradise" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Mid-Century Modern Garden Paradise</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
              <div className="card h-100 border-0 shadow">
                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src="../../../d19m59y37dris4.cloudfront.net/directory/1-5/img/photo/photo-1488805990569-3c9e1d76d51c.jpg" alt="Brooklyn Life, Easy to Manhattan" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Brooklyn Life, Easy to Manhattan</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e33b1527bfe2abaf92">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1484154218962-a197022b5858.jpg"} alt="Modern, Well-Appointed Room" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Modern, Well-Appointed Room</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e322f3375db4d89128">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1426122402199-be02db90eb90.jpg"} alt="Cute Quirky Garden apt, NYC adjacent" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Cute Quirky Garden apt, NYC adjacent</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3a31e62979bf147c9">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1512917774080-9991f1c4c750.jpg"} alt="Modern Apt - Vibrant Neighborhood!" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Modern Apt - Vibrant Neighborhood!</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e3503eb77d487e8082">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1494526585095-c41746248156.jpg"} alt="Sunny Private Studio-Apartment" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Sunny Private Studio-Apartment</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2eed0626e485d">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"} alt="Mid-Century Modern Garden Paradise" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Mid-Century Modern Garden Paradise</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">House</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />350 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />3</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />2</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$150k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide h-auto px-2">
            <div className="w-100 h-100 hover-animate" data-marker-id="59c0c8e39aa2edasd626e485d">
              <div className="card h-100 border-0 shadow">
                                <div className="card-img-top overflow-hidden gradient-overlay"> <img className="img-fluid" src={process.env.PUBLIC_URL + "assets/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"} alt="Brooklyn Life, Easy to Manhattan" /><a className="tile-link" href="detail-rooms.html" />
                  <div className="card-img-overlay-top text-right"><a className="card-fav-icon position-relative z-index-40" href="javascript: void();"> 
                      <svg className="svg-icon text-white">
                        <use xlinkHref="#heart-1"> </use>
                      </svg></a></div>
                </div>
                <div className="card-body d-flex align-items-center">
                  <div className="w-100">
                    <h6 className="card-title"><a className="text-decoration-none text-dark" href="detail-rooms.html">Brooklyn Life, Easy to Manhattan</a></h6>
                    <p className="text-sm text-secondary card-subtitle mb-2"><i className="fa fa-map-marker text-secondary opacity-4 mr-1" />San Francisco</p>
                    <p className="text-sm text-muted text-uppercase">Apartment</p>
                    <p className="card-text d-flex justify-content-between text-gray-800 text-sm"><span className="mr-1"><i className="fa fa-ruler-combined text-primary opacity-4 text-xs mr-1" />85 m<sup>2</sup> </span><span className="mr-1"><i className="fa fa-bed text-primary opacity-4 text-xs mr-1" />2</span><span className="mr-1"><i className="fa fa-bath text-primary opacity-4 text-xs mr-1" />1</span><span><i className="fa fa-tag text-primary opacity-4 text-xs mr-1" />$65k</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If we need pagination*/}
        <div className="swiper-pagination" />
      </div>
    </div>
  </section>
  {/* Our picks section*/}
  <section className="py-6 bg-gray-100">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8">
          <p className="subtitle text-primary">Most popular cities</p>
          <h2>What's on our radar</h2>
        </div>
        <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="category-3-rooms.html">
            See all cities<i className="fas fa-angle-double-right ml-2" /></a></div>
      </div>
      <div className="row">
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-8">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center '+`url(${process.env.PUBLIC_URL}assets/img/photo/photo-1449034446853-66c86144b0ad.jpg)`+' no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">San Francisco</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center '+`url(${process.env.PUBLIC_URL}assets/img/photo/photo-1429554429301-1c7d5ae2d42e.jpg)`+' no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">Los Angeles</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center '+`url(${process.env.PUBLIC_URL}assets/img/photo/photo-1523430410476-0185cb1f6ff9.jpg)`+' no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">Santa Monica</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center '+`url(${process.env.PUBLIC_URL}assets/img/photo/photo-1505245208761-ba872912fac0.jpg)`+' no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">San Diego</h3>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-lg-stretch mb-4 col-lg-4">
          <div className="card shadow-lg border-0 w-100 border-0 hover-animate" style={{background: 'center center '+`url(${process.env.PUBLIC_URL}assets/img/photo/photo-1519867850-74775a87e783.jpg)`+' no-repeat', backgroundSize: 'cover'}}><a className="tile-link" href="category.html"> </a>
            <div className="d-flex align-items-center h-100 text-white justify-content-center py-6 py-lg-7">
              <h3 className="text-shadow text-uppercase mb-0">Fresno</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-6">
    <div className="container">
      <div className="pb-lg-4">
        <p className="subtitle text-secondary">Why us?</p>
        <h2 className="mb-5">Discover the best investment opportunities around you</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
          <div className="px-0 pr-lg-4">
            <div className="icon-rounded mb-3 bg-primary-light">
              <svg className="svg-icon w-2rem h-2rem text-primary">
                <use xlinkHref="#destination-map-1"> </use>
              </svg>
            </div>
            <h3 className="h6 text-uppercase">Find the best investment area</h3>
            <p className="text-muted text-sm">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
          <div className="px-0 pr-lg-4">
            <div className="icon-rounded mb-3 bg-secondary-light">
              <svg className="svg-icon w-2rem h-2rem text-secondary">
                <use xlinkHref="#real-estate-1"> </use>
              </svg>
            </div>
            <h3 className="h6 text-uppercase">Purchase a property</h3>
            <p className="text-muted text-sm">The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pit</p>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4 mb-3 mb-lg-0">
          <div className="px-0 pr-lg-4">
            <div className="icon-rounded mb-3 bg-primary-light">
              <svg className="svg-icon w-2rem h-2rem text-primary">
                <use xlinkHref="#pay-1"> </use>
              </svg>
            </div>
            <h3 className="h6 text-uppercase">Profit</h3>
            <p className="text-muted text-sm">His room, a proper human room although a little too small, lay peacefully between its four familiar </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Divider Section*/}
  <section>
    <div className="container bg-gray-100 py-6 px-3 px-lg-5 rounded-lg shadow-sm">
      <div className="row">
        <div className="col-lg-6 mb-5 mb-lg-0 text-center text-lg-left">
          <p className="subtitle text-secondary">Start using Directory today</p>
          <p className="text-lg">Directory is the best way to find &amp; discover great local businesses</p>
          <p className="text-muted mb-0">One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed in</p>
        </div>
        <div className="col-lg-6 d-flex align-items-center justify-content-center">
          <div className="text-center">
            <p className="mb-2"><a className="btn btn-lg btn-primary" href="#">Create Your Account</a></p>
            <p className="text-muted text-small">It's free! </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-6">
    <div className="container">
      <div className="row mb-lg-6">
        <div className="col-md-8">
          <p className="subtitle text-secondary">Who are we?</p>
          <h2 className="mb-md-0">Meet our team</h2>
        </div>
        <div className="col-md-4 d-md-flex align-items-center justify-content-end"><a className="text-muted text-sm" href="team.html">
            Meet us all<i className="fas fa-angle-double-right ml-2" /></a></div>
      </div>
      <div className="row">
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
    </div>
  </section>
  {/* Brands Section*/}
  <section className="py-6 bg-gray-100">
    <div className="container">
      <h5 className="text-center text-uppercase letter-spacing-3 mb-5">As seen on</h5>
      {/* Brands Slider*/}
      <div className="swiper-container brands-slider">
        <div className="swiper-wrapper pb-5">
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-1.svg" alt="Brand 1" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-2.svg" alt="Brand 2" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-3.svg" alt="Brand 3" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-4.svg" alt="Brand 4" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-5.svg" alt="Brand 5" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-6.svg" alt="Brand 6" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-1.svg" alt="Brand 1" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-2.svg" alt="Brand 2" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-3.svg" alt="Brand 3" /></a></div>
          {/* item*/}
          <div className="swiper-slide h-auto d-flex align-items-center justify-content-center"><a href="#"><img className="img-fluid w-6rem opacity-5" src="https://d19m59y37dris4.cloudfront.net/directory/1-5/img/brand/brand-4.svg" alt="Brand 4" /></a></div>
        </div>
      </div>
    </div>
  </section>
  {/* Instagram*/}
  <section>
    <div className="container-fluid px-0">
      <div className="swiper-container instagram-slider">
        <div className="swiper-wrapper">
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-1.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-2.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-3.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-4.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-5.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-6.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-7.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-8.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-9.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-10.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-11.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-12.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-13.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-14.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-10.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-11.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-12.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-13.jpg"} alt=" " /></a></div>
                          <div className="swiper-slide overflow-hidden"><a href="#"><img className="img-fluid hover-scale" src={process.env.PUBLIC_URL + "assets/img/instagram/instagram-14.jpg"} alt=" " /></a></div>
        </div>
      </div>
    </div>
  </section>


         <Footer />
       </div>
          )
     }
}

export default Home