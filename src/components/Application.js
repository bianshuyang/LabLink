import React, { useState, useEffect } from 'react';
import "../styles/application.css";
import { Link } from "react-router-dom"
import Navbar from './Navbar.js';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


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

    const getUserNameByNetId = (netid) => {
        const user = usersData.find(u => u.netid === netid);
        return user ? user.Name : netid;
    };

    const urlWithParams = (endpoint, collectionName, filter = {}) => {
        const params = new URLSearchParams({ collectionName });
        return `${endpoint}?${params.toString()}`;
    };

    const [programsData, setprogramsData] = useState([]);
    const [applicationsData, setapplicationsData] = useState([]);
    const [usersData, setusersData] = useState([]);

    const [netid, setnetid] = React.useState('');
    const [programId, setprogramId] = React.useState('');
    const [programData, setprogramData] = React.useState('');
    const [programDate, setprogramDate] = React.useState('');
    ////////////
    const [applicationId, setapplicationId] = React.useState('');
    const [applicationData, setapplicationData] = React.useState('');
    const [applicationDate, setapplicationDate] = React.useState('');


    /////////////
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
                    replycontent: applicationData,
                    replydate: applicationDate,
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
        const token = sessionStorage.getItem('userToken');
        console.log(token, "is token!!!!");
        const randomNetId = token; // Placeholder for actual netid, to be improved
        const currentDate = new Date().toISOString();

        const newReply = {
            netid: randomNetId,
            replycontent: applicationData,
            replydate: currentDate,
            applicationId: nextReplyId,
            programId: selectedProgramId, // This should already be set when the user began the reply process
        };
        console.log(programId);
        await addApplication(newReply.netid, newReply.replycontent, newReply.replydate, newReply.applicationId, newReply.programId);
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

        const token = sessionStorage.getItem('userToken');
        console.log(token, "is token!!!!");
        const randomNetId = token; // to be replaced when we connect
        const currentDate = new Date().toISOString();
        setnetid(randomNetId);
        setprogramId(nextProgramId);
        setprogramDate(currentDate);
        alert("Thank you for bringing in a Program, your response has been submitted");
        const response = await addProgram(randomNetId, nextProgramId, programData, currentDate);  // Call fetchData with netID and password

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
        event.preventDefault();
        setShowApplications(false);
        // setSelectedProgramId(null);
        setCurrentPage(1);
        console.log(selectedProgramId);
        const token = sessionStorage.getItem('userToken');
        if (token == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deleteProgram(token, selectedProgramId);
        }
    };

    const deleteReplyClick = async (replyId, event) => {
        event.preventDefault();
        setCurrentPage(1);
        console.log(selectedProgramId, replyId);
        const token = sessionStorage.getItem('userToken');
        if (token == null) {
            alert("Unauthorized deletion. Please log in.")
            return
        }
        else {
            await deleteApplication(token, selectedProgramId, replyId); //
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
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Centralized Application</h1>
                                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                                        <p><h2><em>"A great place for Programs."</em></h2></p>
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
            <div className="untree_co-section bg-light" id="News_concrete">
                <div className="ProgramsContainer">








                    <main>
                        {showApplications ? (
                            <div>
                                <div className="button-container">
                                    <button className="btn" onClick={handleBackClick}>Back to Programs</button>
                                    <button className="btn" onClick={deleteProgram}>Withdraw My Application</button>
                                </div>

                                <h2>Applications</h2>
                                <ul>
                                    {applicationsData
                                        .filter(application => application.programId === selectedProgramId)
                                        .map(application => (
                                            <li key={application.applicationId}>
                                                <strong>{application.applicationDate}</strong>
                                                <div className="App">
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={application.replycontent}
                                                        config={{
                                                            readOnly: true,
                                                            toolbar: []
                                                        }}
                                                    />
                                                </div>
                                                <button onClick={() => deleteApplication(application.applicationId)}>Withdraw My Application</button>
                                            </li>
                                        ))}
                                </ul>
                                <form onSubmit={addApplicationSubmit}>
                                    <label>
                                        New Programs</label>
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={programData}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setapplicationData(data);
                                            }}
                                            config={{
                                                // You can set additional CKEditor config here if needed
                                            }}
                                        />
                                    </div>
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
                                                    <div className="App">
                                                        <CKEditor
                                                            editor={ClassicEditor}
                                                            data={program.programData}
                                                            config={{
                                                                readOnly: true,
                                                                toolbar: []
                                                            }}
                                                        />
                                                    </div>
                                                    - by {getUserNameByNetId(program.netid)}
                                                </li>
                                            ))}
                                    </ul>) : (
                                    <div>No programs available.</div>
                                )
                                }
                                <form onSubmit={addProgramSubmit} className="new-program-form">
                                    <label>   Adding New Program Statement to Cohort </label>
                                    <div className="App">
                                        <CKEditor
                                            editor={ClassicEditor}

                                            data={programData}
                                            onReady={editor => { }}
                                            onChange={(event, editor) => {
                                                try {

                                                    const data = editor.getData();
                                                    setprogramData(data);
                                                    console.log("OK Set post data?")
                                                    // Assuming 'postid' holds the ID of the post being edited
                                                    setprogramsData(currentPrograms =>
                                                        currentPrograms.map(program =>
                                                            program.programId === programId ? { ...program, programData: data } : program
                                                        )
                                                    );
                                                } catch (error) {
                                                    console.error('Error in editor onChange:', error);
                                                }
                                            }}


                                        />
                                    </div>

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

export default CentralizedApplication;
