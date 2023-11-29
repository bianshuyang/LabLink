import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar.js';
import '../styles/professors.css'
import { LabLinkContext } from '../LabLinkProvider';
const ITEMS_PER_PAGE = 9; // Adjust as needed
const MAX_VISIBLE_PAGINATION = 19; // Maximum number of visible pagination links
const stringSimilarity = require("string-similarity");
function generatePagination(currentPage, maxPages) {
    let pages = [];
    const wingSpan = Math.floor(MAX_VISIBLE_PAGINATION / 2);


    if (maxPages <= MAX_VISIBLE_PAGINATION) {
        // If the total pages are less than the max visible, show all pages
        for (let i = 1; i <= maxPages; i++) {
            pages.push(i);
        }
    } else {
        // Always include the first page
        pages.push(1);

        // Determine if we need to add the starting ellipsis
        let startEllipsisNeeded = currentPage > wingSpan + 2;
        if (startEllipsisNeeded) {
            pages.push('...');
        }

        // Determine the middle range of pages
        let start = Math.max(2, currentPage - wingSpan);
        let end = Math.min(maxPages - 1, currentPage + wingSpan);

        // Adjust the start and end if near the beginning or end
        if (currentPage < wingSpan + 2) {
            end = MAX_VISIBLE_PAGINATION - 2;
        }
        if (currentPage > maxPages - wingSpan - 1) {
            start = maxPages - MAX_VISIBLE_PAGINATION + 3;
        }

        // Add the middle range of pages
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        // Determine if we need to add the ending ellipsis
        let endEllipsisNeeded = currentPage < maxPages - wingSpan - 1;
        if (endEllipsisNeeded) {
            pages.push('...');
        }

        // Always include the last page
        pages.push(maxPages);
    }

    return pages;
}



const sortProfessorsByName = (professors) => {
  return professors.slice().sort((a, b) => a.Name.localeCompare(b.Name));
};

