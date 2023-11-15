import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import projectInfo from './ProjectSample.json';
import ReactCompProj from './ReactCompProj';
import Navbar from './Navbar.js';

const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGINATION = 8;

function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');

  useEffect(() => {
/*    fetch('/ProfessorSample.json')
    .then(response => response.json())
    .then(data => setProfessor(data))
    .catch(error => console.error('Error fetching data:', error));
    */
  }, []);

  return (
    <div className='Projects'>

      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        
        <div className="site-mobile-menu-body">
        </div>
      </div>

      <Navbar />

      <div className="untree_co-hero overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 text-center ">
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Projects</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p><em>"No research without action, no action without research."</em></p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#Projects_concrete" className="btn btn-secondary">Explore projects</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
            
      <div className="untree_co-section bg-light" id = "Projects_concrete">
        <div className="container">

          <div className="row justify-content-center mb-2">
            <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
              <h1 className="line-bottom text-center mb-2">Our Projects</h1>
            </div>
          </div>

          <div className="row align-items-stretch">

            <ReactCompProj data={projectInfo} />

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
      </div>
    </div>
  );
}

export default Projects;
