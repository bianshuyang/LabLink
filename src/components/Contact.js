import React from 'react';
import { Link } from "react-router-dom";

export default function Contact() {
    return (
      <>
        <div class="site-mobile-menu">
          <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close">
              <span class="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div>



        <nav class="site-nav mb-5">
          <div class="pb-2 top-bar mb-3">
            <div class="container">
              <div class="row align-items-center">

                <div class="col-6 col-lg-9">
                  <Link to={'/'} class="small mr-3"><span class="icon-question-circle-o mr-2"></span> <span class="d-none d-lg-inline-block">Have a questions?</span></Link>
                  <Link to={'/'} class="small mr-3"><span class="icon-phone mr-2"></span> <span class="d-none d-lg-inline-block">10 20 123 456</span></Link>
                  <Link to={'/'} class="small mr-3"><span class="icon-envelope mr-2"></span> <span class="d-none d-lg-inline-block">info@mydomain.com</span></Link>
                </div>

                <div class="col-6 col-lg-3 text-right">
                  <Link to={'/'} class="small mr-3">
                    <span class="icon-lock"></span>
                    Log In
                  </Link>
                  <Link to={'/'} class="small">
                    <span class="icon-person"></span>
                    Register
                  </Link>
                </div>

              </div>
            </div>
          </div>
          <div class="sticky-nav js-sticky-header">
            <div class="container position-relative">
              <div class="site-navigation text-center">
                <Link to={'/'} class="logo menu-absolute m-0">Learner<span class="text-primary">.</span></Link>

                <ul class="js-clone-nav d-none d-lg-inline-block site-menu">
                  <li><Link to={'/'}>Home</Link></li>
                  <li class="has-children">
                    <Link to={'/'}>Dropdown</Link>
                    <ul class="dropdown">
                      <li><Link to={'/'}>Elements</Link></li>
                      <li class="has-children">
                        <Link to={'/'}>Menu Two</Link>
                        <ul class="dropdown">
                          <li><Link to={'/'}>Sub Menu One</Link></li>
                          <li><Link to={'/'}>Sub Menu Two</Link></li>
                          <li><Link to={'/'}>Sub Menu Three</Link></li>
                        </ul>
                      </li>
                      <li><Link to={'/'}>Menu Three</Link></li>
                    </ul>
                  </li>
                  <li><Link to={'/'}>Our Staff</Link></li>
                  <li><Link to={'/News'}>News</Link></li>
                  <li><Link to={'/'}>Gallery</Link></li>
                  <li><Link to={'/'}>About</Link></li>
                  <li class="active"><Link to={'/Contact'}>Contact</Link></li>
                </ul>

                <Link to={'/'} class="btn-book btn btn-secondary btn-sm menu-absolute">Enroll Now</Link>

                <Link to={'/'} class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light" data-toggle="collapse" data-target="#main-navbar">
                  <span></span>
                </Link>

              </div>
            </div>
          </div>
        </nav>


        <div class="untree_co-hero overlay">
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-12">
                <div class="row justify-content-center ">
                  <div class="col-lg-6 text-center ">
                    <h1 class="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
                    <div class="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p>Another free template by <Link to={'/'} target="_blank" class="link-highlight">Untree.co</Link>. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.</p>
                    </div>

                    <p class="mb-0" data-aos="fade-up" data-aos-delay="300"><Link to={'/'} class="btn btn-secondary">Explore courses</Link></p>

                  </div>


                </div>

              </div>

            </div>
          </div>

        </div>




        <div class="untree_co-section">
          <div class="container">

            <div class="row mb-5">
              <div class="col-lg-4 mb-5 order-2 mb-lg-0" data-aos="fade-up" data-aos-delay="100">
                <div class="contact-info">

                  <div class="address mt-4">
                    <i class="icon-room"></i>
                    <h4 class="mb-2">Location:</h4>
                    <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                  </div>

                  <div class="open-hours mt-4">
                    <i class="icon-clock-o"></i>
                    <h4 class="mb-2">Open Hours:</h4>
                    <p>
                      Sunday-Friday:<br/>
                      11:00 AM - 2300 PM
                    </p>
                  </div>

                  <div class="email mt-4">
                    <i class="icon-envelope"></i>
                    <h4 class="mb-2">Email:</h4>
                    <p>info@Untree.co</p>
                  </div>

                  <div class="phone mt-4">
                    <i class="icon-phone"></i>
                    <h4 class="mb-2">Call:</h4>
                    <p>+1 1234 55488 55</p>
                  </div>

                </div>
              </div>
              <div class="col-lg-7 mr-auto order-1" data-aos="fade-up" data-aos-delay="200">
                <form action="#">
                  <div class="row">
                    <div class="col-6 mb-3">
                      <input type="text" class="form-control" placeholder="Your Name"/>
                    </div>
                    <div class="col-6 mb-3">
                      <input type="email" class="form-control" placeholder="Your Email"/>
                    </div>
                    <div class="col-12 mb-3">
                      <input type="text" class="form-control" placeholder="Subject"/>
                    </div>
                    <div class="col-12 mb-3">
                      <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
                    </div>

                    <div class="col-12">
                      <input type="submit" value="Send Message" class="btn btn-primary"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>


          </div>
        </div>

        <div class="site-footer">


          <div class="container">

            <div class="row">
              <div class="col-lg-3 mr-auto">
                <div class="widget">
                  <h3>About Us<span class="text-primary">.</span> </h3>
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div class="widget">
                  <h3>Connect</h3>
                  <ul class="list-unstyled social">
                    <li><Link to={'/'}><span class="icon-instagram"></span></Link></li>
                    <li><Link to={'/'}><span class="icon-twitter"></span></Link></li>
                    <li><Link to={'/'}><span class="icon-facebook"></span></Link></li>
                    <li><Link to={'/'}><span class="icon-linkedin"></span></Link></li>
                    <li><Link to={'/'}><span class="icon-pinterest"></span></Link></li>
                    <li><Link to={'/'}><span class="icon-dribbble"></span></Link></li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-2 ml-auto">
                <div class="widget">
                  <h3>Projects</h3>
                  <ul class="list-unstyled float-left links">
                    <li><Link to={'/'}>Web Design</Link></li>
                    <li><Link to={'/'}>HTML5</Link></li>
                    <li><Link to={'/'}>CSS3</Link></li>
                    <li><Link to={'/'}>jQuery</Link></li>
                    <li><Link to={'/'}>Bootstrap</Link></li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3">
                <div class="widget">
                  <h3>Gallery</h3>
                  <ul class="instafeed instagram-gallery list-unstyled">
                    <li><a class="instagram-item" href="images/gal_1.jpg" data-fancybox="gal"><img src="images/gal_1.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a class="instagram-item" href="images/gal_2.jpg" data-fancybox="gal"><img src="images/gal_2.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a class="instagram-item" href="images/gal_3.jpg" data-fancybox="gal"><img src="images/gal_3.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a class="instagram-item" href="images/gal_4.jpg" data-fancybox="gal"><img src="images/gal_4.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a class="instagram-item" href="images/gal_5.jpg" data-fancybox="gal"><img src="images/gal_5.jpg" alt="" width="72" height="72"/></a>
                    </li>
                    <li><a class="instagram-item" href="images/gal_6.jpg" data-fancybox="gal"><img src="images/gal_6.jpg" alt="" width="72" height="72"/></a>
                    </li>
                  </ul>
                </div>
              </div>


              <div class="col-lg-3">
                <div class="widget">
                  <h3>Contact</h3>
                  <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                  <ul class="list-unstyled links mb-4">
                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                    <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                    <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                  </ul>
                </div>
              </div>

            </div>

            <div class="row mt-5">
              <div class="col-12 text-center">
                <p class="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a>  Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
              </div>
            </div>
          </div>
          </div>
        </>
)}