function Professors() {
  const calculateSimilarity = (student, professor) => {
    // Convert the professor object to a string
    const professorString = JSON.stringify(professor);

    // Calculate the similarity between the student and professor strings
    const similarity = stringSimilarity.compareTwoStrings(student, professorString);

    return similarity;
  };
  const { netID } = useContext(LabLinkContext);
  const { bio, setBio } = React.useContext(LabLinkContext);
  const { major, setMajor } = React.useContext(LabLinkContext);
  const { courses, setCourses } = React.useContext(LabLinkContext);
  //console.log(bio+major+courses);
  const [doneSorted, setDoneSorted] = useState(true);
  const [doneSortedsim, setDoneSortedsim] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [profile,setprofile]=useState(null);
  const [usersData, setusersData] = React.useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [isSorted, setIsSorted] = useState(false);
  const [isSortedsim, setIsSortedsim] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [professorInfo, setProfessorInfo] = useState([]);
  const [filteredAndSortedProfessors, setFilteredAndSortedProfessors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleSubjectFilter = (event) => {
  // Get the list of selected options
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedSubjects(selectedOptions);
    setCurrentPage(1); // Reset to the first page when filtering by subject
  };
  // Fetch professors data and update state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/forum?dataType=ProfessorSample', {
          method: 'GET',
        });
        const responseDataText = await response.text();

        let responseData;
        try {
          responseData = JSON.parse(responseDataText);
        } catch (error) {
          console.error('Failed to parse response as JSON: ', responseDataText);
          responseData = responseDataText;
        }

        if (typeof responseData === 'object' && response.ok) {
          setProfessorInfo(responseData);
        } else {
          console.error('Error or non-JSON response:', responseData);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Filter and sort professors based on current state
  useEffect(() => {
  // Filter and sort professors based on current state
  const filteredAndSortedProfessors2 = professorInfo
    .filter((prof) => {
      // Apply subject filter if a subject is selected
      if (selectedSubjects.length > 0 && !selectedSubjects.includes(prof.Subject)) {
        return false;
      }
      // Apply search term filter
      if (searchTerm !== '' && !JSON.stringify(prof).toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Sort alphabetically
      if (isSorted) {
        return a.Name.localeCompare(b.Name);
      }
      // Sort by similarity
      if (isSortedsim) {

        const similarityA = stringSimilarity.compareTwoStrings(searchTerm, JSON.stringify(a));
        const similarityB = stringSimilarity.compareTwoStrings(searchTerm, JSON.stringify(b));
        return similarityB - similarityA; // Reverse order for similarity
      }
      return 0; // No sorting by default
    });

  setFilteredAndSortedProfessors(filteredAndSortedProfessors2);
}, [professorInfo, selectedSubjects, searchTerm, isSorted, isSortedsim]); // Dependencies array


  // Calculate pagination
  const maxPages = Math.ceil(filteredAndSortedProfessors.length / ITEMS_PER_PAGE);
  const pagination = generatePagination(currentPage, maxPages);



  // Event handlers
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };


  const toggleSort = () => {
    setIsSorted(!isSorted);
    setIsSortedsim(false); // Reset similarity sorting
  };

  const toggleSortsim = () => {
    if (netID === '') {
    alert('Only registered users can sort by similarity.');
    return;
  }
    setIsSortedsim(!isSortedsim);
    setIsSorted(false); // Reset alphabetical sorting
  };


  if (isLoading) {

  return (
    <div className='Professors'>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
        </div>
      </div>
      <Navbar />
      <div className="untree_co-hero overlay">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center ">
                  <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                  <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                    <p><em>"A good teacher isn't someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed."</em></p>
                  </div>
                  <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                    <a href="#Professor_concrete" className="btn btn-secondary">Explore instructors</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section bg-light" id = "Professor_concrete">
        <div className="container">
          <input className="search-professor-input" type="text" placeholder="Find Professor!" value={searchTerm} onChange={handleSearch}/>
          <button className="sort-alphabetically-button" onClick={toggleSort}>
            {isSorted ? "Unsort" : "Sort Alphabetically"}
          </button>
          <button className="sort-by-similarity-button" onClick={toggleSortsim}>
            {isSortedsim ? "Unsort" : "Sort by Similarity"}
          </button>
          <select
                multiple value={selectedSubjects} onChange={handleSubjectFilter}
                  >
                <option value="">All Subjects</option>
                <option value="German">German</option>
<option value="African American Studies">African American Studies</option>
<option value="French">French</option>
<option value="Sociology">Sociology</option>
<option value="Physics">Physics</option>
<option value="Women's Gender and Sexuality Studies">Women's Gender and Sexuality Studies</option>
<option value="Classics">Classics</option>
<option value="Computer Science">Computer Science</option>
<option value="Ancient Mediterranean Studies">Ancient Mediterranean Studies</option>
<option value="Music">Music</option>
<option value="Philosophy">Philosophy</option>
<option value="African Studies">African Studies</option>
<option value="Comparative Literature">Comparative Literature</option>
<option value="Spanish and Portugese">Spanish and Portugese</option>
<option value="English">English</option>
<option value="Biology">Biology</option>
<option value="Writing Programs">Writing Programs</option>
<option value="Latin American and Carribean Studies">Latin American and Carribean Studies</option>
<option value="Theater">Theater</option>
<option value="Russian and East Asian Languages and Cultures">Russian and East Asian Languages and Cultures</option>
<option value="Dance">Dance</option>
<option value="NBB, Neuroscience and Behavioral Biology (N and BB)">NBB, Neuroscience and Behavioral Biology (N and BB)</option>
<option value="Intstitute for the Liberal Arts">Intstitute for the Liberal Arts</option>
<option value="History">History</option>
<option value="Jewish Studies">Jewish Studies</option>
<option value="Anthropology">Anthropology</option>
<option value="Art History (arthistory)">Art History (arthistory)</option>
<option value="Religion">Religion</option>
<option value="Chemistry">Chemistry</option>
<option value="Environmental Sciences">Environmental Sciences</option>
                {/* Add more options for other subjects */}
              </select>
          <div className="row align-items-stretch">
            <div className="container">
              <div className="untree_co-section bg-light">
                <div className="row">
                  Loading...
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



  const visibleProfessors = filteredAndSortedProfessors.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  return (
    <div className='Professors'>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body">
        </div>
      </div>
      <Navbar />
      <div className="untree_co-hero overlay">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 text-center ">
                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Professors</h1>
                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <p><em>"A good teacher isn't someone who gives the answers out to their kids but is understanding of needs and challenges and gives tools to help other people succeed."</em></p>
                    </div>
                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                      <a href="#Professor_concrete" className="btn btn-secondary">Explore instructors</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <div className="untree_co-section bg-light" id = "Professor_concrete">
        <div className="container">
          <input className="search-professor-input" type="text" placeholder="Find Professor!" value={searchTerm} onChange={handleSearch}/>
          <button className="sort-alphabetically-button" onClick={toggleSort}>
            {isSorted ? "Unsort" : "Sort Alphabetically"}
          </button>
          <button className="sort-by-similarity-button" onClick={toggleSortsim}>
            {isSortedsim ? "Unsort" : "Sort by Similarity"}
          </button>
          <select
                multiple value={selectedSubjects} onChange={handleSubjectFilter}
                  >
                <option value="">All Subjects</option>
                <option value="German">German</option>
<option value="African American Studies">African American Studies</option>
<option value="French">French</option>
<option value="Sociology">Sociology</option>
<option value="Physics">Physics</option>
<option value="Women's Gender and Sexuality Studies">Women's Gender and Sexuality Studies</option>
<option value="Classics">Classics</option>
<option value="Computer Science">Computer Science</option>
<option value="Ancient Mediterranean Studies">Ancient Mediterranean Studies</option>
<option value="Music">Music</option>
<option value="Philosophy">Philosophy</option>
<option value="African Studies">African Studies</option>
<option value="Comparative Literature">Comparative Literature</option>
<option value="Spanish and Portugese">Spanish and Portugese</option>
<option value="English">English</option>
<option value="Biology">Biology</option>
<option value="Writing Programs">Writing Programs</option>
<option value="Latin American and Carribean Studies">Latin American and Carribean Studies</option>
<option value="Theater">Theater</option>
<option value="Russian and East Asian Languages and Cultures">Russian and East Asian Languages and Cultures</option>
<option value="Dance">Dance</option>
<option value="NBB, Neuroscience and Behavioral Biology (N and BB)">NBB, Neuroscience and Behavioral Biology (N and BB)</option>
<option value="Intstitute for the Liberal Arts">Intstitute for the Liberal Arts</option>
<option value="History">History</option>
<option value="Jewish Studies">Jewish Studies</option>
<option value="Anthropology">Anthropology</option>
<option value="Art History (arthistory)">Art History (arthistory)</option>
<option value="Religion">Religion</option>
<option value="Chemistry">Chemistry</option>
<option value="Environmental Sciences">Environmental Sciences</option>
                {/* Add more options for other subjects */}
              </select>
          <div className="row align-items-stretch">
  <div className="container">
    <div className="untree_co-section bg-light">
      <div className="row">
        {visibleProfessors.map((prof, index) => (
          <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay={index * 100} key={prof.id /* Assuming each professor has a unique id */}>
            <div className="staff text-center">
              <div className="mb-4"><img src={prof.Image} alt="Image" className="img-fluid" /></div>
              <div className="staff-body">
                <h3 className="staff-name">
                  <Link to={`/SingleProf/${encodeURIComponent(prof.Name)}`}>{prof.Name}</Link>
                </h3>
                <span className="d-block position mb-4">{prof.Title}</span>
                <p className="mb-5">{prof.Subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
<div className="row mt-5 pagination-container">
  <div className="col-12 text-center">
    <ul className="list-unstyled custom-pagination">
      {pagination.map((page, index) => (
        <li key={index} className={page === currentPage ? 'active' : ''}>
          {page === '...' ? (
            <span>...</span>
          ) : (
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setCurrentPage(page);
            }}>{page}</a>
          )}
        </li>
      ))}
    </ul>
  </div>
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
    </div>
  );
}

export default Professors;
