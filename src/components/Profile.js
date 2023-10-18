import React from "react";
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Forum from './Forum'; // Adjust the path accordingly.
import Professors from './Professors';
import Register from './Register';
import Contact from './Contact';
import { useNavigation } from 'react-router-dom';

function Profile(){

  return(
    <>
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>

    <Navbar/>

    <div className="untree_co-hero overlay">


      <div className="container">
        <div className="row align-items-center justify-content-center">

          <div className="col-12">

            <div className="row justify-content-center ">

              <div className="col-lg-6 text-center ">
                <Link to={'/'} href="https://vimeo.com/342333493" data-fancybox data-aos="fade-up" data-aos-delay="0" className="caption mb-4 d-inline-block">User Profile</Link>

                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100"><em>This is placeholder text until the team creates a design for this page :)</em></h1>
                <p className="mb-0" data-aos="fade-up" data-aos-delay="300"><a href="#" className="btn btn-secondary">This button does nothing :(</a></p>

              </div>


            </div>

          </div>

        </div>
      </div>

    </div>


    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom text-center mb-4">Content Expected On This Page</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Name</h3>
                <span></span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-briefcase"></i>
              </div>
              <div>
                <h3>Email</h3>
                <span></span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-calculator"></i>
              </div>
              <div>
                <h3>Change Password?</h3>
                <span></span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-pen"></i>
              </div>
              <div>
                <h3>Profile Picture?</h3>
                <span></span>
              </div>
            </Link>
          </div>


          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-music"></i>
              </div>
              <div>
                <h3>Bio?</h3>
                <span></span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-chart-pie"></i>
              </div>
              <div>
                <h3>Favorites Section?</h3>
                <span></span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-camera"></i>
              </div>
              <div>
                <h3>Role?</h3>
                <span>(Student, Professor, Staff)</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-circle-layer"></i>
              </div>
              <div>
                <h3>TBH I ran out of ideas</h3>
                <span></span>
              </div>
            </Link>
          </div>


        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-8 text-center">
            <p>We don't have more category here. <Link to="/profile">Browse nothing</Link></p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-footer">


      <div className="container">

        <div className="row">
          <div className="col-lg-3 mr-auto">
            <div className="widget">
              <h3>About Us<span className="text-primary">.</span> </h3>
              <p></p>
            </div>
            <div className="widget">
              <h3>Connect</h3>
              <ul className="list-unstyled social">
                <li><a href="#"><span className="icon-instagram"></span></a></li>
                <li><a href="#"><span className="icon-twitter"></span></a></li>
                <li><a href="#"><span className="icon-facebook"></span></a></li>
                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                <li><a href="#"><span className="icon-pinterest"></span></a></li>
                <li><a href="#"><span className="icon-dribbble"></span></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 ml-auto">
            <div className="widget">
              <h3>Project Areas</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="#">AI</a></li>
                <li><a href="#">HCI</a></li>
                <li><a href="#">Software</a></li>
                <li><a href="#">Robotics</a></li>
                <li><a href="#">......</a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="widget">
              <h3>Ongoing Projects</h3>
              <ul className="instafeed instagram-gallery list-unstyled">
                <li><a className="instagram-item" href="images/DDIHTS_cover.jpg" data-fancybox="gal"><img src="images/DDIHTS_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
                <li><a className="instagram-item" href="images/Simbiosys_cover.jpg" data-fancybox="gal"><img src="images/Simbiosys_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
                <li><a className="instagram-item" href="images/data_mining_cover.jpg" data-fancybox="gal"><img src="images/data_mining_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
                <li><a className="instagram-item" href="images/DDIHTS_cover.jpg" data-fancybox="gal"><img src="images/DDIHTS_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
                <li><a className="instagram-item" href="images/Simbiosys_cover.jpg" data-fancybox="gal"><img src="images/Simbiosys_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
                <li><a className="instagram-item" href="images/data_mining_cover.jpg" data-fancybox="gal"><img src="images/data_mining_cover.jpg" alt="" width="72" height="72"/></a>
                </li>
              </ul>
            </div>
          </div>


          <div className="col-lg-3">
            <div className="widget">
              <h3>Contact</h3>
              <address>201 Dowman Dr, Atlanta, GA 30322</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://4047276123">+1(404) 727-6123</a></li>
                <li><a href="email://jeff.epstein@emory.edu">jeff.epstein@emory.edu</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
