import React, { useState, useEffect, useContext } from 'react';
import { LabLinkContext } from '../LabLinkProvider';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import Navbar from './Navbar.js';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Include the CSS for the WYSIWYG editor
import Quill from 'quill';
import QuillHtmlEditButton from 'quill-html-edit-button';
import '../styles/singleprof.css'
const ITEMS_PER_PAGE = 10;
const MAX_VISIBLE_PAGINATION = 8;

Quill.register('modules/htmlEditButton', QuillHtmlEditButton);




function SingleProf() {

  const { profName } = useParams();


  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    console.log("OK CLCIED");
    console.log(isEditing);
    if (isEditing){
      setIsEditing(false);
    }
    else{
      setIsEditing(true);
    }

  };
  
  const location = useLocation();
  const [professorInfo, setprofessorInfo] = useState([]);
  const [professor, setProfessor] = useState(null); // Moved useState to the top
  const [editorContent, setEditorContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { netID, setNetID } = useContext(LabLinkContext);

  const joinArrayOrReturnNull = (array) => {
    return Array.isArray(array) ? array.join(', ') : null;
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true
      try {
        await fetchProfessorsAndUpdateState();
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setIsLoading(false); // Set loading to false after fetch
    };

    fetchData();
  }, []);

  const fetchProfessorsAndUpdateState = async () => {
        try {
            const response = await fetch("/api/forum?dataType=ProfessorSample", {
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
                console.log("OK PROFESSORSET")
                setprofessorInfo(responseData);

            } else {
                console.error('Error or non-JSON response:', responseData);
            }
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };


  const [mathFieldLatex, setMathFieldLatex] = useState('');
  const modules = {
        toolbar: [
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'direction': 'rtl' }],
            ['clean'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
        ],
        clipboard: {
            // Match visual, not literal, whitespace
            matchVisual: false,
        },
        htmlEditButton: {}
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video','script','direction','color','background','align'
    ];
  // const profKey = location.state && location.state.prof;


  function findProfessorByName(name) {
    return professorInfo.find(prof => prof.Name === decodeURIComponent(name));
  }


async function modifyCV(Name, PopupInfo) {
    try {
        const response = await fetch("/api/forum", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                collectionName: 'ProfessorSample',
                filter: { Name: Name }, // Assuming 'Name' is the field you want to match
                updateData: { PopupInfo: editorContent } // The data you want to update
            }),
        });
        console.log(response);
        const statusCode = response.status;
        console.log(statusCode);

    } catch (error) {
        console.log("Something is wrong...?")
        console.log(error);
    }
}

const modifyCVSubmit = async (event) => {
        event.preventDefault();
        const profdt = findProfessorByName(profName);

        // Determine the next reply ID
        const Name = profdt.Name;
        console.log(editorContent);
        await modifyCV(Name, editorContent);
        alert("SAVED!");

    };



if (isLoading) {

  return (<p>Loading professor Details...</p>);
  }


  if (!profName || !findProfessorByName(profName)) {
    const profdt = professorInfo[0]

    return (<div className='SingleProf'>

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
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p>Professors </p>
                      <p>All @ Emory</p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#News_concrete" className="btn btn-secondary">Explore instructors</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


         <div className="untree_co-section">


        <div className="container">
      <div className="row">
        <div className="col-lg-5 mr-auto mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
          <img src={profdt.Image && profdt.Image.length > 0 ? profdt.Image : null} alt="profile" className="img-fluid" style={{ width: '40%', height: 'auto' }} />
        </div>
        <div>
          <p>{profdt.Title && profdt.Name ? `${profdt.Title} ${profdt.Name}` : null}</p>
          <p>{profdt.PopupInfo ? `${profdt.PopupInfo} ` : null} </p>
          <div>
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          value = {editorContent}
          onChange={(content) => setEditorContent(content)}
          modules={modules}
          formats={formats}
        />
      </div>
        </div>
      </div>
    </div>
      </div>


//////////////

    </div>






        <div className="untree_co-section bg-light" id = "News_concrete">

        <div className="site-footer">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 mr-auto">
                <div className="widget">
                  <h3>About Us<span className="text-primary"></span> </h3>
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
    </div>);
  }







  const profdt = findProfessorByName(profName);





  return (
    <div className='SingleProf'>

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
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p>Professors </p>
                      <p>All @ Emory</p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#News_concrete" className="btn btn-secondary">Explore instructors</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


         <div className="untree_co-section">


<div className="container">
      <div className="row">
        <div className="col-lg-5 mr-auto mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
          <img src={profdt.Image && profdt.Image.length > 0 ? profdt.Image : null} alt="profile" className="img-fluid" style={{ width: '40%', height: 'auto' }} />
        </div>
        <div className = 'ProfessorIntroduction'>
          <p>{profdt.Title && profdt.Name ? `${profdt.Title} ${profdt.Name}` : null}</p>
        </div>
      </div>
    </div>
      </div>








      <div>
      <form onSubmit={modifyCVSubmit}>
        <label>Public Research Website Editor</label>
        <div>
          {isEditing ? (
            <div className="text-editor">
              <ReactQuill
                theme="snow"
                onChange={(content) => setEditorContent(content)}
                modules={modules}
                formats={formats}
              />
            </div>
          ) : (
            <div className="text-editor">
              <ReactQuill
                theme="snow"
                onChange={(content) => setEditorContent(content)}
                modules={modules}
                formats={formats}
                value={profdt.PopupInfo}
              />
            </div>
          )}
        </div>
        {netID === profdt.name && (
          <input type="submit" value="Edit my Website!" />
        )}
      </form>

      {netID === profdt.name && (
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
        <div className="untree_co-section bg-light" id = "News_concrete">

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
    </div>
  );
}

export default SingleProf;
