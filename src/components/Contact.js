import React from 'react';
import { Link } from "react-router-dom";

export default function Contact() {
    return (
      <>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>



        <nav className="site-nav mb-5">
          <div className="pb-2 top-bar mb-3">
            <div className="container">
              <div className="row align-items-center">

                <div className="col-6 col-lg-9">
                  <Link to={'/Contact'} className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Contact us</span></Link>
                  <Link to={'/'} className="small mr-3"><span className="icon-phone mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
                  <Link to={'/'} className="small mr-3"><span className="icon-envelope mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
                </div>

                <div className="col-6 col-lg-3 text-right">
                  <Link to={'/'} className="small mr-3">
                    <span className="icon-lock"></span>
                    Log In
                  </Link>
                  <Link to={'/'} className="small">
                    <span className="icon-person"></span>
                    Register
                  </Link>
                </div>

              </div>
            </div>
          </div>
          <div className="sticky-nav js-sticky-header">
            <div className="container position-relative">
              <div className="site-navigation text-center">
                <Link to={'/'} className="logo menu-absolute m-0">LabLink!<span className="text-primary">.</span></Link>

              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Professors</Link></li>
                <li><Link to={'/news'}>Projects</Link></li>
                <li><Link to={'/news'}>Events</Link></li>
                <li><Link to={'/'}>About</Link></li>
                <li className="active"><Link to={'/Contact'}>Contact</Link></li>
                <li><Link to={'/forum'}>Forum</Link></li>
            </ul>

                <Link to={'/'} className="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</Link>

                <Link to={'/'} className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                  <span></span>
                </Link>

              </div>
            </div>
          </div>
        </nav>


        <div className="untree_co-hero overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 text-center ">
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p>Welcome to the LabLink! Contact Page! Whether you're a student looking to join a research project, a professor eager to showcase your work, or someone with a general inquiry, we're here to help.</p>
                    </div>

                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300"><Link to={'/'} className="btn btn-secondary">Explore courses</Link></p>

                  </div>


                </div>

              </div>

            </div>
          </div>

        </div>




        <div className="untree_co-section">
          <div className="container">

            <div className="row mb-5">
              <div className="col-lg-4 mb-5 order-2 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info">

                  <div className="address mt-4">
                    <i className="icon-room"></i>
                    <h4 className="mb-2">Location:</h4>
                    <p>201 Dowman Dr, Atlanta, GA 30322</p>
                  </div>

                  <div className="open-hours mt-4">
                    <i className="icon-clock-o"></i>
                    <h4 className="mb-2">Open Hours:</h4>
                    <p>
                      Monday-Friday:<br/>
                      09:00 AM - 05:00 PM
                    </p>
                  </div>

                  <div className="email mt-4">
                    <i className="icon-envelope"></i>
                    <h4 className="mb-2">Email:</h4>
                    <p>MATHCS-INFO@listserv.cc.emory.edu</p>
                  </div>

                  <div className="phone mt-4">
                    <i className="icon-phone"></i>
                    <h4 className="mb-2">Call:</h4>
                    <p>+1 (404) 727-7580</p>
                  </div>

                </div>
              </div>
              <div className="col-lg-7 mr-auto order-1" data-aos="fade-up" data-aos-delay="200">
                <form action="#">
                  <div className="row">
                    <div className="col-6 mb-3">
                      <input type="text" className="form-control" placeholder="Your Name"/>
                    </div>
                    <div className="col-6 mb-3">
                      <input type="email" className="form-control" placeholder="Your Email"/>
                    </div>
                    <div className="col-12 mb-3">
                      <input type="text" className="form-control" placeholder="Subject"/>
                    </div>
                    <div className="col-12 mb-3">
                      <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                    </div>

                    <div className="col-12">
                      <input type="submit" value="Send Message" className="btn btn-primary"/>
                    </div>
                  </div>
                </form>
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
                </div>
                <div className="widget">
                  <h3>Connect</h3>
                  <ul className="list-unstyled social">
                    <li><Link to={'/'}><span className="icon-instagram"></span></Link></li>
                    <li><Link to={'/'}><span className="icon-twitter"></span></Link></li>
                    <li><Link to={'/'}><span className="icon-facebook"></span></Link></li>
                    <li><Link to={'/'}><span className="icon-linkedin"></span></Link></li>
                    <li><Link to={'/'}><span className="icon-pinterest"></span></Link></li>
                    <li><Link to={'/'}><span className="icon-dribbble"></span></Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2 ml-auto">
                <div className="widget">
                  <h3>Projects</h3>
                  <ul className="list-unstyled float-left links">
                    <li><Link to={'/'}>AI</Link></li>
                    <li><Link to={'/'}>HCI</Link></li>
                    <li><Link to={'/'}>Software</Link></li>
                    <li><Link to={'/'}>Robotics</Link></li>
                    <li><Link to={'/'}>......</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget">
                  <h3>Ongoing Project</h3>
                  <ul className="instafeed instagram-gallery list-unstyled">
                    <li><a className="instagram-item" href="images/gal_1.jpg" data-fancybox="gal"><img src="images/gal_1.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a className="instagram-item" href="images/gal_2.jpg" data-fancybox="gal"><img src="images/gal_2.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a className="instagram-item" href="images/gal_3.jpg" data-fancybox="gal"><img src="images/gal_3.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a className="instagram-item" href="images/gal_4.jpg" data-fancybox="gal"><img src="images/gal_4.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a className="instagram-item" href="images/gal_5.jpg" data-fancybox="gal"><img src="images/gal_5.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a className="instagram-item" href="images/gal_6.jpg" data-fancybox="gal"><img src="images/gal_6.jpg" alt="" width="72" height="72"/></a>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="col-lg-3">
                <div className="widget">
                  <h3>Contact</h3>
                  <address>201 Dowman Dr, Atlanta, GA 30322</address>
                  <ul className="list-unstyled links mb-4">
                    <li><a href="tel://4047277580 ">+1(404) 727-7580 </a></li>
                    <li><a href="mailto:MATHCS-INFO@listserv.cc.emory.edu">MATHCS-INFO@listserv.cc.emory.edu</a></li>
                  </ul>
                </div>
              </div>

            </div>

            <div className="row mt-5">
              <div className="col-12 text-center">
                <p>Copyright &copy;<script> document.write(new Date().getFullYear());</script> All Rights Reserved.</p>
              </div>
            </div>
          </div>
          </div>
        </>
)}
