import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGINATION = 8;

function SampleComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

function generatePagination(currentPage, maxPages) {
    let pages = [];
    if (maxPages <= MAX_VISIBLE_PAGINATION) {
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
    } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', maxPages];
        if (currentPage <= 3) {
            pages = [1, 2, 3, 4, '...', maxPages];
        } else if (currentPage >= maxPages - 2) {
            pages = [1, '...', maxPages - 3, maxPages - 2, maxPages - 1, maxPages];
        }
    }
    return pages;
}

function SingleProf() {
  const [ProfessorsData, setProfessorsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
    // fetch('/api/professors').then(response => response.json()).then(data => setProfessorsData(data));
  }, []);

  return (
    <div className='SingleProf'>

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
                      <Link to={'/'} className="small mr-3"><span className="icon-question-circle-o mr-2"></span> <span className="d-none d-lg-inline-block">Contact us</span></Link>
                      <Link to={'/'} className="small mr-3"><span className="icon-phone mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
                      <Link to={'/'} className="small mr-3"><span className="icon-envelope mr-2"></span> <span className="d-none d-lg-inline-block"></span></Link>
                    </div>

                    <div className="col-6 col-lg-3 text-right">
                      <Link to={'/login'} className="small mr-3">
                        <span className="icon-lock"></span>
                        Log In
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
                    <li><Link to={'/Home'}>Home</Link></li>
                    <li><Link to={'/Professors'}>Professors</Link></li>
                    <li  className="active" ><Link to={'/SingleProf'}>Single Professor</Link></li> 
                    <li><Link to={'/news'}>Projects</Link></li>
                    <li><Link to={'/news'}>Events</Link></li>
                    <li><Link to={'/'}>About</Link></li>
                    <li><Link to={'/Contact'}>Contact</Link></li>
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
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p>Professors </p>
                      <p>All @ Emory</p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#News_concrete" className="btn btn-secondary">Explore instructors</a>
                    </p>
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
            <img src="images/NT.jpg" alt="image" className="img-fluid" style={{width: '110%', height: 'auto'}}/>
            </div>
            <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay="100">
              <h2 className="line-bottom mb-4">Professor Nirmalya Thakur</h2>

              <div className="custom-accordion" id="accordion_1">
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Research Group: Data Driven Innovations for Human-Technology Symbiosys</button>
                  </h2>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                    <div className="accordion-body">
                      <div className="d-flex">
                        <div className="accordion-img mr-4">
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
                        </div>
                        <div>
                          <p>Human-Computer Interaction</p>
                          <p>Big Data</p>
                          <p>Artificial Intelligence</p>
                          <p>Machine Learning</p>
                          <p>Natural Language processing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="mb-0">
                    <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Student Opportunities</button>
                  </h2>

                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                    <div className="accordion-body">
                      <div className="d-flex">
                        <div className="accordion-img mr-4">
                        </div>
                        <div>
                          <p>Open Position: The Research Group on Data Driven Innovations for Human-Technology Symbiosis is currently looking for a motivated student to work on a research project at the interestions of Big Data and Machine Learning. If you are a graduate or an undergrduate student at Emory University and are interested in this position, please send your resume to Dr. Thakur at nirmalya.thakur@emory.edu to apply.</p>
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

        <div className="untree_co-section bg-light" id = "News_concrete">
        
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
                        <li><Link to={'/'}>Web Design</Link></li>
                        <li><Link to={'/'}>HTML5</Link></li>
                        <li><Link to={'/'}>CSS3</Link></li>
                        <li><Link to={'/'}>jQuery</Link></li>
                        <li><Link to={'/'}>Bootstrap</Link></li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="widget">
                  <h3>Gallery</h3>
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
      </div>
    </div>
  );
}

export default SingleProf;