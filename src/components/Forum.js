import React, { useState, useEffect } from 'react';
import "../styles/forum.css";
import { Link } from "react-router-dom"
import Navbar from './Navbar.js';


const ITEMS_PER_PAGE = 9;
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




function Forum() {

    const getUserNameByNetId = (netid) => {
        const user = usersData.find(u => u.netid === netid);
        return user ? user.Name : netid;
    };

    const urlWithParams = (endpoint, collectionName, filter = {}) => {
            const params = new URLSearchParams({ collectionName});
            return `${endpoint}?${params.toString()}`;
        };

    const [postsData, setpostsData] = useState([]);
    const [repliesData, setrepliesData] = useState([]);
    const [usersData, setusersData] = useState([]);

    const [netid, setnetid] = React.useState('');
    const [postid, setpostid] = React.useState('');
    const [postData, setpostData] = React.useState('');
    const [postDate, setpostDate] = React.useState('');
    ////////////
    const [replyid,setreplyid]= React.useState('');
    const [replyData,setreplyData] = React.useState('');
    const [replyDate,setreplyDate] = React.useState('');


    /////////////
    useEffect(() => {
    const fetchData = async () => {
    try {

        //const repliesResponse = await fetch(urlWithParams("http://localhost:3000/api/forum", 'replies'));
        //const postsResponse = await fetch(urlWithParams("http://localhost:3000/api/forum", 'threads'));
        
        fetchPostsAndUpdateState();
        fetchRepliesAndUpdateState();
        fetchUsersAndUpdateState();
        console.log(usersData);

        console.log("ALLDONE");
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};


        fetchData();
    }, []);



const fetchUsersAndUpdateState = async () => {
    try {
         const response = await fetch("/api/forum?dataType=users", {
            method: "GET"
            });
        const responseDataText = await response.text();

        // Attempt to parse as JSON, if fails, just use the text
        let responseData;
        try {
            responseData = JSON.parse(responseDataText);
        } catch (error) {
            console.error("Failed to parse response as JSON: ", responseDataText);
            responseData = responseDataText;
        }

        // Handle based on type
        if (typeof responseData === 'object' && response.ok) {
            setusersData(responseData);
        } else {
            console.error('Error or non-JSON response:', responseData);
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    };



    const fetchPostsAndUpdateState = async () => {
    try {
         const response = await fetch("/api/forum?dataType=threads", {
            method: "GET"
            });
        const responseDataText = await response.text();

        // Attempt to parse as JSON, if fails, just use the text
        let responseData;
        try {
            responseData = JSON.parse(responseDataText);
        } catch (error) {
            console.error("Failed to parse response as JSON: ", responseDataText);
            responseData = responseDataText;
        }

        // Handle based on type
        if (typeof responseData === 'object' && response.ok) {
            setpostsData(responseData);
        } else {
            console.error('Error or non-JSON response:', responseData);
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    };

const fetchRepliesAndUpdateState = async () => {
        try {
            console.log("STEP on replies?????/ !")
        const response = await fetch("/api/forum?dataType=replies", {
            method: "GET"
        });

const responseDataText = await response.text();

        // Attempt to parse as JSON, if fails, just use the text
        let responseData;
        try {
            responseData = JSON.parse(responseDataText);
        } catch (error) {
            console.error("Failed to parse response as JSON: ", responseDataText);
            responseData = responseDataText;
        }

        // Handle based on type
        if (typeof responseData === 'object' && response.ok) {
            setrepliesData(responseData);
        } else {
            console.error('Error or non-JSON response:', responseData);
        }

    } catch (error) {
        console.error('Error fetching data: ', error);
    }
    };

    async function addreply(netid, replyData, replyDate, replyid, selectedPostId) {
        try {
            const response = await fetch("/api/forum?collection=replies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    collectionName: 'replies',
                    netid: netid,
                    replycontent: replyData,
                    replydate: replyDate,
                    replyid: replyid,
                    postid: selectedPostId,
                }),
            });
            console.log(response);
            const statusCode = response.status;
            console.log(statusCode);

        } catch (error) {
            //console.error('Error during registration:', error.message);
            console.log("Something is wrong...?")
            console.log(error);
        }
    }

    async function addthread(netid, postid, postData,postDate) {
        try {
          console.log(process.env);
            const response = await fetch("/api/forum?collection=threads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    netid: netid,
                    postid: postid,
                    postData: postData,
                    postDate: postDate,
                    collectionName: "threads"
                }),
            });
            console.log(response);
            const statusCode = response.status;
            console.log(statusCode);
            console.log("I have rerendered. ")

        } catch (error) {
            //console.error('Error during registration:', error.message);
            console.log("Something is wrong...?")
            console.log(error);
        }

    }

    async function deletereply(netid, postid, replyid) {
        try {
        console.log(process.env);
       // const repliesForSelectedPost = repliesData.filter(reply => reply.postid === selectedPostId);
        //console.log(repliesForSelectedPost);
        console.log(netid, postid, replyid);

        let requestBody = {
            postid: postid,
            replyid: replyid,
            collectionName: "replies"
        };

        if (netid !== "lablinkadmin") {
            requestBody.netid = netid;
        }

        const response = await fetch("/api/forum?collection=replies", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
        });

            console.log(response);
            const statusCode = response.status;
            if (statusCode == 403) {
                alert("It seems you are deleting unauthorized replies");
            }
            else{
                alert("Your reply is marked as Delete.");
            }
            console.log(statusCode);

        } catch (error) {
            //console.error('Error during registration:', error.message);
            console.log("Something is wrong...?")
            console.log(error);
        }
    }




    async function deletethread(netid, postid) {
        try {

        let requestBody = {
            postid: postid,
            collectionName: "threads"
        };

        if (netid !== "lablinkadmin") {
            requestBody.netid = netid;
        }

        console.log(process.env);
       // const repliesForSelectedPost = repliesData.filter(reply => reply.postid === selectedPostId);
        //console.log(repliesForSelectedPost);
        console.log(netid, postid);
        const response = await fetch("/api/forum?collection=threads", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody)
            });
            console.log(response);
            const statusCode = response.status;
            if (statusCode == 403) {
                alert("It seems you are deleting unauthorized posts");
            }
            else{
                alert("Post are removed from database. However, all replies are retained");
            }
            fetchPostsAndUpdateState();
            console.log(statusCode);

        } catch (error) {
            //console.error('Error during registration:', error.message);
            console.log("Something is wrong...?")
            console.log(error);
        }
    }








