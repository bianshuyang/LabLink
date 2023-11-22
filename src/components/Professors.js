import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import professorInfo from './ProfessorSample.json';
import Navbar from './Navbar.js';

const ITEMS_PER_PAGE = 9; // Adjust as needed
const MAX_VISIBLE_PAGINATION = 15; // Maximum number of visible pagination links

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


function Professors() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const [showModal, setShowModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(professorInfo);
  const maxPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
  const pagination = generatePagination(currentPage, maxPages);
  const visibleProfessors = searchResults.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchLower = event.target.value.toLowerCase();

    const filteredProfessors = professorInfo.filter(professor => {
      return Object.values(professor).some(value => {
        if (Array.isArray(value)) {
          return value.join(' ').toLowerCase().includes(searchLower);
        }
        return typeof value === 'string' && value.toLowerCase().includes(searchLower);
      });
    });

    setSearchResults(filteredProfessors);
  };


  useEffect(() => {
/*    fetch('/ProfessorSample.json')
    .then(response => response.json())
    .then(data => setProfessor(data))
    .catch(error => console.error('Error fetching data:', error));
    */
  }, []);

  return (
    <div className='Professors'>

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
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p><em>"A good teacher isn't someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed."</em></p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#Professor_concrete" className="btn btn-secondary">Explore instructors</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
            
      <div className="untree_co-section bg-light" id = "Professor_concrete">

        
        <div className="container">

          <input
        type="text"
        placeholder="Find Professor!"
        value={searchTerm}
        onChange={handleSearch}
        />


          <div className="row align-items-stretch">
  <div className="container">
    <div className="untree_co-section bg-light">
      <div className="row">
        {visibleProfessors.map((prof, index) => (
          <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100} key={prof.id /* Assuming each professor has a unique id */}>
            <div className="staff text-center">
              <div className="mb-4"><img src={prof.Image} alt="Image" className="img-fluid" /></div>
              <div className="staff-body">
                <h3 className="staff-name">
                  <Link to={'/SingleProf'} state={{ prof: index }}>{prof.name}</Link>
                </h3>
                <span className="d-block position mb-4">{prof.title}</span>
                <p className="mb-5">{prof.researchInterest}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>




<div className="row mt-5">
  <div className="col-12 text-center">
    <ul className="list-unstyled custom-pagination">
      {generatePagination(currentPage, Math.ceil(searchResults.length / ITEMS_PER_PAGE)).map((page, index) => (
        <li key={index} className={page === currentPage ? 'active' : ''}>
          {page === '...' ? (
            <span>...</span>
          ) : (
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}>{page}</a>
          )}
        </li>
      ))}
    </ul>
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

export default Professors;
