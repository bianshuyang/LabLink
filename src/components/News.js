import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import Navbar from './Navbar.js';




const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGINATION = 8; // Example: 1 ... 4 5 6 ... 25
// import oldnewsData from './fakeData';
// console.log(oldnewsData);

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



function News(){


  const token = sessionStorage.getItem('userToken');
  const [newsData, setNewsData] = useState([]); // You can fetch this from an external source if needed
  const [currentPage, setCurrentPage] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const bool = true;
  useEffect(() => {
        // Replace this URL with your server's endpoint URL
        fetch("/api/news")
            .then(response => response.json())
            .then(data => {
                setNewsData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                bool = false;
            });
    }, []);


if (bool){
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
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">News</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p><em>More than seminars, discussions. A collection for students, faculty, and more.</em></p>
                    <p><em>All @ Emory.</em></p>
                  </div>

                  <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
        <a href="#News_concrete" className="btn btn-secondary">Check on the news</a>
    </p>


                </div>


              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="untree_co-section bg-light" id = "News_concrete">
        <div className="container">
    <div className="row align-items-stretch">
          {newsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((news, index) => (
          <div key={news.id} className="col-lg-6 mb-4 news-item" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              <div className="media-h d-flex h-100">
                  <figure>
                      <img src={news.imageUrl} alt="Image"/>
                  </figure>
                  <div className="media-h-body">
                      <h2 className="mb-3"><Link to="/">{news.title}</Link>
                      </h2>
                      <div className="meta ">
                          <span className="icon-calendar mr-2"></span><span>{news.date}</span>
                          <span className="icon-person mr-2"></span>{news.author}
                      </div>
                      <p onClick={() => {
    if (news.description.length > 100) {
        setCurrentDescription(news.description);
        setShowModal(true);
    }
}}>
    {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
</p>
<Modal show={showModal} onHide={() => setShowModal(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Full Description</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        {currentDescription}
    </Modal.Body>
    <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
        </Button>
    </Modal.Footer>
</Modal>



                  </div>
              </div>
          </div>
      ))}

  </div>

<div className="row mt-5">

    <div className="col-12 text-center">
        <ul className="list-unstyled custom-pagination">


            {generatePagination(currentPage, Math.ceil(newsData.length / ITEMS_PER_PAGE)).map((page, index) => (
                <li key={index} className={page === currentPage ? 'active' : ''}>
                    {page === '...' ? (
                        '...'
                    ) : (
                        <a onClick={() => setCurrentPage(page)}>{page}</a>
                    )}
                </li>
            ))}
        </ul>
    </div>
</div>



</div>

<div className="site-footer">


<div className="container">

        <div className="row">
          <div className="col-lg-3 mr-auto">
            <div className="widget">
              <h3>About Us<span className="text-primary"></span> </h3>
              <p>A group of Emory students.</p>
            </div>
          </div>

          <div className="col-lg-3 ml-auto">
            <div className="widget">
              <h3>Learn More</h3>
              <ul className="list-unstyled float-left links">
                <li><a href="https://github.com/bianshuyang/LabLink">LabLink Github and Documentation</a></li>
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
              </ul>
            </div>
          </div>


          <div className="col-lg-3">
            <div className="widget">
              <h3>Get in Touch</h3>
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
</>

  ); // mark end

  }

  return <div>...</div>
}

export default News;
