import React from "react";
import { Link } from "react-router-dom"
import Forum from './Forum'; // Adjust the path accordingly.
import Professors from './Professors';
import Projects from "./Projects";
import Register from './Register';
import Contact from './Contact';
import { useNavigation } from 'react-router-dom';
import SingleProf from "./SingleProf";
import Navbar from './Navbar.js';
function About(){

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
                <Link to={'/'} href="https://vimeo.com/342333493" data-fancybox data-aos="fade-up" data-aos-delay="0" className="caption mb-4 d-inline-block">LabLink!</Link>

                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100"><em>About Emory University, the Emory CS Department, and the LabLink Team</em></h1>
                <p className="mb-0" data-aos="fade-up" data-aos-delay="300"><a href="#" className="btn btn-secondary">Explore projects</a></p>

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
            <h2 className="line-bottom text-center mb-4">Research Areas</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Artificial Intelligence</h3>
                <span>1,391 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-briefcase"></i>
              </div>
              <div>
                <h3>Programming Languages</h3>
                <span>3,234 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-calculator"></i>
              </div>
              <div>
                <h3>Scientific Computing Applications</h3>
                <span>931 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-pen"></i>
              </div>
              <div>
                <h3>Theory of Computation</h3>
                <span>7,291 projects</span>
              </div>
            </Link>
          </div>


          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-music"></i>
              </div>
              <div>
                <h3>Computer Security</h3>
                <span>9,114 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-chart-pie"></i>
              </div>
              <div>
                <h3>Databases and Data Mining</h3>
                <span>2,391 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-camera"></i>
              </div>
              <div>
                <h3>Human-Computer Interaction</h3>
                <span>7,991 projects</span>
              </div>
            </Link>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <Link to={'/'} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-circle-layer"></i>
              </div>
              <div>
                <h3>Software Engineering</h3>
                <span>6,491 projects</span>
              </div>
            </Link>
          </div>


        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-8 text-center">
            <p>We have more categories here. <a href="#">Browse all</a></p>
          </div>
        </div>
      </div>
    </div>

    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom text-center mb-4">Ongoing Projects</h2>
            <p>Explore research projects in the Emory Computer Science Department</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="images/DDIHTS_cover.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span>27 comments</span></div>
                  <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                </div>
                <h3>Data Driven Innovations for Human-Technology Symbiosis Lab</h3>
                <p className="mb-4">NLP, AI, ML, HCI</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'/'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="images/data_mining_cover.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span>43 comments</span></div>
                  <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                </div>
                <h3>Practical Data Mining & Exploration Lab</h3>
                <p className="mb-4">ML, Data Mining, Healthcare</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'/'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="images/Simbiosys_cover.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span>18 comments</span></div>
                  <div className="review"><span className="icon-star"></span> <span>4.8</span></div>
                </div>
                <h3>Simbiosys Lab</h3>
                <p className="mb-4">Distributed Systems, Data Science</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'/'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom text-center mb-4">Upcoming Events</h2>
            <p>Learn about research related events in the Emory Computer Science Department</p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-6"  data-aos="fade-up" data-aos-delay="100">
            <div className="media-h d-flex h-100">
              <figure>
                <img src="images/img-school-1-min.jpg" alt="Image"/>
              </figure>
              <div className="media-h-body">
                <h2 className="mb-3"><Link to={'/'}>Annual Undergraduate Student Research Panel</Link></h2>
                <div className="meta mb-2"><span className="icon-calendar mr-2"></span><span>September 22, 2020</span>  <span className="icon-person mr-2"></span>Emory CS Department</div>
                <p>Undergraduate students hold a panel discussing their experience with research at Emory</p>
                <p><Link to={'/'}>Learn More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6"  data-aos="fade-up" data-aos-delay="200">
            <div className="media-h d-flex h-100">
              <figure>
                <img src="images/img-school-2-min.jpg" alt="Image"/>
              </figure>
              <div className="media-h-body">
                <h2 className="mb-3"><a href="#">Networking Night</a></h2>
                <div className="meta mb-2"><span className="icon-calendar mr-2"></span><span>June 2, 2021</span>  <span className="icon-person mr-2"></span>Emory CS Department</div>
                <p>Join the Emory Computer Science Department in hosting a Networking Night</p>
                <p><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 text-center mx-auto">

            <h3 className="line-bottom mb-4">Instructors</h3>
            <div className="owl-carousel wide-slider-testimonial">
              <div className="item">
                <blockquote className="block-testimonial">

                  <p>&ldquo;Emory Natural Language Processing&rdquo;</p>
                  <div className="author">
                    <img src="images/person_1.jpg" alt="Free template by TemplateUX"/>
                    <h3>Jinho Choi</h3>
                    <p className="position">Associate Professor</p>
                  </div>
                </blockquote>
              </div>

              <div className="item">
                <blockquote className="block-testimonial">

                  <p>&ldquo;Data Driven Innovations for Huamn-Technology Symbiosis Group&rdquo;</p>
                  <div className="author">
                    <img src="images/person_2.jpg" alt="Free template by TemplateUX"/>
                    <h3>Nirmalya Thakur</h3>
                    <p className="position">Assistant Teaching Professor</p>
                  </div>
                </blockquote>
              </div>

              <div className="item">
                <blockquote className="block-testimonial">

                  <p>&ldquo;Cognition & Visualization Lab at Emory&rdquo;</p>
                  <div className="author">
                    <img src="images/person_3.jpg" alt="Free template by TemplateUX"/>
                    <h3>Emily Wall</h3>
                    <p className="position">Assistant Professor</p>
                  </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


    <div className="untree_co-section">


      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-auto mb-5 mb-lg-0"  data-aos="fade-up" data-aos-delay="0">
            <img src="images/img-school-5-min.jpg" alt="image" className="img-fluid"/>
          </div>
          <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <h3 className="line-bottom mb-4">Why This Project</h3>
            <p>Many reasons are as follows: </p>

            <div className="custom-accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Students often have difficulty accessing research opportunities.</button>
                </h2>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div className="accordion-img mr-4">
                        <img src="images/img-school-1-min.jpg" alt="Image" className="img-fluid"/>
                      </div>
                      <div>
                        <p>One-stop shop for all Emory CS research information.</p>
                        <p>Information about available research positions.</p>
                        <p>Expansion potential to other departments. </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Current links to opportunities are scattered and not regularly updated.</button>
                </h2>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div className="accordion-img mr-4">
                        <img src="images/img-school-2-min.jpg" alt="Image" className="img-fluid"/>
                      </div>
                      <div>
                        <p>Social connectivity with current researchers. </p>
                        <p>Collaboration potential with Emora chatbot for interactive information fetching.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Listing of current Emory research events.</button>
                </h2>

                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div className="accordion-img mr-4">
                        <img src="images/img-school-3-min.jpg" alt="Image" className="img-fluid"/>
                      </div>
                      <div>
                        <p>Online announcements for ad-hoc meetings.</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

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

export default About
