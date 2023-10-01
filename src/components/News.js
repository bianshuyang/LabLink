import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import oldnewsData from './news_data.json';

console.log(oldnewsData);


const ITEMS_PER_PAGE = 4;
const MAX_VISIBLE_PAGINATION = 8; // Example: 1 ... 4 5 6 ... 25
// import oldnewsData from './fakeData';
console.log(oldnewsData);

function generatePagination(currentPage, maxPages) {
    let pages = [];
    if (maxPages <= MAX_VISIBLE_PAGINATION) {
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
    } else {
        // ... same logic as you provided
    }
    return pages;
}



function News(){

  

  const [newsData, setNewsData] = useState(oldnewsData); // You can fetch this from an external source if needed
  const [currentPage, setCurrentPage] = useState(1);
  



  useEffect(() => {
        setNewsData(oldnewsData); // Replace with data fetch if needed
    }, []);


if (newsData){
  console.log("====")
  console.log(newsData);
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
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/'}>Professors</Link></li>
                <li className="active"><Link to={'/news'}>Projects</Link></li>
                <li className="active"><Link to={'/news'}>Events</Link></li>
                <li><Link to={'/'}>About</Link></li>
                <li><Link to={'/'}>Contact</Link></li>
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
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">News</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p>More than seminars, discussions. A collection for students, faculty, and more. </p>
                    <p>All @ Emory.</p>
                  </div>

                  <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
        <a href="#News_concrete" className="btn btn-secondary">Check on the news.</a>
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
                      <p>{news.description}</p>
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
<div className="site-footer">


        <div className="container">

          <div className="row">
            <div className="col-lg-3 mr-auto">
              <div className="widget">
                <h3>About Us<span className="text-primary">.</span> </h3>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
                <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                <ul className="list-unstyled links mb-4">
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="tel://11234567890">+1(123)-456-7890</a></li>
                  <li><a href="mailto:info@mydomain.com">info@mydomain.com</a></li>
                </ul>
              </div>
            </div>

          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed with love by <a href="https://untree.co">Untree.co</a>  Distributed By <a href="https://themewagon.com">ThemeWagon</a></p>
              </div>
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