const addReplySubmit = async (event) => {
    event.preventDefault();

    const repliesForSelectedPost = repliesData.filter(reply => reply.postid === selectedPostId);

    // Determine the next reply ID
    const nextReplyId = repliesForSelectedPost.length + 1;
    const token = sessionStorage.getItem('userToken');
    console.log(token,"is token!!!!");
    const randomNetId = token; // Placeholder for actual netid, to be improved
    const currentDate = new Date().toISOString();

    const newReply = {
        netid: randomNetId,
        replycontent: replyData,
        replydate: currentDate,
        replyid: nextReplyId,
        postid: selectedPostId, // This should already be set when the user began the reply process
    };
    console.log(postid);
    await addreply(newReply.netid, newReply.replycontent, newReply.replydate, newReply.replyid, newReply.postid);
    alert("Thank you for bringing in a post, your response has been submitted");
    fetchRepliesAndUpdateState();
    console.log("OK??????")
    setreplyData('');

};





 const addThreadSubmit = async (event) => {
    event.preventDefault();

    let maxPostId, nextPostId;

    try {
        maxPostId = postsData.length > 0 ? postsData[postsData.length - 1].postid + 1 : 1;
        nextPostId = maxPostId + 1;
    } catch (error) {
        console.error("Error getting max post id:", error);
        maxPostId = 1;
        nextPostId = maxPostId + 1;
    }

    const token = sessionStorage.getItem('userToken');
    console.log(token,"is token!!!!");
    const randomNetId = token; // to be replaced when we connect
    const currentDate = new Date().toISOString();
    setnetid(randomNetId);
    setpostid(nextPostId);
    setpostDate(currentDate);
    alert("Thank you for bringing in a post, your response has been submitted");
    const response = await addthread(randomNetId, nextPostId, postData, currentDate);  // Call fetchData with netID and password

    fetchPostsAndUpdateState();
    console.log("fetching complete!!!")
    setpostData('');

  };

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

    const deleteClick = async (event) => {
        event.preventDefault();
        setShowReplies(false);
        // setSelectedPostId(null);
        setCurrentPage(1);
        console.log(selectedPostId);
        const token = sessionStorage.getItem('userToken');
        if (token == null){
            alert ("Unauthorized deletion. Please log in.")
            return
        }
        else{
            await deletethread(token, selectedPostId);
        }
    };

    const deleteReplyClick = async (replyId, event) => {
        event.preventDefault();
        setCurrentPage(1);
        console.log(selectedPostId, replyId);
        const token = sessionStorage.getItem('userToken');
        if (token == null){
            alert ("Unauthorized deletion. Please log in.")
            return
        }
        else{
            await deletereply(token, selectedPostId, replyId); //
        }
        fetchRepliesAndUpdateState();
    };

    const handleReplyPageChange = (page) => {
        setCurrentReplyPage(page);
    };


    //const [postsData, setpostsData] = useState([]);
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

      <Navbar/>

      <div className="untree_co-hero overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Forum of Discussion</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p><h2><em>"A great place for discussion."</em></h2></p>
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
                    <div class="button-container">
                        <button class="btn" onClick={handleBackClick}>Back to Posts</button>
                        <button class="btn" onClick={deleteClick}>Delete My Post</button>
                    </div>

                    <h2>Replies</h2>
                    <ul>
                        {repliesData
                            .filter(reply => reply.postid === selectedPostId)
                            .map(reply => (
                                <li key={reply.replyid}>
                                    <strong>{reply.replydate}</strong> {reply.replycontent}
                                    <button onClick={(event) => deleteReplyClick(reply.replyid, event)}>Delete My Reply</button>
                                </li>
                            ))}
                    </ul>
                    <form onSubmit = {addReplySubmit}>
                    <label>
                      Replies
                      <textarea onChange={(e) => setreplyData(e.target.value)}  type="text" name="Replies"  rows="2" cols="50" placeholder = "Peace and love."></textarea>
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
                    <form  onSubmit = {addThreadSubmit} >
                    <label>
                      New Thread
                                      <textarea
                  onChange={(e) => setpostData(e.target.value)}
                  type="text"
                  name="New Posts"
                  rows="2"
                  cols="50"
                  placeholder="Sincerity brings connections."
                  value={postData} // This line ensures the value is updated in the UI
                />
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
