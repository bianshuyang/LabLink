import React, { useState } from 'react';
import "../styles/forum.css";
import { Link } from "react-router-dom"


// reusing News because pagination is EVERYWHERE...


const ITEMS_PER_PAGE = 3;
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


function getUserNameByNetId(netid) {
    const user = usersData.find(u => u.netid === netid);
    return user ? user.Name : "Unknown";
}


const usersData = [
    { netid: 'abc01', Name: 'Amazing Alice', email: 'alice@example.com' },
    { netid: 'def02', Name: 'Busy Bob', email: 'bob@example.com' },
    { netid: 'ghi03', Name: 'Cool Charlie', email: 'charlie@example.com' }
];

const postsData = [
    { netid: 'abc01', postid:1, postData:"Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!Hi there!", postDate: '2023-10-01' },
    { netid: 'def02', postid:2, postData:"Hello everyone!", postDate: '2023-10-02' },
    { netid: 'ghi03', postid:3, postData:"What's up?", postDate: '2023-10-03' },
    { netid: 'abc01', postid:4, postData:"Sharing a cool pic!", postDate: '2023-10-04' },
    { netid: 'ghi03', postid:5, postData:"My first post here!", postDate: '2023-10-05' },
    { netid: 'abc01', postid:6, postData:"Any movie recommendations?", postDate: '2023-10-06' },
];

const repliesData = [
    { netid: 'def02', replycontent: 'Reply by Bob to Alice', replydate: '2023-10-03', replyid: 1, postid: 1 },
    { netid: 'ghi03', replycontent: 'Charlies thoughts on this', replydate: '2023-10-04', replyid: 2, postid: 1 },
    { netid: 'abc01', replycontent: 'Reply by Alice to Bob', replydate: '2023-10-04', replyid: 3, postid: 2 },
    { netid: 'ghi03', replycontent: 'Charlie agrees with Alice', replydate: '2023-10-05', replyid: 4, postid: 3 },
];


function Forum() {
    // State to determine which view to show: users, posts, or replies
    const [view, setView] = useState('users');
    const [showReplies, setShowReplies] = useState(false);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [currentReplyPage, setCurrentReplyPage] = useState(1);

    const handlePostClick = (postId) => {
        setSelectedPostId(postId);
        setShowReplies(true);
        setCurrentReplyPage(1);
    };

    const handleBackClick = () => {
        setShowReplies(false);
        setSelectedPostId(null);
        setCurrentPage(1);
    };

    const handleReplyPageChange = (page) => {
        setCurrentReplyPage(page);
    };

    //const [postsData, setpostsData] = useState([]); // You can fetch this from an external source if needed
    const [currentPage, setCurrentPage] = useState(1);  
 
    // Depending on the state, we'll render different views
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
              <li><Link to={'/news'}>Projects</Link></li>
              <li><Link to={'/news'}>Events</Link></li>
              <li><Link to={'/'}>About</Link></li>
              <li><Link to={'/'}>Contact</Link></li>
              <li  className="active" ><Link to={'/forum'}>Forum</Link></li>
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
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Forum of Discussion</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p>A great place for discussion. </p>
                    <p>All @ Emory.</p>
                  </div>

                  <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
        <a href="#News_concrete" className="btn btn-secondary">Check on the forum</a>
    </p>


                </div>



              </div>

            </div>

          </div>
        </div>
      </div>
      <div className="untree_co-section bg-light" id = "News_concrete">
        <div className="postsContainer">








            <main>
            {showReplies ? (
                <div>
                    <button onClick={handleBackClick}>Back to Posts</button>
                    <h2>Replies</h2>
                    <ul>
                        {repliesData
                            .filter(reply => reply.postid === selectedPostId)
                            .map(reply => (
                                <li key={reply.replyid}>
                                    <strong>{reply.replydate}</strong> {reply.replycontent}
                                </li>
                            ))}
                    </ul>
                    <form>
                    <label>
                      Replies
                      <textarea type="text" name="Replies"  rows="2" cols="50" placeholder = "Peace and love."></textarea>
                    </label>
                    <input type="submit" value="SubmitReplies" />
                  </form>
                </div>
            ) : (
                <div>
                    <h2>Posts</h2>
                    <ul>
                        {postsData.slice((currentPage-1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((post, index) => (
                            
    <li key={post.postid} onClick={() => handlePostClick(post.postid)}>
        {post.postData} - by {getUserNameByNetId(post.netid)}
    </li>

                        ))}
                    </ul>
                    <form>
                    <label>
                      New Thread
                      <textarea type="text" name="Thread"  rows="4" cols="50" placeholder = "Sincerity brings connection."></textarea>
                    </label>
                    <input type="submit" value="I want to Make a new Post" />
                  </form>

                </div>
            )}
        </main>

  </div>

<div className="row mt-5">

    <div className="col-12 text-center">
        <ul className="list-unstyled custom-pagination">


            {showReplies ? 
                        generatePagination(currentReplyPage, Math.ceil(repliesData.filter(reply => reply.postid === selectedPostId).length / ITEMS_PER_PAGE)).map((page, index) => (
                            <li key={index} className={page === currentReplyPage ? 'active' : ''}>
                                {page === '...' ? (
                                    '...'
                                ) : (
                                    <a onClick={() => handleReplyPageChange(page)}>{page}</a>
                                )}
                            </li>
                        ))
                        :
                        generatePagination(currentPage, Math.ceil(postsData.length / ITEMS_PER_PAGE)).map((page, index) => (
                            <li key={index} className={page === currentPage ? 'active' : ''}>
                                {page === '...' ? (
                                    '...'
                                ) : (
                                    <a onClick={() => setCurrentPage(page)}>{page}</a>
                                )}
                            </li>
                        ))
                    }
        </ul>
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



</>

    );
}

export default Forum;