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
        const statusCode = response.status;

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

    </div>






        <div className="untree_co-section bg-light" id = "News_concrete">

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
            <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="0">
              
              <div class="staff text-center">
                <div class="mb-4">
                  <img src={profdt.Image && profdt.Image.length > 0 ? profdt.Image : null} alt="profile" className="img-fluid" style={{ width: '80%', height: 'auto' }} />
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4">
              <div class="section-title mb-3" data-aos="fade-up" data-aos-delay="100">
                <h2 class="line-bottom mb-4">{profdt.Title && profdt.Name ? `${profdt.Title} ${profdt.Name}` : null}</h2>
              </div>

              <div class="large mr-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                <span class="uil uil-envelope mr-2"></span> 
                <span class="d-none d-lg-inline-block">{profdt.Email}</span>
              </div>

              <div class="large mr-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                <span class="uil uil-book-open mr-2"></span> 
                <span class="d-none d-lg-inline-block">{profdt.Subject}</span>
              </div>

              <div class="large mr-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                <span class="uil uil-bag-alt mr-2"></span> 
                <span class="d-none d-lg-inline-block">{profdt.Office}</span>
              </div>
            </div>
          </div>

          <div>
            <form className="editor-container" onSubmit={modifyCVSubmit}>
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
          {netID === profdt.netID && (
            <input className="submit-edits" type="submit" value="Save Edits" />
          )}
          {netID === profdt.netID && (
            <button className="edit-website" type="button" onClick={handleEditClick}>
              Edit
            </button>
          )}
            </form>
          </div>
          
        </div>
      </div>

      <div className="untree_co-section bg-light footer-container" id = "News_concrete">

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
    </div>
  );
}

export default SingleProf;
