import React, { useState, useEffect, useContext } from 'react';
import { LabLinkContext } from '../LabLinkProvider';
import "../styles/application.css";
import { Link } from "react-router-dom"
import Navbar from './Navbar.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'react-quill/dist/quill.snow.css';

import Chatbot from './Chatbot.js'
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

function CentralizedApplication() {



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



    const getUserNameByNetId = (netid) => {
        const user = usersData.find(u => u.netId === netid);
        return user ? user.name : netid;
    };

    const urlWithParams = (endpoint, collectionName, filter = {}) => {
        const params = new URLSearchParams({ collectionName });
        return `${endpoint}?${params.toString()}`;
    };

    const [programsData, setprogramsData] = useState([]);
    const [applicationsData, setapplicationsData] = useState([]);
    const [usersData, setusersData] = useState([]);

    const { netID, setNetID } = useContext(LabLinkContext);
    const [programId, setprogramId] = React.useState('');
    const [programData, setprogramData] = React.useState('');
    const [programDate, setprogramDate] = React.useState('');
    const [applicationId, setapplicationId] = React.useState('');
    const [applicationData, setapplicationData] = React.useState('');
    const [applicationDate, setapplicationDate] = React.useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {

                //const ApplicationsResponse = await fetch(urlWithParams("http://localhost:3000/api/forum", 'Applications'));
                //const ProgramsResponse = await fetch(urlWithParams("http://localhost:3000/api/forum", 'threads'));

                fetchProgramsAndUpdateState();
                fetchApplicationsAndUpdateState();
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



    const fetchProgramsAndUpdateState = async () => {
        try {
            const response = await fetch("/api/forum?dataType=Programs", {
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
                setprogramsData(responseData);
            } else {
                console.error('Error or non-JSON response:', responseData);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const fetchApplicationsAndUpdateState = async () => {
        try {
            console.log("STEP on Applications?????/ !")
            const response = await fetch("/api/forum?dataType=Applications", {
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
                setapplicationsData(responseData);
            } else {
                console.error('Error or non-JSON response:', responseData);
            }

        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    async function addApplication(netid, applicationData, applicationDate, applicationId, selectedProgramId) {
        try {
            const response = await fetch("/api/forum?collection=Applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    collectionName: 'Applications',
                    netid: netid,
                    applicationData: applicationData,
                    applicationDate: applicationDate,
                    applicationId: applicationId,
                    programId: selectedProgramId,
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

    async function addProgram(netid, programId, programData, programDate) {
        try {
            console.log(process.env);
            const response = await fetch("/api/forum?collection=Programs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    netid: netid,
                    programId: programId,
                    programData: programData,
                    programDate: programDate,
                    collectionName: "Programs"
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

    async function deleteApplication(netid, programId, applicationId) {
        try {
            console.log(process.env);
            // const ApplicationsForSelectedProgram = applicationsData.filter(reply => reply.programId === selectedProgramId);
            //console.log(ApplicationsForSelectedProgram);
            console.log(netid, programId, applicationId);

            let requestBody = {
                programId: programId,
                applicationId: applicationId,
                collectionName: "Applications"
            };

            if (netid !== "lablinkadmin") {
                requestBody.netid = netid;
            }

            const response = await fetch("/api/forum?collection=Applications", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            });

            console.log(response);
            const statusCode = response.status;
            if (statusCode == 403) {
                alert("It seems you are deleting unauthorized Applications");
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




    async function deleteProgram(netid, programId) {
        try {

            let requestBody = {
                programId: programId,
                collectionName: "Programs"
            };

            if (netid !== "lablinkadmin") {
                requestBody.netid = netid;
            }

            console.log(process.env);
            // const ApplicationsForSelectedProgram = applicationsData.filter(reply => reply.programId === selectedProgramId);
            //console.log(ApplicationsForSelectedProgram);
            console.log(netid, programId);
            const response = await fetch("/api/forum?collection=Programs", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody)
            });
            console.log(response);
            const statusCode = response.status;
            if (statusCode == 403) {
                alert("It seems you are deleting unauthorized Programs");
            }
            else {
                alert("Program are removed from database. However, all Applications are retained");
            }
            fetchProgramsAndUpdateState();
            console.log(statusCode);

        } catch (error) {
            //console.error('Error during registration:', error.message);
            console.log("Something is wrong...?")
            console.log(error);
        }
    }

    const addApplicationSubmit = async (event) => {
        event.preventDefault();

        const ApplicationsForSelectedProgram = applicationsData.filter(reply => reply.programId === selectedProgramId);

        // Determine the next reply ID
        const nextReplyId = ApplicationsForSelectedProgram.length + 1;
        const currentDate = new Date().toISOString();

        const newReply = {
            netid: netID,
            applicationData: applicationData,
            applicationDate: currentDate,
            applicationId: nextReplyId,
            programId: selectedProgramId, // This should already be set when the user began the reply process
        };
        console.log(programId);
        await addApplication(newReply.netid, newReply.applicationData, newReply.applicationDate, newReply.applicationId, newReply.programId);
        alert("Thank you for bringing in a Program, your response has been submitted");
        fetchApplicationsAndUpdateState();
        console.log("OK??????")
        setapplicationData('');

    };

    const addProgramSubmit = async (event) => {
        event.preventDefault();

        let maxProgramId, nextProgramId;

        try {
            maxProgramId = programsData.length > 0 ? programsData[programsData.length - 1].programId + 1 : 1;
            nextProgramId = maxProgramId + 1;
        } catch (error) {
            console.error("Error getting max Program id:", error);
            maxProgramId = 1;
            nextProgramId = maxProgramId + 1;
        }

        const currentDate = new Date().toISOString();
        setprogramId(nextProgramId);
        setprogramDate(currentDate);
        alert("Thank you for bringing in a Program, your response has been submitted");
        const response = await addProgram(netID, nextProgramId, programData, currentDate);  // Call fetchData with netID and password

        fetchProgramsAndUpdateState();
        console.log("fetching complete!!!")
        setprogramData('');

    };

    // State to determine which view to show: users, Programs, or Applications
    const [view, setView] = useState('users');
    const [showApplications, setShowApplications] = useState(false);
    const [selectedProgramId, setSelectedProgramId] = useState(null);
    const [currentReplyPage, setCurrentReplyPage] = useState(1);
    const handleProgramClick = (ProgramId) => {
        setSelectedProgramId(ProgramId);
        setShowApplications(true);
        setCurrentReplyPage(1);
    };

    const handleBackClick = () => {
        setShowApplications(false);
        setSelectedProgramId(null);
        setCurrentPage(1);
    };

    const deleteClick = async (event) => {
        //event.preventDefault();
        setShowApplications(false);
        // setSelectedProgramId(null);
        setCurrentPage(1);
        if (netID == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deleteProgram(netID, selectedProgramId);
        }
    };

    const deleteReplyClick = async (replyId, event) => {
        //event.preventDefault();
        setCurrentPage(1);
        if (netID == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deleteApplication(netID, selectedProgramId, replyId); //
        }
        fetchApplicationsAndUpdateState();
    };

    const handleReplyPageChange = (page) => {
        setCurrentReplyPage(page);
    };


    //const [programsData, setprogramsData] = useState([]);
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
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Research Position Postings</h1>
                                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                                        <p><em>Find research position postings from Emory professors</em></p>
                                        <p>All @ Emory.</p>
                                    </div>

                                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                                        <a href="#News_concrete" className="btn btn-secondary">Check available positions below</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section bg-light" id="News_concrete">
                <div className="ProgramsContainer">
                    <main>
                        {showApplications ? (
                            <div>
                                <div className="button-container">
                                    <button className="btn" onClick={handleBackClick}>Back to Programs</button>
                                    <button className="btn" onClick={deleteClick}>Withdraw My Program</button>
                                </div>

                                <h2>Applications</h2>
                                <ul>
                                    {applicationsData
                                        .filter(application => application.programId === selectedProgramId)
                                        .map(application => (
                                            <li key={application.applicationId}>
                                                <strong>{application.applicationDate}</strong>
                                                <div className="App">
                                                    <ReactQuill
                                                        value={application.applicationData}
                                                        config={{
                                                            readOnly: true,

                                                        }}
                                                        modules={{ toolbar: false }}
                                                        theme="snow" // this prop is optional
                                                    />
                                                </div>
                                                <button onClick={() => deleteReplyClick(application.applicationId)}>Withdraw My Application</button>
                                            </li>
                                        ))}
                                </ul>
                                <form onSubmit={addApplicationSubmit}>
                                    <label>
                                        New Programs</label>

                                    <ReactQuill

                                        onChange={(content) => setapplicationData(content)}
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Sincerity brings connections."
                                        theme="snow" // this prop is optional
                                    />


                                    <input type="submit" value="Submit Application" />
                                    <p>
                                        Clicking on the above button implies you agree to the
                                        <a href="#" onClick={showTerms}> terms and conditions</a>.
                                    </p>

                                </form>
                            </div>
                        ) : (
                            <div>
                                <h2>Programs</h2>
                                {programsData && programsData.length > 0 ? (
                                    <ul>
                                        {programsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                                            .map(program => (
                                                <li key={program.programId} onClick={() => handleProgramClick(program.programId)}>


                                                    <ReactQuill
                                                        value={program.programData}
                                                        config={{
                                                            readOnly: true,

                                                        }}
                                                        modules={{ toolbar: false }}
                                                        theme="snow" // this prop is optional
                                                    />


                                                    - by {getUserNameByNetId(program.netid)}
                                                </li>
                                            ))}
                                    </ul>) : (
                                    <div></div>
                                )
                                }
                                <form onSubmit={addProgramSubmit} className="new-program-form">
                                    <label>   Adding New Program Statement to Cohort  </label>

                                    <ReactQuill

                                        onChange={(content) => setprogramData(content)}
                                        modules={modules}
                                        formats={formats}
                                        placeholder="Sincerity brings connections."
                                        theme="snow" // this prop is optional
                                    />

                                    <input type="submit" value="Create New Program" />
                                </form>
                            </div>
                        )}
                    </main>

                        

                </div>

                <div className="row mt-5">

                    <div className="col-12 text-center">
                        <ul className="list-unstyled custom-pagination">


                            {showApplications ?
                                generatePagination(currentReplyPage, Math.ceil(applicationsData.filter(reply => reply.programId === selectedProgramId).length / ITEMS_PER_PAGE)).map((page, index) => (
                                    <li key={index} className={page === currentReplyPage ? 'active' : ''}>
                                        {page === '...' ? (
                                            '...'
                                        ) : (
                                            <a onClick={() => handleReplyPageChange(page)}>{page}</a>
                                        )}
                                    </li>
                                ))
                                :
                                generatePagination(currentPage, Math.ceil(programsData.length / ITEMS_PER_PAGE)).map((page, index) => (
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
export default CentralizedApplication;
