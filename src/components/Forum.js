import React, { useState, useEffect, useContext } from 'react';
import { LabLinkContext } from '../LabLinkProvider';
import "../styles/forum.css";
import { Link } from "react-router-dom"
import Navbar from './Navbar.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-quill/dist/quill.snow.css'; // Include the CSS for the WYSIWYG editor

// templates icons


import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

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



    // The modules object is used to customize the toolbar options
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            // Match visual, not literal, whitespace
            matchVisual: false,
        }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    const ContentWithEmbeddedMedia = ({ content }) => {
        // Function to handle media rendering
        const renderMedia = (mediaUrl) => {
            // You would implement logic here to render the media based on the URL
            // For example, for a YouTube URL, render an iframe
            if (mediaUrl.includes('youtube')) {
                const embedUrl = mediaUrl.replace('watch?v=', 'embed/');
                return <iframe title="YouTube video" src={embedUrl} frameBorder="0" allowFullScreen />;
            }
            // Add more conditions for other media types if needed
        };

        // Replace media links with embedded media in the content
        const contentWithMedia = content.replace(/(https?:\/\/\S+)/gi, (match) => {
            return renderMedia(match);
        });

        return (
            <div dangerouslySetInnerHTML={{ __html: contentWithMedia }} />
        );
    };



    const getUserNameByNetId = (netid) => {
        const user = usersData.find(u => u.netid === netid);
        return user ? user.Name : netid;
    };

    const urlWithParams = (endpoint, collectionName, filter = {}) => {
        const params = new URLSearchParams({ collectionName });
        return `${endpoint}?${params.toString()}`;
    };

    const [postsData, setpostsData] = useState([]);
    const [repliesData, setrepliesData] = useState([]);
    const [usersData, setusersData] = useState([]);

    const { netID, setNetID } = useContext(LabLinkContext);
    const [postid, setpostid] = React.useState('');
    const [postData, setpostData] = React.useState('');
    const [postDate, setpostDate] = React.useState('');
    ////////////
    const [replyid, setreplyid] = React.useState('');
    const [replyData, setreplyData] = React.useState('');
    const [replyDate, setreplyDate] = React.useState('');


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




    async function addthread(netid, postid, postData, postDate) {
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
            else {
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
            else {
                alert("Your research statement is marked as deleted and permanently deleted. However, all replies are NOT retroactively deleted");
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
        console.log(token, "is token!!!!");
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

        console.log("Submitting Post Data: ", postData);
        let maxPostId, nextPostId;

        try {
            maxPostId = postsData.length > 0 ? postsData[postsData.length - 1].postid + 1 : 1;
            nextPostId = maxPostId + 1;
        } catch (error) {
            console.error("Error getting max post id:", error);
            maxPostId = 1;
            nextPostId = maxPostId + 1;
        }

        const currentDate = new Date().toISOString();
        setpostid(nextPostId);
        setpostDate(currentDate);
        alert("Thank you for bringing in a post, your response has been submitted");
        const response = await addthread(netID, nextPostId, postData, currentDate);  // Call fetchData with netID and password

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
        if (token == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deletethread(netID, selectedPostId);
        }
    };

    const deleteReplyClick = async (replyId, event) => {
        //event.preventDefault();
        setCurrentPage(1);
        console.log(selectedPostId, replyId);
        const token = sessionStorage.getItem('userToken');
        if (token == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deletereply(token, selectedPostId, replyId); //
        }
        fetchRepliesAndUpdateState();
    };

    const handleReplyPageChange = (page) => {
        setCurrentReplyPage(page);
    };


    //const [postsData, setpostsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const showTerms = () => {
        console.log("Show Terms and Conditions");
        alert('1. Users are permitted to upload their data to Lablink, including but not limited to, text, images, videos, and other digital content.\n\n2. Visibility Settings: Users have the ability to set visibility parameters for their uploaded data. These settings determine who can view the uploaded content. It is the responsibility of the user to set and maintain these visibility preferences.\n\n3. Changes to Visibility: Users can change the visibility settings of their data at any time. However, it is important to note that changes to visibility settings are not retroactive. This means that if data was previously set to be publicly visible, it could have been viewed, copied, or used by others before the visibility was changed.\n\n4. Risk Acknowledgement: Users must understand that any data uploaded to LabLink and set to a certain visibility level carries the risk of exposure. Even if visibility settings are later changed, the previous exposure of the data cannot be undone. Users should consider the sensitivity of the data they choose to upload and the potential consequences of its exposure.\n\n5. Platform Rights: Lablink reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of the site after any such changes constitutes your consent to such changes.\n\n6. User Discretion: It is the user’s responsibility to regularly review and understand the visibility settings and to use discretion when uploading data to Lablink.\n\nBy using Lablink, you acknowledge that you have read, understood, and agreed to these terms and conditions. Please contact us if you have any questions or concerns regarding these terms.');

    };







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

            <Navbar />

            <div className="untree_co-hero overlay">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center ">
                                <div className="col-lg-6 text-center ">
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Student Profiles</h1>
                                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                                        <p><em>
                                            <p><strong>For students:</strong>  This is a place for students seeking research positions to "nominate" their research statement and profiles, alternative to cold emails</p>
                                            <p><strong>For professors:</strong> This is a place for professor to access pool of students that take initiative</p>
                                        </em></p>
                                        <p>All @ Emory.</p>
                                    </div>

                                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                                        <a href="#News_concrete" className="btn btn-secondary">Find motivated students</a>
                                    </p>


                                </div>



                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="untree_co-section bg-light" id="News_concrete">
                <div className="postsContainer">








                    <main>
                        {showReplies ? (
                            <div>
                                <div className="button-container">
                                    <button className="btn" onClick={handleBackClick}>Back to All Research Statement</button>
                                    <button className="btn" onClick={deleteClick}>Delete My Research Statement</button>
                                </div>

                                <h2>Replies</h2>
                                <ul>
                                    {repliesData
                                        .filter(reply => reply.postid === selectedPostId)
                                        .map(reply => (
                                            <li key={reply.replyid}>
                                                <strong>{reply.replydate}</strong>



                                                <ReactQuill
                                                    value={reply.replycontent}
                                                    config={{
                                                        readOnly: true,

                                                    }}
                                                    modules={{ toolbar: false }}
                                                    theme="snow" // this prop is optional
                                                />



                                                <button onClick={() => deleteReplyClick(reply.replyid)}>Delete My Reply</button>
                                            </li>
                                        ))}
                                </ul>

                                <form onSubmit={addReplySubmit}>
                                    <label>
                                        New Research Statement Follow-Ups </label>


                                    <ReactQuill
                                        value={replyData}
                                        onChange={(content) => setreplyData(content)}
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Sincerity brings connections."
                                        theme="snow" // this prop is optional
                                    />



                                    <input type="submit" value="I am interested in connecting with the student!" />
                                    <p>
                                        Clicking on the above button implies you agree to the
                                        <a href="#" onClick={showTerms}> terms and conditions</a>.
                                    </p>
                                </form>


                            </div>
                        ) : (
                            <div>
                                <h2>Interested Student Profile and their research statement</h2>

                                {
                                    postsData && postsData.length > 0 ? (
                                        <ul>
                                            {postsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE).map((post) => (
                                                <li key={post.postid} onClick={() => handlePostClick(post.postid)}>
                                                    <div className="App">
                                                        <ReactQuill
                                                            value={post.postData}
                                                            config={{
                                                                readOnly: true,

                                                            }}
                                                            modules={{ toolbar: false }}
                                                            theme="snow" // this prop is optional
                                                        />



                                                    </div>
                                                    - by {getUserNameByNetId(post.netid)}
                                                </li>
                                            ))}
                                        </ul>

                                    ) : (
                                        <div>No posts available.</div>
                                    )
                                }


                                <form onSubmit={addThreadSubmit}>


                                    <label>   Adding my Research Statement to Cohort </label>







                                    <ReactQuill
                                        value={postData}
                                        onChange={(content) => setpostData(content)}
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Sincerity brings connections."
                                        theme="snow" // this prop is optional
                                    />




                                    <input type="submit" value="I am looking for a lab position!" />



                                    <p>
                                        Clicking on the above button implies you agree to the
                                        <a href="#" onClick={showTerms}> terms and conditions</a>.
                                    </p>

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
                                    <h3><Link to={'/Contact'}>Connect</Link></h3>
                                    <ul className="list-unstyled social"></ul>
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
                                        <li><a className="instagram-item" href="images/DDIHTS_cover.jpg" data-fancybox="gal"><img src="images/DDIHTS_cover.jpg" alt="" width="72" height="72" /></a>
                                        </li>
                                        <li><a className="instagram-item" href="images/Simbiosys_cover.jpg" data-fancybox="gal"><img src="images/Simbiosys_cover.jpg" alt="" width="72" height="72" /></a>
                                        </li>
                                        <li><a className="instagram-item" href="images/data_mining_cover.jpg" data-fancybox="gal"><img src="images/data_mining_cover.jpg" alt="" width="72" height="72" /></a>
                                        </li>
                                        <li><a className="instagram-item" href="images/DDIHTS_cover.jpg" data-fancybox="gal"><img src="images/DDIHTS_cover.jpg" alt="" width="72" height="72" /></a>
                                        </li>
                                        <li><a className="instagram-item" href="images/Simbiosys_cover.jpg" data-fancybox="gal"><img src="images/Simbiosys_cover.jpg" alt="" width="72" height="72" /></a>
                                        </li>
                                        <li><a className="instagram-item" href="images/data_mining_cover.jpg" data-fancybox="gal"><img src="images/data_mining_cover.jpg" alt="" width="72" height="72" /></a>
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

    );
}

export default Forum;
