import React from "react";
import { Link } from "react-router-dom"
import Forum from './Forum'; // Adjust the path accordingly.
import Professors from './Professors';
import Projects from "./Projects";
import Register from './Register';
import About from './About';
import Contact from './Contact';
import News from './News'
import { useNavigation } from 'react-router-dom';
import SingleProf from "./SingleProf";
import Navbar from './Navbar.js';
function Home(){

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

                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100"><em>Research is to see what everybody else has seen, and to think what nobody else has thought.</em></h1>
                <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                  <a href="#Home_concrete" className="btn btn-secondary">Explore Research</a>
                </p>
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
            <h2 className="line-bottom text-center mb-4">What Research Areas are there in Computer Science?</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Artificial_intelligence", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Artificial Intelligence</h3>
                <span></span>
              </div>
            </button>

          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <button onClick={() => window.open("https://en.wikipedia.org/wiki/Data_mining", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-briefcase"></i>
              </div>
              <div>
                <h3>Data Mining and Analytics</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Health_informatics", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-chart-pie"></i>
              </div>
              <div>
                <h3>Health Informatics</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Theory_of_computation", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-calculator"></i>
              </div>
              <div>
                <h3>Theory of Computation</h3>
                <span></span>
              </div>
            </button>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Scientific_Computer_Applications", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-pen"></i>
              </div>
              <div>
                <h3>Scientific Computer Applications</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <button onClick={() => window.open("https://en.wikipedia.org/wiki/Database", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Database and Information Systems </h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-camera"></i>
              </div>
              <div>
                <h3>Human Computer Interaction</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Software_engineering", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-circle-layer"></i>
              </div>
              <div>
                <h3>Software Engineering</h3>
                <span></span>
              </div>
            </button>
          </div>


        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-8 text-center">
            <p>Learn more about research recruiting at Emory <Link to="Applications">Browse all</Link></p>
          </div>
        </div>
      </div>
    </div>

    <div className="untree_co-section bg-light" id="Home_concrete">
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
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3>Data Driven Innovations for Human-Technology Symbiosis Lab</h3>
                <p className="mb-4">NLP, AI, ML, HCI</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="images/data_mining_cover.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3>Practical Data Mining & Exploration Lab</h3>
                <p className="mb-4">ML, Data Mining, Healthcare</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="images/Simbiosys_cover.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3>Simbiosys Lab</h3>
                <p className="mb-4">Distributed Systems, Data Science</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
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
                <h2 className="mb-3"><Link to={'/news'}>Contextual Embedding Representation for Dialogue Systems</Link></h2>
                <div className="meta mb-2"><span className="icon-calendar mr-2"></span><span>March 30, 2020</span>  <span className="icon-person mr-2"></span>Zihao Wang, Emory Universityt</div>
                <p>Context is a crucial element for conversational agents to conduct natural and engaging conversations with human users</p>
                <p><Link to={'/news'}>Learn More</Link></p>
              </div>
            </div>
          </div>
          <div className="col-lg-6"  data-aos="fade-up" data-aos-delay="200">
            <div className="media-h d-flex h-100">
              <figure>
                <img src="images/img-school-2-min.jpg" alt="Image"/>
              </figure>
              <div className="media-h-body">
                <h2 className="mb-3"><Link to={'/news'}>Interpretable and Interactive Representation Learning on Geometric Data</Link></h2>
                <div className="meta mb-2"><span className="icon-calendar mr-2"></span><span>December 1, 2022</span>  <span className="icon-person mr-2"></span>Emory CS Department</div>
                <p>In recent years, representation learning on geometrics data, such as image and graph-structured data, are experiencing rapid developments and achieving significant progress</p>
                <p><Link to={'/news'}>Learn More</Link></p>
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
            <h3 className="line-bottom mb-4">The Mission Behind LabLink!</h3>
            <p>Many reasons are as follows: </p>

            <div className="custom-accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Students often have difficulty accessing research opportunities.</button>
                </h2>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p>Lab Link offers a platform for in-coming students to avoid the awkwardness of cold emails</p>
                        <p>Create an informed student body and wide pool of applicants</p>
                        <p>Find research events in an interdisciplinary way</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">No Consolidated Recruitment Platform for Professors</button>
                </h2>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p>Students can self-nominate and take initative to raise their presence in the department</p>
                        <p>Professors can post recruitment notices to gain student applications</p>
                        <p>Department can modify appropriately the professors and students for best practices </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Need for CS community building</button>
                </h2>

                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p>Provide stable platform (vs. email) to access information on upcoming academic and campus-wide events</p>
                        <p>Raise general awareness of what opportunities are available</p>
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
              <h3><Link to={'/Contact'}>Connect</Link></h3>
              <ul className="list-unstyled social">
              </ul>
            </div>
          </div>

          <div className="col-lg-2 ml-auto">
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
    </>
  )
}

export default Home
